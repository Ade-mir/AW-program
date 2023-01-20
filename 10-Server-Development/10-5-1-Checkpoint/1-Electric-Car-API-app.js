const express = require('express');
const cors = require('cors'); // To fix error in console when displaying on frontend.
const bodyParser = require('body-parser');
const dataBase = require('./1-Electric-Car-API-database.js');
const app = express();

dataBase.load('./1-Electric-Car-database.json');

app.use(cors());
app.use(bodyParser.json());

app.get('/cars/', function (req, res) {
  const cars = dataBase.getcars(req);
  res.json(cars);
});

app.get('/cars/:car_id', function (req, res) {
  const car = dataBase.getcar(req.params.car_id);
  res.json(car);
});

app.post('/cars', function (req, res) {
  var newCar = dataBase.createcar(req.body);
  res.status(200).send({
    message: 'Car with id ' + newCar.id + ' successfully added',
  });
  dataBase.save('./1-Electric-Car-database.json');
});

app.delete('/cars/:car_id', function (req, res) {
  dataBase.deletecar(req.params.car_id);
  res.status(200).end();
  dataBase.save('./1-Electric-Car-database.json');
});

const port = 3000;
app.listen(port, function () {
  console.log(`Express app listening on port ${port}`);
});
