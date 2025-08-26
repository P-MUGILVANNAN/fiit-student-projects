document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    loadTasks();

    // Add task event listener
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        // Create task item
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.addEventListener('change', toggleTask);

        // Create task text
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);

        // Append elements to task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);

        // Add task to list
        taskList.appendChild(taskItem);

        // Clear input
        taskInput.value = '';

        // Save tasks to localStorage
        saveTasks();
    }

    function toggleTask(e) {
        const taskItem = e.target.parentElement;
        const taskText = taskItem.querySelector('.task-text');
        taskText.classList.toggle('completed');
        
        // Save tasks to localStorage
        saveTasks();
    }

    function deleteTask(e) {
        const taskItem = e.target.parentElement;
        taskList.removeChild(taskItem);
        
        // Save tasks to localStorage
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(taskItem => {
            const taskText = taskItem.querySelector('.task-text').textContent;
            const isCompleted = taskItem.querySelector('.task-checkbox').checked;
            tasks.push({ text: taskText, completed: isCompleted });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            tasks.forEach(task => {
                // Create task item
                const taskItem = document.createElement('li');
                taskItem.className = 'task-item';

                // Create checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'task-checkbox';
                checkbox.checked = task.completed;
                checkbox.addEventListener('change', toggleTask);

                // Create task text
                const taskSpan = document.createElement('span');
                taskSpan.className = 'task-text';
                taskSpan.textContent = task.text;
                if (task.completed) {
                    taskSpan.classList.add('completed');
                }

                // Create delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', deleteTask);

                // Append elements to task item
                taskItem.appendChild(checkbox);
                taskItem.appendChild(taskSpan);
                taskItem.appendChild(deleteBtn);

                // Add task to list
                taskList.appendChild(taskItem);
            });
        }
    }
});