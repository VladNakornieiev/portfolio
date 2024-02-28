let title = document.querySelector('.hygiene-list .title h2');
let previous = document.querySelector('.hygiene-list .title img[alt="arrow left"]');
let next = document.querySelector('.hygiene-list .title img[alt="arrow right"]');
let checkboxes = document.querySelectorAll('.hygiene-box label input[type="checkbox"]');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let hygieneCalendar = JSON.parse(localStorage.getItem('hygieneCalendar')) || [];

title.textContent = `${day}/${month}/${year}`;
getInfoCheck(`${day}/${month}/${year}`);

previous.addEventListener('click', function () {
    changeDate(-1);
});

next.addEventListener('click', function () {
    changeDate(1);
});

updateCheckboxState();

function changeDate(days) {
    let newDate = new Date(year, month - 1, day + days);
    year = newDate.getFullYear();
    month = newDate.getMonth() + 1;
    day = newDate.getDate();

    title.textContent = `${day}/${month}/${year}`;

    getInfoCheck(`${day}/${month}/${year}`);
    updateCheckboxState();
}

function getInfoCheck(date) {
    checkboxes.forEach(function (checkbox, index) {
        checkbox.addEventListener('click', function () {
            updateHygieneCalendar(date, index, checkbox.checked);
        });
    });
}

function updateHygieneCalendar(date, checkboxIndex, isChecked) {
    // Перевірка, чи вже існує об'єкт для даної дати
    let existingEntry = hygieneCalendar.find(entry => entry.date === date);

    if (existingEntry) {
        // Оновлення існуючого об'єкта
        existingEntry[checkboxIndex] = isChecked;
    } else {
        // Створення нового об'єкта
        let newEntry = {
            date: date,
            [checkboxIndex]: isChecked
        };
        hygieneCalendar.push(newEntry);
    }

    // Зберігаємо оновлений масив у локальному сховищі
    localStorage.setItem('hygieneCalendar', JSON.stringify(hygieneCalendar));
    console.log(hygieneCalendar);
}

function updateCheckboxState() {
    hygieneCalendar.forEach(function (entry) {
        checkboxes.forEach(function (checkbox, index) {
            if (entry[index] !== undefined) {
                checkbox.checked = entry[index];
            }
        });
    });
}
