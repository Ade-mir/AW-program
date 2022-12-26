const mainNode = document.getElementById('root');

let todos = [
  {
    text: 'Buy milk',
    completed: true,
  },
  {
    text: 'Learn JavaScript',
    completed: false,
  },
  {
    text: 'Play TicTacToe',
    completed: false,
  },
];

function renderHome() {
  // Generate markup
  mainNode.innerHTML = `
    <h1>Easy Todo</h1>
    <button id='showListButton' >Show todo list</button>
    `;
  const showListButtonNode = document.getElementById('showListButton');
  showListButtonNode.addEventListener('click', function () {
    renderList();
  });
}

renderHome();

function renderList() {
  //Generate markup based on state + add event listeners

  let listItems = todos.map(function (todo, todoIndex) {
    let itemClass = todo.completed ? 'done' : '';
    return `<li class="${itemClass}" id="${todoIndex}">${todo.text}</li>`;
  });

  mainNode.innerHTML = `
    <h1>My Todos</h1>
    <ul id=todos>
        ${listItems.join('')}
    </ul>
    <input id="text" type="text" placeholder="New todo...">
    <button id="add">Add Todo</button>
    <button id='backButton'>Back</button>
    `;

  const addTodoButtonNode = document.getElementById('add');
  const todoInputNode = document.getElementById('text');
  addTodoButtonNode.addEventListener('click', function () {
    const newTodoText = todoInputNode.value;

    if (!newTodoText.trim()) {
      return;
    }

    todos.push({
      text: newTodoText,
      completed: false,
    });
    renderList();
  });

  todoInputNode.addEventListener('keypress', function (event) {
    console.log(event.key, event.code);
    if (event.key !== 'Enter') {
      return;
    }
    // if (event.key === 'Enter') {
    // }
  });

  const todoListNode = document.getElementById('todos');

  todoListNode.addEventListener('click', function (event) {
    const todoIndex = event.target.id;
    todos[todoIndex].completed = !todos[todoIndex].completed;
    renderList();
  });

  const backButtonNode = document.getElementById('backButton');
  backButtonNode.addEventListener('click', function () {
    renderHome();
  });
}

//   todoListNode = focus();
