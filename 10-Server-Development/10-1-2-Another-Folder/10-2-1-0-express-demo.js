const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/hello', function (req, res) {
  res.send('Hello world');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye');
});

app.post('/hello', function (req, res) {
  res.json({
    hello: 'world',
  });
});

app.get('/goodbye/:a/:b', function (req, res) {
  console.log(req.params), res.send('Goodbye');
});

app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});
