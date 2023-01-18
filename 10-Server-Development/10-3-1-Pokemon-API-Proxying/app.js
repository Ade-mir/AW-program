const express = require('express');
const https = require('https');
const path = require('path');
const app = express();

app.use(express.static('public'));
// this line is for serving static files such as css and images

app.get('/pokemon/:id', (req, res) => {
  const id = req.params.id;
  const pokeAPIUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  https
    .get(pokeAPIUrl, (apiRes) => {
      let body = '';
      apiRes.on('data', (chunk) => {
        body += chunk;
      });

      // Counter for attack number
      let counter = 1;
      function attackNum() {
        return counter++;
      }
      // End counter for attack number

      apiRes.on('end', () => {
        if (apiRes.statusCode === 200) {
          const data = JSON.parse(body);
          const name = data.name;
          const frontImage = data.sprites.front_shiny;
          const backImage = data.sprites.back_shiny;
          const attacks = data.moves.map((move) => move.move.name);

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(`<!DOCTYPE html><html>
                        <head>
                            <link rel="stylesheet" type="text/css" href="/styles.css">
                        </head>
                        <body><div id="container">`);
          res.write(`<h1>${name}</h1>`);
          res.write(`<div id = "pokemon-pictures"><img src="${frontImage}">`);
          res.write(`<img src="${backImage}"></div>`);
          res.write(`<ul>`);
          attacks.forEach((attack) => {
            res.write(`<li>${attackNum() + ' ' + attack}</li>`);
          });
          res.write(`</ul>
                        </div></body>
                    </html>`);
          res.end();
        } else {
          res.status(apiRes.statusCode).send(apiRes.statusMessage);
        }
      });
    })
    .on('error', (error) => {
      res.status(500).send(error);
    });
});

const port = 3333;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
