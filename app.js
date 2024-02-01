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

}