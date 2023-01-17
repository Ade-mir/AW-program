const express = require('express');
const bodyParser = require('body-parser');
const dataBase = require('./dataBase');
const app = express();

app.use(bodyParser.json());

app.get('/user/:user_id', function (req, res) {
  // console.log('User data saved: ', req.params);
  const user = dataBase.getUser(req.params.user_id);
  res.json(user);
});

app.post('/user', function (req, res) {
  // console.log('User data received: ', req.body);
  dataBase.createUser(req.body);
  res.status(200).end();
  dataBase.save('./save.json');
});

app.patch('/user/:user_id', function (req, res) {
  dataBase.updateUser(req.params.user_id, req.body);
  res.status(200).end();
  dataBase.save('./save.json');
});

app.delete('/user/:user_id', function (req, res) {
  dataBase.deleteUser(req.params.user_id);
  res.status(200).end();
  dataBase.save('./save.json');
});

dataBase.load('./save.json');

app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});
