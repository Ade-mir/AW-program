const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataBase = require('./database');
const app = express();

dataBase.load('./save.json');

app.use(cors());
app.use(bodyParser.json());

app.get('/book/', function (req, res) {
  const books = dataBase.getBooks(req);
  res.json(books);
});

app.get('/book/:book_id', function (req, res) {
  const book = dataBase.getBook(req.params.book_id);
  res.json(book);
});

app.post('/book', function (req, res) {
  dataBase.createBook(req.body);
  res.status(200).end();
  dataBase.save('./save.json');
});

app.patch('/book/:book_id', function (req, res) {
  dataBase.updateBook(req.params.book_id, req.body);
  res.status(200).end();
  dataBase.save('./save.json');
});

app.delete('/book/:book_id', function (req, res) {
  dataBase.deleteBook(req.params.book_id);
  res.status(200).end();
  dataBase.save('./save.json');
});

app.listen(5500, function () {
  console.log('Express app listening on port 5500');
});
