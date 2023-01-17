let currentId = 1;

function getNextId() {
  return currentId++;
}

let todos = [];

function getTodos() {
  return todos;
}

function createTodo(text) {
  const newTodo = {
    id: getNextId(),
    text: text,
    completed: false,
  };

  todos.push(newTodo);

  return newTodo;
}

function updateTodo(todoId, updates) {
  todos = todos.map((todo) => {
    if (todo.id == todoId) {
      return { ...todo, ...updates };
    } else {
      return todo;
    }
  });
}

function deleteTodo(todoId) {
  todos = todos.filter((todo) => todo.id != todoId);
}

module.exports = {
  getTodos: getTodos,
  createTodo: createTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
