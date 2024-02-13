let todos = [];

function submitTodoForm(event) {
    event.preventDefault();
    addTodo();
}

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
    const todoListContainer = document.getElementById('todo-list-container');
    todoListContainer.style.display = 'block'; // Show the todo list container

    const todoList = document.getElementById('todo-list');
    const todoCount = document.getElementById('todo-count');

    todoList.innerHTML = '';
    todoCount.innerText = `Todos: ${todos.length}`;

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const todoTextContainer = document.createElement('div');
        todoTextContainer.classList.add('text-container');

        const editIcon = document.createElement('span');
        editIcon.innerHTML = '&#9998;';
        editIcon.classList.add('edit-icon');
        editIcon.onclick = () => editTodoText(index);

        const todoText = document.createElement('span');
        todoText.innerText = todo.text;

        const statusButton = document.createElement('button');
        statusButton.innerText = todo.status === 'New' ? 'Done' : 'New';
        statusButton.style.backgroundColor = todo.status === 'New' ? 'red' : 'green';
        statusButton.onclick = () => toggleStatus(index);

        todoTextContainer.appendChild(todoText);
        todoTextContainer.appendChild(editIcon);

        todoItem.appendChild(todoTextContainer);
        todoItem.appendChild(statusButton);

        todoList.appendChild(todoItem);
    });
}  

function editTodoText(index) {
    const todoTextContainer = document.querySelector(`#todo-list li:nth-child(${index + 1}) .text-container`);
    
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = todos[index].text;
    
    inputField.addEventListener('blur', () => finishEditing(index));
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            finishEditing(index);
        }
    });

    todoTextContainer.replaceChild(inputField, todoTextContainer.querySelector('span'));

    inputField.focus();
}

function finishEditing(index) {
    const todoTextContainer = document.querySelector(`#todo-list li:nth-child(${index + 1}) .text-container`);
    const updatedText = todoTextContainer.querySelector('input').value.trim();
    
    if (updatedText !== '') {
        todos[index].text = updatedText;
    }
}

function toggleStatus(index) {
    todos[index].status = todos[index].status === 'New' ? 'Done' : 'New';
    updateTodoList();
}

updateTodoList();
