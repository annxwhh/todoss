let todos = [];

function addTodo() {
    const inputElement = document.getElementById('todo-input');
    const todoText = inputElement.value.trim();

    if (todoText !== '') {
        const todo = { text: todoText, status: 'New' };
        todos.push(todo);
        inputElement.value = '';
        updateTodoList();
    }
}

function updateTodoList() {
    const todoList = document.getElementById('todo-list');
    const todoCount = document.getElementById('todo-count');

    todoList.innerHTML = ";
    todoCount.innerHTML = Total Todos: ${todos.length};
}
