let list = document.querySelector('.form-tasks');
let form = document.querySelector('.concentration-form')

let template = document.querySelector('#task').content;
let newTask = template.querySelector('.new-task');

let todoList = JSON.parse(localStorage.getItem('concentration')) || [];

function handleSubmit(e) {
    e.preventDefault();

    let task = newTask.cloneNode(true);
    let taskTitle = task.querySelector('.task-title');
    let taskTime = task.querySelector('.task-time');

    let form = e.target;
    let userTitle = form.elements.text.value;
    let userTime = form.elements.number.value;

    taskTitle.textContent = userTitle;
    taskTime.textContent = userTime + 'хв';

    todoList.push([userTitle, userTime]);
    updateLocalStorage();

    deleteButton(task, userTitle);

    list.appendChild(task);

    form.reset();
}

form.addEventListener('submit', handleSubmit);

function updateLocalStorage() {
    localStorage.setItem('concentration', JSON.stringify(todoList));
}

function deleteButton(item, taskText) {
    item.addEventListener('click', function () {
        item.remove();
        todoList = todoList.filter((el) => el[0] !== taskText);
        updateLocalStorage();
    });
}

for (let i = 0; i < todoList.length; i++) {
    let task = newTask.cloneNode(true);
    let taskTitle = task.querySelector('.task-title');
    let taskTime = task.querySelector('.task-time');

    taskTitle.textContent = todoList[i][0];
    taskTime.textContent = todoList[i][1] + 'хв';

    deleteButton(task, todoList[i][0]);

    list.appendChild(task);
}