const express = require('express');
const app = express();

let pingPong = {
  ping: 'ping',
  pong: 'pong',
};

app.get('/ping', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(`"response": "${pingPong.pong}"`);
});

app.get('/pong', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(`"response": "${pingPong.ping}"`);
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
