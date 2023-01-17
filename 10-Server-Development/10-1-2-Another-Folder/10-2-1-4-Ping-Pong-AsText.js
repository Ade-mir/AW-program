const express = require('express');
const app = express();

let pingPong = {
  ping: 'ping',
  pong: 'pong',
};

app.get('/ping', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end(pingPong.pong);
});

app.get('/pong', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end(pingPong.ping);
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
