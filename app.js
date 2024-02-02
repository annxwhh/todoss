let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        todos.push({ text: todoText, status: 'New' });
        todoInput.value = '';
        updateTodoList();
    }
}

function updateTodoList() {
    const todoList = document.getElementById('todo-list');
    const todoCount = document.getElementById('todo-count');

    todoList.innerHTML = '';
    todoCount.innerText = `Total Todos: ${todos.length}`;

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const editIcon = document.createElement('span');
        editIcon.innerHTML = '&#9998;';
        editIcon.classList.add('edit-icon');
        editIcon.onclick = () => editTodo(index);

        const todoText = document.createElement('span');
        todoText.innerText = todo.text;

        const label = document.createElement('span');
        label.innerText = todo.status;
        label.classList.add('label', todo.status.toLowerCase());
        label.onclick = () => toggleStatus(index);

        todoItem.appendChild(todoText);
        todoItem.appendChild(editIcon);
        todoItem.appendChild(label);

        todoList.appendChild(todoItem);
    });
}

