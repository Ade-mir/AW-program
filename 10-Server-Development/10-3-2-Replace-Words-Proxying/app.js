const express = require('express');
const request = require('request');
const app = express();

app.get('/hacktheplanet', (req, res) => {
  const { page, word, replacewith } = req.query;
  request(page, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const hackedBody = body.replace(new RegExp(word, 'g'), replacewith);
      res.send(hackedBody);
    } else {
      res.status(500).send({ error });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
