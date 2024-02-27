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

function changeDate(days) {
    let newDate = new Date(year, month - 1, day + days);
    year = newDate.getFullYear();
    month = newDate.getMonth() + 1;
    day = newDate.getDate();

    title.textContent = `${day}/${month}/${year}`;
}

previous.addEventListener('click', function() {
    
})