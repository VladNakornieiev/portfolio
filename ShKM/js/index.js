let html = document.querySelector('html');
let burgerMenu = {
    button: document.querySelector('.burger'),
    list: document.querySelector('.links')
};
let language = {
    target: document.querySelector('#language'),
    boxClick: document.querySelector('#language .language-box'),
    img: document.querySelector('#language .language-image'),
    label: document.querySelector('#language .language-label'),
    indicator: document.querySelector('#language .language-indicator'),
    options: document.querySelectorAll('#language .language-option'),
    textEl: document.querySelectorAll('[data-language-text]')
};

const languageText = {
    UA: {
        linkNav1: 'Про школу',
        linkNav2: 'Навчальна програма',
        linkNav3: 'Наш колектив',
        linkNav4: 'Галерея',
        linkNav5: 'Відгуки',
        linkNav6: 'Контакти',
        HeaderTitle: "Школа Комп'ютерної Майстерності",
        HeaderSubtitle: 'робимо успішних у світі, що змінюється',
        signUp: 'Записатися на урок',
        galery1: 'Поле наших знань лежить в сфері сайтобудування, а саме FRONT-END розробки, яка на даний момент розвивається найшвидше.',
        galery2: 'Це гарантовано дає можливість нашим учням отримати престижну та високооплачувану професію.',
        galery3: 'Працюють тільки професійні викладачі, які мають вищу педагогічну освіту.',
        quote: '“ Успіх в навчанні залежить не тільки від викладачів, а й від учнів, від їх здібностей, бажання, сумлінності та базових знань. Тому, перш ніж записатись в нашу школу, учні запрошуються на БЕЗКОШТОВНИЙ пробний урок, для того, щоб побачити та відчути на собі роботу нашого колективу. ”',
        statTitle: 'Чому саме ми?',
        statElY1: 'рік',
        statEl1: 'успішної роботи',
        statEl2: 'випускників',
        statEl3: 'проекта виконано',
        statEl4: 'соціальні акції проведено',
        schoolProgramTitle: 'Навчальна програма',
        schoolProgramDesc: `В залежності від <b>вікової категорії</b> нами розроблена унікальна програма розвитку та навчання учнів, що враховує психолого-фізіологічні характеристики учнів певного віку`,
        schoolProgramSub: 'Виберіть вікову категорію учня:',
        category1: '8-9 років',
        category2: '10-11 років',
        category3: '12-16 років',
        category4: 'від 16 років',
        descCategory1: '<b>8 років</b><br>навчання',
        descCategory2: '<b>6 років</b><br>навчання',
        descCategory3: '<b>4 роки</b><br>навчання',
        descCategory4: 'Індивідуально',
    },
    EN: {
        linkNav1: 'About school',
        linkNav2: 'Curriculum',
        linkNav3: 'Our team',
        linkNav4: 'Gallery',
        linkNav5: 'Reviews',
        linkNav6: 'Contacts',
        HeaderTitle: "School of Computer Mastery",
        HeaderSubtitle: 'We make people successful in a changing world',
        signUp: 'Sign up for a lesson',
        galery1: 'Our field of expertise lies in web development, specifically in FRONT-END development, which is currently evolving the fastest.',
        galery2: 'This guarantees that our students have the opportunity to obtain a prestigious and well-paid profession.',
        galery3: 'Only professional instructors with higher pedagogical education work here.',
        quote: "Success in learning depends not only on the teachers but also on the students, their abilities, motivation, diligence, and basic knowledge. Therefore, before enrolling in our school, students are invited to a FREE trial lesson to experience and witness our team's work firsthand.",
        statTitle: 'Why us?',
        statElY1: 'years',
        statEl1: 'of successful work',
        statEl2: 'graduates',
        statEl3: 'projects have been completed',
        statEl4: 'social actions were held',
        schoolProgramTitle: 'Educational Program',
        schoolProgramDesc: `Depending on the <b>age category</b>, we have developed a unique development and learning program for students, taking into account the psychological and physiological characteristics of students of a certain age`,
        schoolProgramSub: 'Select the student\'s age category:',
        category1: '8-9 years old',
        category2: '10-11 years old',
        category3: '12-16 years old',
        category4: 'over 16 years old',
        descCategory1: '<b>8 years</b><br>of study',
        descCategory2: '<b>6 years</b><br>of study',
        descCategory3: '<b>4 years</b><br>of study',
        descCategory4: 'Individually',
    }
};

// Burger
function burgerAction() {
    if (window.innerWidth <= 767) {
        burgerMenu.button.classList.toggle('open');
        burgerMenu.list.classList.toggle('open');
        if (burgerMenu.list.classList.contains('open')) {
            html.style.overflowY = 'hidden';
        } else {
            html.style.overflowY = 'visible';
        }
    }
}

burgerMenu.button.addEventListener('click', burgerAction);

burgerMenu.list.addEventListener('click', burgerAction);

// Language

language.target.addEventListener('click', function () {
    language.target.classList.toggle('open');
    if (language.target.classList.contains('open')) {
        language.indicator.setAttribute('src', './img/cross.svg');
    } else {
        language.indicator.setAttribute('src', './img/rectangle.svg')
    }
});

language.options.forEach(el => el.addEventListener('click', function (e) {
    if (!language.target.classList.contains('open')) return;

    let data = e.currentTarget.dataset.languageOption.split(',');
    language.label.textContent = data[0];
    language.img.setAttribute('src', `${data[1]}`);
    changeLanguage(language.label.textContent);
}));

function changeLanguage(userLanguage) {
    language.textEl.forEach(el => {
        let key = el.dataset.languageText;

        el.innerHTML = languageText[userLanguage][key];
    });
}

// Categories 

let categories = document.querySelectorAll('.categories .categories-age p');
let categoriesBg = document.querySelector('.categories .categories-age .categories-bg')
categoriesBg.style.width = `${categories[0].offsetWidth}px`;

categories.forEach(el => el.addEventListener('click', function (e) {
    categories.forEach(el => el.classList.remove('category-active'));
    e.target.classList.add('category-active');

    categoriesBg.style.left = 12 + (categories[0].offsetWidth + 50) * e.target.dataset.categoryI + 'px';
}));

// Number Animation

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.statistics-el h2[data-stat-max]');
    
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    };

    const animateCounter = (el) => {
        const max = parseInt(el.getAttribute('data-stat-max'), 10);
        const increment = max / 200; // Adjust this value to control the speed of the counter

        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current >= max) {
                el.textContent = max;
                el.style.transform = "scale(1)";
            } else {
                el.textContent = Math.ceil(current);
                el.style.transform = "scale(1.1)";
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                animateCounter(el);
                observer.unobserve(el); // Stop observing the element once the animation starts
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(el => {
        observer.observe(el);
    });
});
