document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const themeButtons = document.querySelectorAll('.theme-buttons button');

    themeButtons.forEach(button => button.addEventListener('click', changeTheme));
    taskForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => taskItem.remove());

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function changeTheme(event) {
        document.body.className = event.target.id;
    }
});
