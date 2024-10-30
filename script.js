document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const dateInput = document.getElementById('date-input');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addEntry);

    function addEntry(event) {
        event.preventDefault();
        const date = dateInput.value;
        const task = taskInput.value.trim();

        if (date && task) {
            const listItem = document.createElement('li');
            listItem.textContent = `${date}: ${task}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => listItem.remove());

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            dateInput.value = '';
            taskInput.value = '';
        }
    }
});
