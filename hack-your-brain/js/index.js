let submit = document.querySelector('form');
let list = document.querySelector('.form-tasks');

let template = document.querySelector('#task').content;
let templateText = template.querySelector('.task-text');
let newTemplate = template.querySelector('.template-new');

let toDoList = JSON.parse(localStorage.getItem('todo')) || [];


function handleSubmit(e) {
    e.preventDefault();

    let task = newTemplate.cloneNode(true);
    let taskText = task.querySelector('h4');

    let form = e.target;
    let userText = form.elements.text.value;

    deleteItem(task, userText);

    taskText.textContent = userText;

    toDoList.push(userText);
    updateLocalStorage();

    list.appendChild(task);

    form.reset();
}

submit.addEventListener('submit', handleSubmit);


function deleteItem(item, taskText) {
    let deleteButton = item.querySelector('input');

    deleteButton.addEventListener('change', function () {
        item.remove();
        toDoList = toDoList.filter((el) => el !== taskText);
        updateLocalStorage();
    });
}

function updateLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(toDoList));
}

for (let i = 0; i < toDoList.length; i++) {
    let task = newTemplate.cloneNode(true);
    let taskText = task.querySelector('h4');

    deleteItem(task, toDoList[i]);

    taskText.textContent = toDoList[i];
    list.appendChild(task);
}