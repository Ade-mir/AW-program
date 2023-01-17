const express = require('express');
const bodyParser = require('body-parser');
const todoDatabase = require('./10-2-1-6-todos');
const app = express();

app.use(bodyParser.json());

app.get('/todos', function (req, res) {
  const todos = todoDatabase.getTodos();
  res.json(todos);
});

app.post('/todos', function (req, res) {
  const newTodo = todoDatabase.createTodo(req.body.text);
  res.status(200);
  res.json(newTodo);
});

app.patch('/todos/:todoId', function (req, res) {
  todoDatabase.updateTodo(req.params.todoId, req.body);
  res.end();
});

app.delete('/todos/:todoId', function (req, res) {
  todoDatabase.deleteTodo(req.params.todoId);
  res.end();
});

app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});
