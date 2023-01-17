const http = require('http');
const JokeAPI = require('sv443-joke-api');

const server = http.createServer(function (req, res) {
  if (req.url === '/jokes') {
    JokeAPI.getJokes()
      .then((res) => res.json())
      .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end(`
        <html>
            <head>
                <title>This is my first server</title>
            </head>
            <body>
                <h1>${data.setup}</h1>
            </body>
        </html>
        `);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error retrieving joke');
        console.error(error);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});
