let html = document.querySelector('html');
let burgerMenu = {
    button: document.querySelector('.burger'),
    list: document.querySelector('.links')
};

// Languages
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
        logo: 'ШКМ',
        modalTitle: 'Потрібна допомога?',
        modalSubm: 'Запросити допомоги',
        modalSendedMessage1: 'Дякую',
        modalSendedMessage2: 'Ваша заявка прийнята',
        modalSendedMessage3: 'Наш менеджер зв’яжеться з вами найближчим часом.',
        linkNav1: 'Про школу',
        linkNav2: 'Навчальна програма',
        linkNav3: 'Наш колектив',
        linkNav4: 'Галерея',
        linkNav5: 'Відгуки',
        linkNav6: 'Контакти',
        HeaderTitle: "Школа Комп'ютерної Майстерності",
        HeaderSubtitle: 'робимо успішних у світі, що змінюється',
        signUp: 'Записатися на урок',
        gallery1: 'Поле наших знань лежить в сфері сайтобудування, а саме FRONT-END розробки, яка на даний момент розвивається найшвидше.',
        gallery2: 'Це гарантовано дає можливість нашим учням отримати престижну та високооплачувану професію.',
        gallery3: 'Працюють тільки професійні викладачі, які мають вищу педагогічну освіту.',
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
        ourTeam: 'Наш колектив',
        ourTeamSelector1: 'Івано-Франківськ',
        ourTeamSelector2: 'Кривий Ріг',
        ourTeamSelector3: 'Запоріжжя',
        reviewTitle: 'Відгуки про школу',
        schoolGalleryTitle: 'Галерея школи',
        footerTitle: 'Допоможемо з вибором',
        footerSub: 'Напиши нам, якщо маєш питання щодо навчання, Ми передзвонимо і залюбки поговоримо з тобою :)',
        footerInName: 'Ім’я',
        footerInTel: 'Номер телефону',
        footerSubm: 'Замовити дзвінок',
    },
    EN: {
        logo: 'ShKM',
        modalTitle: 'Need help?',
        modalSubm: 'Request help',
        modalSendedMessage1: 'Thank you',
        modalSendedMessage2: 'Your request has been received',
        modalSendedMessage3: 'Our manager will contact you shortly.',
        linkNav1: 'About school',
        linkNav2: 'Curriculum',
        linkNav3: 'Our team',
        linkNav4: 'Gallery',
        linkNav5: 'Reviews',
        linkNav6: 'Contacts',
        HeaderTitle: "School of Computer Mastery",
        HeaderSubtitle: 'We make people successful in a changing world',
        signUp: 'Sign up for a lesson',
        gallery1: 'Our field of expertise lies in web development, specifically in FRONT-END development, which is currently evolving the fastest.',
        gallery2: 'This guarantees that our students have the opportunity to obtain a prestigious and well-paid profession.',
        gallery3: 'Only professional instructors with higher pedagogical education work here.',
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
        ourTeam: 'Our Team',
        ourTeamSelector1: 'Ivano-Frankivsk',
        ourTeamSelector2: 'Kryvyi Rih',
        ourTeamSelector3: 'Zaporizhzhia',
        reviewTitle: 'School Reviews',
        schoolGalleryTitle: 'School Gallery',
        footerTitle: 'Let us help you choose',
        footerSub: 'Write to us if you have questions about learning. We will call you back and be happy to talk with you :)',
        footerInName: 'Name',
        footerInTel: 'Phone number',
        footerSubm: 'Request a call',
    }
};

// School Program
const programBox = document.querySelector('.program-desk');
const programTemplate = document.querySelector('#school-program-template').content;
const schoolProgram = [
    [
        {
            img: './img/program1.png',
            text: {
                UA: '<article><h3>Основи комп’ютерної грамотності. Десятипальцевий друк.</h3> <p>Проекти: Програмування Черепашки, Мультфільм Scratch, Гра Scratch</p></article> <h3>Основи програмування: kTurtle, Scratch.</h3>',
                EN: '<article><h3>Basics of Computer Literacy. Touch Typing.</h3> <p>Projects: Turtle Programming, Scratch Cartoon, Scratch Game</p></article> <h3>Programming Basics: kTurtle, Scratch.</h3>',
            },
        },
        {
            img: './img/program2.png',
            text: {
                UA: '<article><h3>Google-середовище. Малювання GoogleDrawing. Презентації. Текстові документи. Складові комп’ютерної моделі.</h3><p>Візитівка, календарик, листівка, брошюра</p></article><article><h3>Введення в сайтобудування.</h3><p>Створення простих веб-сторінок. Проект: “Я супер-герой”</p></article>',
                EN: '<article><h3>Google Environment. Drawing with GoogleDrawing. Presentations. Text Documents. Components of a Computer Model.</h3><p>Business Card, Calendar, Postcard, Brochure</p></article><article><h3>Introduction to Web Development.</h3><p>Creating Simple Web Pages. Project: "I am a Superhero"</p></article>',
            },
        },
        {
            img: './img/program3.png',
            text: {
                UA: '<article><h3>Малювання за допомогою html та css (тематичний малюнок)</h3><p>Проект: “Місто майбутнього”</p></article><article><h3>Блокова верстка сайтів.</h3><p>Проект: перший багатосторінковий сайт “Моя родина”</p></article>',
                EN: '<article><h3>Drawing with HTML and CSS (Thematic Drawing)</h3><p>Project: "City of the Future"</p></article><article><h3>Block Layout of Websites.</h3><p>Project: First Multi-Page Website "My Family"</p></article>',
            },
        },
        {
            img: './img/program4.png',
            text: {
                UA: '<article><h3>Семантична верстка. DOM. Складні селектори. Швидка верстка.</h3><p>Проект: “Ефективні методи навчання”</p></article><article><h3>Декоративні елементи сайту. Складні властивості CSS</h3><p>Проект: “Основи дизайну сайтів”</p></article>',
                EN: '<article><h3>Semantic Markup. DOM. Complex Selectors. Fast Markup.</h3><p>Project: "Effective Learning Methods"</p></article><article><h3>Decorative Elements of a Website. Advanced CSS Properties</h3><p>Project: "Basics of Web Design"</p></article>',
            },
        },
        {
            img: './img/program5.png',
            text: {
                UA: '<article><h3>Гнучка верстка сайту з використанням FlexBox</h3><p>Проект: “Екологія планети Земля”</p></article><article><h3>Верстка сайту з використанням GridCSS</h3><p>Проект: “Сайт Портфоліо”</p></article>',
                EN: '<article><h3>Flexible Website Layout Using FlexBox</h3><p>Project: "Ecology of Planet Earth"</p></article><article><h3>Website Layout Using GridCSS</h3><p>Project: "Portfolio Website"</p></article>',
            },
        },
        {
            img: './img/program6.png',
            text: {
                UA: '<article><h3>Адаптивна верстка сайту</h3><p>Проект: “Етика інтелектуальних колективів”</p></article><article><h3>Основи JavaScript</h3><p>Проект: “Світ майбутніх професій”</p></article>',
                EN: '<article><h3>Responsive Website Layout</h3><p>Project: "Ethics of Intellectual Collectives"</p></article><article><h3>Basics of JavaScript</h3><p>Project: "World of Future Professions"</p></article>',
            },
        },
        {
            img: './img/program7.png',
            text: {
                UA: '<article><h3>Програмування JavaScript</h3><p>Проекти підбираються в живому режимі</p></article>',
                EN: '<article><h3>JavaScript Programming</h3><p>Projects are Selected in Real-Time</p></article>',
            },
        },
        {
            img: './img/program8.png',
            text: {
                UA: '<article><h3>Основи БД та PHP</h3><p>Проекти підбираються в живому режимі</p></article><article><h3>CMS Wordpress</h3><p>Дипломний проект</p></article>',
                EN: '<article><h3>Basics of Databases and PHP</h3><p>Projects are Selected in Real-Time</p></article><article><h3>WordPress CMS</h3><p>Diploma Project</p></article>',
            },
        },
    ],
    [
        {
            img: './img/program1.png',
            text: {
                UA: '<article><h3>2Основи комп’ютерної грамотності. Десятипальцевий друк.</h3> <p>Проекти: Програмування Черепашки, Мультфільм Scratch, Гра Scratch</p></article> <h3>Основи програмування: kTurtle, Scratch.</h3>',
                EN: '<article><h3>Basics of Computer Literacy. Touch Typing.</h3> <p>Projects: Turtle Programming, Scratch Cartoon, Scratch Game</p></article> <h3>Programming Basics: kTurtle, Scratch.</h3>',
            },
        },
        {
            img: './img/program2.png',
            text: {
                UA: '<article><h3>Google-середовище. Малювання GoogleDrawing. Презентації. Текстові документи. Складові комп’ютерної моделі.</h3><p>Візитівка, календарик, листівка, брошюра</p></article><article><h3>Введення в сайтобудування.</h3><p>Створення простих веб-сторінок. Проект: “Я супер-герой”</p></article>',
                EN: '<article><h3>Google Environment. Drawing with GoogleDrawing. Presentations. Text Documents. Components of a Computer Model.</h3><p>Business Card, Calendar, Postcard, Brochure</p></article><article><h3>Introduction to Web Development.</h3><p>Creating Simple Web Pages. Project: "I am a Superhero"</p></article>',
            },
        },
        {
            img: './img/program3.png',
            text: {
                UA: '<article><h3>Малювання за допомогою html та css (тематичний малюнок)</h3><p>Проект: “Місто майбутнього”</p></article><article><h3>Блокова верстка сайтів.</h3><p>Проект: перший багатосторінковий сайт “Моя родина”</p></article>',
                EN: '<article><h3>Drawing with HTML and CSS (Thematic Drawing)</h3><p>Project: "City of the Future"</p></article><article><h3>Block Layout of Websites.</h3><p>Project: First Multi-Page Website "My Family"</p></article>',
            },
        },
        {
            img: './img/program4.png',
            text: {
                UA: '<article><h3>Семантична верстка. DOM. Складні селектори. Швидка верстка.</h3><p>Проект: “Ефективні методи навчання”</p></article><article><h3>Декоративні елементи сайту. Складні властивості CSS</h3><p>Проект: “Основи дизайну сайтів”</p></article>',
                EN: '<article><h3>Semantic Markup. DOM. Complex Selectors. Fast Markup.</h3><p>Project: "Effective Learning Methods"</p></article><article><h3>Decorative Elements of a Website. Advanced CSS Properties</h3><p>Project: "Basics of Web Design"</p></article>',
            },
        },
        {
            img: './img/program5.png',
            text: {
                UA: '<article><h3>Гнучка верстка сайту з використанням FlexBox</h3><p>Проект: “Екологія планети Земля”</p></article><article><h3>Верстка сайту з використанням GridCSS</h3><p>Проект: “Сайт Портфоліо”</p></article>',
                EN: '<article><h3>Flexible Website Layout Using FlexBox</h3><p>Project: "Ecology of Planet Earth"</p></article><article><h3>Website Layout Using GridCSS</h3><p>Project: "Portfolio Website"</p></article>',
            },
        },
        {
            img: './img/program6.png',
            text: {
                UA: '<article><h3>Адаптивна верстка сайту</h3><p>Проект: “Етика інтелектуальних колективів”</p></article><article><h3>Основи JavaScript</h3><p>Проект: “Світ майбутніх професій”</p></article>',
                EN: '<article><h3>Responsive Website Layout</h3><p>Project: "Ethics of Intellectual Collectives"</p></article><article><h3>Basics of JavaScript</h3><p>Project: "World of Future Professions"</p></article>',
            },
        },
        {
            img: './img/program7.png',
            text: {
                UA: '<article><h3>Програмування JavaScript</h3><p>Проекти підбираються в живому режимі</p></article>',
                EN: '<article><h3>JavaScript Programming</h3><p>Projects are Selected in Real-Time</p></article>',
            },
        },
        {
            img: './img/program8.png',
            text: {
                UA: '<article><h3>Основи БД та PHP</h3><p>Проекти підбираються в живому режимі</p></article><article><h3>CMS Wordpress</h3><p>Дипломний проект</p></article>',
                EN: '<article><h3>Basics of Databases and PHP</h3><p>Projects are Selected in Real-Time</p></article><article><h3>WordPress CMS</h3><p>Diploma Project</p></article>',
            },
        },
    ],
    [
        {
            img: './img/program1.png',
            text: {
                UA: '<article><h3>3Основи комп’ютерної грамотності. Десятипальцевий друк.</h3> <p>Проекти: Програмування Черепашки, Мультфільм Scratch, Гра Scratch</p></article> <h3>Основи програмування: kTurtle, Scratch.</h3>',
                EN: '<article><h3>Basics of Computer Literacy. Touch Typing.</h3> <p>Projects: Turtle Programming, Scratch Cartoon, Scratch Game</p></article> <h3>Programming Basics: kTurtle, Scratch.</h3>',
            },
        },
        {
            img: './img/program2.png',
            text: {
                UA: '<article><h3>Google-середовище. Малювання GoogleDrawing. Презентації. Текстові документи. Складові комп’ютерної моделі.</h3><p>Візитівка, календарик, листівка, брошюра</p></article><article><h3>Введення в сайтобудування.</h3><p>Створення простих веб-сторінок. Проект: “Я супер-герой”</p></article>',
                EN: '<article><h3>Google Environment. Drawing with GoogleDrawing. Presentations. Text Documents. Components of a Computer Model.</h3><p>Business Card, Calendar, Postcard, Brochure</p></article><article><h3>Introduction to Web Development.</h3><p>Creating Simple Web Pages. Project: "I am a Superhero"</p></article>',
            },
        },
        {
            img: './img/program3.png',
            text: {
                UA: '<article><h3>Малювання за допомогою html та css (тематичний малюнок)</h3><p>Проект: “Місто майбутнього”</p></article><article><h3>Блокова верстка сайтів.</h3><p>Проект: перший багатосторінковий сайт “Моя родина”</p></article>',
                EN: '<article><h3>Drawing with HTML and CSS (Thematic Drawing)</h3><p>Project: "City of the Future"</p></article><article><h3>Block Layout of Websites.</h3><p>Project: First Multi-Page Website "My Family"</p></article>',
            },
        },
        {
            img: './img/program4.png',
            text: {
                UA: '<article><h3>Семантична верстка. DOM. Складні селектори. Швидка верстка.</h3><p>Проект: “Ефективні методи навчання”</p></article><article><h3>Декоративні елементи сайту. Складні властивості CSS</h3><p>Проект: “Основи дизайну сайтів”</p></article>',
                EN: '<article><h3>Semantic Markup. DOM. Complex Selectors. Fast Markup.</h3><p>Project: "Effective Learning Methods"</p></article><article><h3>Decorative Elements of a Website. Advanced CSS Properties</h3><p>Project: "Basics of Web Design"</p></article>',
            },
        },
        {
            img: './img/program5.png',
            text: {
                UA: '<article><h3>Гнучка верстка сайту з використанням FlexBox</h3><p>Проект: “Екологія планети Земля”</p></article><article><h3>Верстка сайту з використанням GridCSS</h3><p>Проект: “Сайт Портфоліо”</p></article>',
                EN: '<article><h3>Flexible Website Layout Using FlexBox</h3><p>Project: "Ecology of Planet Earth"</p></article><article><h3>Website Layout Using GridCSS</h3><p>Project: "Portfolio Website"</p></article>',
            },
        },
        {
            img: './img/program6.png',
            text: {
                UA: '<article><h3>Адаптивна верстка сайту</h3><p>Проект: “Етика інтелектуальних колективів”</p></article><article><h3>Основи JavaScript</h3><p>Проект: “Світ майбутніх професій”</p></article>',
                EN: '<article><h3>Responsive Website Layout</h3><p>Project: "Ethics of Intellectual Collectives"</p></article><article><h3>Basics of JavaScript</h3><p>Project: "World of Future Professions"</p></article>',
            },
        },
        {
            img: './img/program7.png',
            text: {
                UA: '<article><h3>Програмування JavaScript</h3><p>Проекти підбираються в живому режимі</p></article>',
                EN: '<article><h3>JavaScript Programming</h3><p>Projects are Selected in Real-Time</p></article>',
            },
        },
        {
            img: './img/program8.png',
            text: {
                UA: '<article><h3>Основи БД та PHP</h3><p>Проекти підбираються в живому режимі</p></article><article><h3>CMS Wordpress</h3><p>Дипломний проект</p></article>',
                EN: '<article><h3>Basics of Databases and PHP</h3><p>Projects are Selected in Real-Time</p></article><article><h3>WordPress CMS</h3><p>Diploma Project</p></article>',
            },
        },
    ],
    [
        {
            img: './img/program1.png',
            text: {
                UA: '<article><h3>4Основи комп’ютерної грамотності. Десятипальцевий друк.</h3> <p>Проекти: Програмування Черепашки, Мультфільм Scratch, Гра Scratch</p></article> <h3>Основи програмування: kTurtle, Scratch.</h3>',
                EN: '<article><h3>Basics of Computer Literacy. Touch Typing.</h3> <p>Projects: Turtle Programming, Scratch Cartoon, Scratch Game</p></article> <h3>Programming Basics: kTurtle, Scratch.</h3>',
            },
        },
        {
            img: './img/program2.png',
            text: {
                UA: '<article><h3>Google-середовище. Малювання GoogleDrawing. Презентації. Текстові документи. Складові комп’ютерної моделі.</h3><p>Візитівка, календарик, листівка, брошюра</p></article><article><h3>Введення в сайтобудування.</h3><p>Створення простих веб-сторінок. Проект: “Я супер-герой”</p></article>',
                EN: '<article><h3>Google Environment. Drawing with GoogleDrawing. Presentations. Text Documents. Components of a Computer Model.</h3><p>Business Card, Calendar, Postcard, Brochure</p></article><article><h3>Introduction to Web Development.</h3><p>Creating Simple Web Pages. Project: "I am a Superhero"</p></article>',
            },
        },
        {
            img: './img/program3.png',
            text: {
                UA: '<article><h3>Малювання за допомогою html та css (тематичний малюнок)</h3><p>Проект: “Місто майбутнього”</p></article><article><h3>Блокова верстка сайтів.</h3><p>Проект: перший багатосторінковий сайт “Моя родина”</p></article>',
                EN: '<article><h3>Drawing with HTML and CSS (Thematic Drawing)</h3><p>Project: "City of the Future"</p></article><article><h3>Block Layout of Websites.</h3><p>Project: First Multi-Page Website "My Family"</p></article>',
            },
        },
        {
            img: './img/program4.png',
            text: {
                UA: '<article><h3>Семантична верстка. DOM. Складні селектори. Швидка верстка.</h3><p>Проект: “Ефективні методи навчання”</p></article><article><h3>Декоративні елементи сайту. Складні властивості CSS</h3><p>Проект: “Основи дизайну сайтів”</p></article>',
                EN: '<article><h3>Semantic Markup. DOM. Complex Selectors. Fast Markup.</h3><p>Project: "Effective Learning Methods"</p></article><article><h3>Decorative Elements of a Website. Advanced CSS Properties</h3><p>Project: "Basics of Web Design"</p></article>',
            },
        },
        {
            img: './img/program5.png',
            text: {
                UA: '<article><h3>Гнучка верстка сайту з використанням FlexBox</h3><p>Проект: “Екологія планети Земля”</p></article><article><h3>Верстка сайту з використанням GridCSS</h3><p>Проект: “Сайт Портфоліо”</p></article>',
                EN: '<article><h3>Flexible Website Layout Using FlexBox</h3><p>Project: "Ecology of Planet Earth"</p></article><article><h3>Website Layout Using GridCSS</h3><p>Project: "Portfolio Website"</p></article>',
            },
        },
        {
            img: './img/program6.png',
            text: {
                UA: '<article><h3>Адаптивна верстка сайту</h3><p>Проект: “Етика інтелектуальних колективів”</p></article><article><h3>Основи JavaScript</h3><p>Проект: “Світ майбутніх професій”</p></article>',
                EN: '<article><h3>Responsive Website Layout</h3><p>Project: "Ethics of Intellectual Collectives"</p></article><article><h3>Basics of JavaScript</h3><p>Project: "World of Future Professions"</p></article>',
            },
        },
        {
            img: './img/program7.png',
            text: {
                UA: '<article><h3>Програмування JavaScript</h3><p>Проекти підбираються в живому режимі</p></article>',
                EN: '<article><h3>JavaScript Programming</h3><p>Projects are Selected in Real-Time</p></article>',
            },
        },
        {
            img: './img/program8.png',
            text: {
                UA: '<article><h3>Основи БД та PHP</h3><p>Проекти підбираються в живому режимі</p></article><article><h3>CMS Wordpress</h3><p>Дипломний проект</p></article>',
                EN: '<article><h3>Basics of Databases and PHP</h3><p>Projects are Selected in Real-Time</p></article><article><h3>WordPress CMS</h3><p>Diploma Project</p></article>',
            },
        },
    ]
];

// Reviews
const reviewTemplate = document.querySelector('#review-template').content;
const reviewBox = document.querySelector('.reviews-box');
const reviews = [
    {
        img: './img/reviewPhoto.png',
        fullName: {
            UA: 'Камерон Вільямс',
            EN: 'Cameron Williams'
        },
        desk: {
            UA: 'Мама учня',
            EN: 'Mother of a student'
        },
        content: {
            UA: 'Безперечно, висока якість позиційних досліджень вимагає від нас аналізу нових пропозицій. Так само, постійне інформаційно-пропагандистське.',
            EN: 'Undoubtedly, the high quality of positional research requires us to analyze new proposals. Similarly, the constant information and propaganda.'
        },
        rating: 5
    },
    {
        img: './img/reviewPhoto-2.png',
        fullName: {
            UA: 'Саванна Нгуєн',
            EN: 'Savannah Nguyen'
        },
        desk: {
            UA: 'Мама учениці',
            EN: 'Mother of a student'
        },
        content: {
            UA: 'Як прийнято вважати, дії представників опозиції є нічим іншим, як квінтесенцією перемоги маркетингу над розумом і мають бути своєчасно верифіковані.',
            EN: 'It is generally believed that the actions of opposition representatives are nothing more than the quintessence of marketing’s victory over reason and must be timely verified.'
        },
        rating: 4
    },
    {
        img: './img/reviewPhoto-3.png',
        fullName: {
            UA: 'Флойд Майлз',
            EN: 'Floyd Miles'
        },
        desk: {
            UA: 'Батько учня',
            EN: 'Father of a student'
        },
        content: {
            UA: 'Репліковані із зарубіжних джерел, сучасні дослідження й досі залишаються долею лібералів, які прагнуть піддатися цілій серії незалежних досліджень.',
            EN: 'Replicated from foreign sources, modern research still remains the domain of liberals who seek to undergo a whole series of independent studies.'
        },
        rating: 5
    },
    {
        img: './img/reviewPhoto-4.png',
        fullName: {
            UA: 'Джеймс Бонд',
            EN: 'James Bond'
        },
        desk: {
            UA: 'Батько учня',
            EN: 'Father of a student'
        },
        content: {
            UA: 'Найкраща школа світу',
            EN: 'The best school in the world'
        },
        rating: 3
    }
];

// School Gallery
const activePhoto = document.querySelector('.school-gallery img');
const galleryBox = document.querySelector('.school-gallery .school-gallery-photos');
const galleryPhotos = ['./img/school-gallery/gallery-photo1.jpg', './img/school-gallery/gallery-photo2.jpg', './img/school-gallery/gallery-photo3.jpg', './img/school-gallery/gallery-photo4.jpg', './img/school-gallery/gallery-photo5.jpg', './img/school-gallery/gallery-photo6.jpg', './img/school-gallery/gallery-photo7.jpg', './img/school-gallery/gallery-photo8.jpg', './img/school-gallery/gallery-photo9.jpg', './img/school-gallery/gallery-photo10.jpg', './img/school-gallery/gallery-photo11.jpg', './img/school-gallery/gallery-photo12.jpg', './img/school-gallery/gallery-photo13.jpg',]

// Burger
function burgerAction() {
    if (window.innerWidth <= 767) {
        burgerMenu.button.classList.toggle('open');
        burgerMenu.list.classList.toggle('open');
        language.target.classList.remove('open');

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
let localLanguage = JSON.parse(localStorage.getItem('language')) || 'UA';

changeLanguage(localLanguage);
if (localLanguage === 'EN') {
    updateLanguage('EN', './img/flagUK.svg');
}

language.target.addEventListener('click', function () {
    language.target.classList.toggle('open');
    if (language.target.classList.contains('open')) {
        language.indicator.setAttribute('src', './img/cross.svg');
    } else {
        language.indicator.setAttribute('src', './img/rectangle.svg');
    }
});

language.options.forEach(el => el.addEventListener('click', function (e) {
    if (!language.target.classList.contains('open')) return;

    let data = e.currentTarget.dataset.languageOption.split(',');
    updateLanguage(data[0], data[1]);
}));

function updateLanguage(text, img) {
    language.label.textContent = text;
    language.img.setAttribute('src', `${img}`);

    localLanguage = language.label.textContent;
    updateLocalStorage();

    changeLanguage(language.label.textContent);
    handleSchoolProgram(0);
    handleReviews();
}

function changeLanguage(userLanguage) {
    language.textEl.forEach(el => {
        let key = el.dataset.languageText;

        if (el.tagName == 'INPUT') {
            el.placeholder = languageText[userLanguage][key];
        } else {
            el.innerHTML = languageText[userLanguage][key];
        }
    });
}

function updateLocalStorage() {
    localStorage.setItem('language', JSON.stringify(localLanguage));
}

// Modal
let modal = document.querySelector('.modal-bg');
let closeModal = document.querySelector('.modal-bg .close-modal')

function toggleModal() {
    modal.classList.toggle('open');
    if (modal.classList.contains('open')) {
        html.style.overflowY = 'hidden';
    } else {
        html.style.overflowY = 'visible';
    }
}

setTimeout(toggleModal, 10000);

closeModal.addEventListener('click', toggleModal);

// Categories 

let categories = document.querySelectorAll('.categories .categories-age p');
let categoriesBg = document.querySelector('.categories .categories-age .categories-bg')

categoriesBg.style.width = `${categories[0].offsetWidth}px`;

categories.forEach(el => el.addEventListener('click', function (e) {
    categories.forEach(el => el.classList.remove('category-active'));
    e.target.classList.add('category-active');

    categoriesBg.style.left = 12 + (categories[0].offsetWidth + 50) * e.target.dataset.categoryI + 'px';
    handleSchoolProgram(e.target.dataset.categoryI);
}));

handleSchoolProgram(0)

function handleSchoolProgram(number) {
    programBox.innerHTML = '';
    schoolProgram[number].forEach(el => {
        const newProgramTemplate = programTemplate.querySelector('div').cloneNode(true);

        newProgramTemplate.querySelector('img').setAttribute('src', el.img);
        newProgramTemplate.querySelector('section').innerHTML = el.text[localLanguage];
        programBox.appendChild(newProgramTemplate);
    });
}

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

// Team

let TeamGroup = document.querySelectorAll('.our-team-selector .our-team-groups p');
let ourTeamBg = document.querySelector('.our-team .our-team-groups .our-team-bg')
ourTeamBg.style.width = `${TeamGroup[0].offsetWidth}px`;

TeamGroup.forEach(el => el.addEventListener('click', function (e) {
    TeamGroup.forEach(el => el.classList.remove('our-team-active'));
    e.target.classList.add('our-team-active');

    ourTeamBg.style.left = 12 + (TeamGroup[0].offsetWidth + 50) * e.target.dataset.ourTeamI + 'px';

    handleMember(e.target.dataset.teamMemberDep);
}));

// Members

const memberBox = document.querySelector('.team-members');
const memberTemplate = document.querySelector('#member').content;
const memberHeaderImg = document.querySelector('.team-header img');
const memberHeaderTitle = document.querySelector('.team-header h3');
const memberHeaderDesk = document.querySelector('.team-header p');

const members = [
    {
        fullName: {
            UA: 'Олеся Петрівна',
            EN: 'Olesia Petrivna',
        },
        img: './img/OlesyaPetrivna.jpg',
        desk: {
            UA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
            EN: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
        },
        dep: 'IF',
        isActive: true,
    },
    {
        fullName: {
            UA: 'Максим Генадійович',
            EN: 'Maxim Henadiyovych',
        },
        img: './img/MaksymGenadiyovych.jpg',
        desk: {
            UA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
            EN: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
        },
        dep: 'KryR',
        isActive: false,
    },
    {
        fullName: {
            UA: 'Вікторія Григорівна',
            EN: 'Viktoria Hryhorivna',
        },
        img: './img/VictoriaHryhorivna.jpg',
        desk: {
            UA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
            EN: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
        },
        dep: 'Zap',
        isActive: false,
    },
    {
        fullName: {
            UA: 'Анна Олександрівна',
            EN: 'Anna Oleksandrivna',
        },
        img: './img/AnnaOleksandrivna.jpg',
        desk: {
            UA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
            EN: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
        },
        dep: 'KryR',
        isActive: false,
    },
    {
        fullName: {
            UA: 'Анастасія Юріївна',
            EN: 'Anastasia Yuriiivna',
        },
        img: './img/AnastasiaYuryivna.jpg',
        desk: {
            UA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
            EN: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
        },
        dep: 'KryR',
        isActive: false,
    },
    {
        fullName: {
            UA: 'Олена Анатоліївна',
            EN: 'Olena Anatoliivna',
        },
        img: './img/OlenaAnatolyivna.jpg',
        desk: {
            UA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
            EN: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
        },
        dep: 'IF',
        isActive: false,
    },
    {
        fullName: {
            UA: 'Святослава Іванівна',
            EN: 'Sviatoslava Ivanivna',
        },
        img: './img/SvyatoslavaIvanovna.jpg',
        desk: {
            UA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
            EN: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
        },
        dep: 'IF',
        isActive: false,
    },
    {
        fullName: {
            UA: 'Тетяна Ярославівна',
            EN: 'Tetiana Yaroslavivna',
        },
        img: './img/TatyanaYaroslavivna.jpg',
        desk: {
            UA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
            EN: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
        },
        dep: 'Zap',
        isActive: false,
    },
    {
        fullName: {
            UA: 'Ольга Юріївна',
            EN: 'Olha Yuriivna',
        },
        img: './img/OlgaYuriivna.jpg',
        desk: {
            UA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
            EN: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias voluptates, neque soluta fugit totam? Sit labore magnam sunt sed laborum fuga perspiciatis?',
        },
        dep: 'Zap',
        isActive: false,
    },
];

function handleMember(department) {
    memberBox.innerHTML = '';

    // This code is for the card to disappear when it is active
    // const filtredMember = members.filter(el => el.dep === department && el.isActive !== true);
    const filtredMember = members.filter(el => el.dep === department);

    filtredMember.forEach(e => {
        const newMember = memberTemplate.querySelector('div').cloneNode(true);

        newMember.querySelector('p').textContent = e.fullName[localLanguage];
        newMember.style.backgroundImage = `url(${e.img})`;
        memberBox.appendChild(newMember);

        handleMemberInfo(newMember, e, department);
    });
}

handleMember('IF');


function handleMemberInfo(target, data, dep) {
    members.forEach(el => el.isActive = false);
    target.addEventListener('click', () => {
        memberHeaderImg.setAttribute('src', data.img);
        memberHeaderTitle.textContent = data.fullName[localLanguage];
        memberHeaderDesk.textContent = data.desk[localLanguage];
        data.isActive = true;

        handleMember(dep);
    });
}

// Reviews
handleReviews();

function handleReviews() {
    reviewBox.innerHTML = '';
    reviews.forEach(e => {
        const newReview = reviewTemplate.querySelector('.review').cloneNode(true);

        let rating = [];
        for (let i = 1; i <= e.rating; i++) {
            rating.push('<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="gold" fill="gold" id="svg_1" stroke-linejoin="round" stroke-linecap="round" stroke-width="0.72" d="m4.62086,1.09724c0.12012,-0.26949 0.18021,-0.40424 0.26385,-0.44573c0.07264,-0.03605 0.15795,-0.03605 0.23059,0c0.08364,0.04149 0.14373,0.17624 0.26385,0.44573l0.95681,2.14655c0.03554,0.07967 0.05329,0.1195 0.08079,0.15001c0.02428,0.02699 0.05401,0.04858 0.08717,0.06336c0.03751,0.01671 0.08089,0.02128 0.16765,0.03044l2.33717,0.24668c0.29342,0.03097 0.44011,0.04645 0.50544,0.11317c0.05671,0.05795 0.08307,0.13911 0.07124,0.21934c-0.01359,0.09236 -0.12318,0.1911 -0.34235,0.38864l-1.74586,1.57333c-0.06476,0.05837 -0.09719,0.08759 -0.11768,0.12313c-0.01816,0.0315 -0.02952,0.06642 -0.03331,0.10253c-0.00431,0.04084 0.00472,0.08349 0.02283,0.16884l0.48764,2.29898c0.06123,0.28865 0.09184,0.43295 0.04857,0.51566c-0.03762,0.07192 -0.10663,0.12204 -0.18659,0.13558c-0.09205,0.01557 -0.21985,-0.05811 -0.47545,-0.20553l-2.03581,-1.17421c-0.07555,-0.04359 -0.11332,-0.06533 -0.15348,-0.07389c-0.03554,-0.00752 -0.07228,-0.00752 -0.10782,0c-0.04016,0.00856 -0.07794,0.0303 -0.15348,0.07389l-2.0358,1.17421c-0.25559,0.14741 -0.38338,0.22109 -0.47543,0.20553c-0.07996,-0.01354 -0.14899,-0.06367 -0.18658,-0.13558c-0.04327,-0.08271 -0.01266,-0.22701 0.04856,-0.51566l0.48762,-2.29898c0.0181,-0.08535 0.02715,-0.12801 0.02285,-0.16884c-0.0038,-0.03611 -0.01515,-0.07103 -0.03331,-0.10253c-0.02052,-0.03554 -0.05292,-0.06476 -0.11771,-0.12313l-1.74582,-1.57333c-0.21918,-0.19754 -0.32877,-0.29628 -0.3424,-0.38864c-0.01183,-0.08024 0.01453,-0.16139 0.07127,-0.21934c0.06532,-0.06672 0.21203,-0.08221 0.50545,-0.11317l2.33716,-0.24668c0.08675,-0.00915 0.13011,-0.01373 0.16762,-0.03044c0.03318,-0.01478 0.06289,-0.03637 0.08721,-0.06336c0.02747,-0.0305 0.04523,-0.07034 0.08075,-0.15001l0.95682,-2.14655z"/></svg>');
        }
        for (let i = 1; i <= 5 - e.rating; i++) {
            rating.push('<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000" id="svg_1" stroke-linejoin="round" stroke-linecap="round" stroke-width="0.72" d="m4.62086,1.09724c0.12012,-0.26949 0.18021,-0.40424 0.26385,-0.44573c0.07264,-0.03605 0.15795,-0.03605 0.23059,0c0.08364,0.04149 0.14373,0.17624 0.26385,0.44573l0.95681,2.14655c0.03554,0.07967 0.05329,0.1195 0.08079,0.15001c0.02428,0.02699 0.05401,0.04858 0.08717,0.06336c0.03751,0.01671 0.08089,0.02128 0.16765,0.03044l2.33717,0.24668c0.29342,0.03097 0.44011,0.04645 0.50544,0.11317c0.05671,0.05795 0.08307,0.13911 0.07124,0.21934c-0.01359,0.09236 -0.12318,0.1911 -0.34235,0.38864l-1.74586,1.57333c-0.06476,0.05837 -0.09719,0.08759 -0.11768,0.12313c-0.01816,0.0315 -0.02952,0.06642 -0.03331,0.10253c-0.00431,0.04084 0.00472,0.08349 0.02283,0.16884l0.48764,2.29898c0.06123,0.28865 0.09184,0.43295 0.04857,0.51566c-0.03762,0.07192 -0.10663,0.12204 -0.18659,0.13558c-0.09205,0.01557 -0.21985,-0.05811 -0.47545,-0.20553l-2.03581,-1.17421c-0.07555,-0.04359 -0.11332,-0.06533 -0.15348,-0.07389c-0.03554,-0.00752 -0.07228,-0.00752 -0.10782,0c-0.04016,0.00856 -0.07794,0.0303 -0.15348,0.07389l-2.0358,1.17421c-0.25559,0.14741 -0.38338,0.22109 -0.47543,0.20553c-0.07996,-0.01354 -0.14899,-0.06367 -0.18658,-0.13558c-0.04327,-0.08271 -0.01266,-0.22701 0.04856,-0.51566l0.48762,-2.29898c0.0181,-0.08535 0.02715,-0.12801 0.02285,-0.16884c-0.0038,-0.03611 -0.01515,-0.07103 -0.03331,-0.10253c-0.02052,-0.03554 -0.05292,-0.06476 -0.11771,-0.12313l-1.74582,-1.57333c-0.21918,-0.19754 -0.32877,-0.29628 -0.3424,-0.38864c-0.01183,-0.08024 0.01453,-0.16139 0.07127,-0.21934c0.06532,-0.06672 0.21203,-0.08221 0.50545,-0.11317l2.33716,-0.24668c0.08675,-0.00915 0.13011,-0.01373 0.16762,-0.03044c0.03318,-0.01478 0.06289,-0.03637 0.08721,-0.06336c0.02747,-0.0305 0.04523,-0.07034 0.08075,-0.15001l0.95682,-2.14655z"/></svg>');
        }

        newReview.querySelector('.review-header .rating').innerHTML = rating.join('');
        newReview.querySelector('.review-header h4').textContent = e.fullName[localLanguage];
        newReview.querySelector('.review-header h5').textContent = e.desk[localLanguage];
        newReview.querySelector('.review-text').textContent = e.content[localLanguage];
        newReview.querySelector('.review-header img').setAttribute('src', e.img);

        reviewBox.appendChild(newReview);
    });
}

// School Gallery
galleryPhotos.forEach(el => {
    let newPhoto = document.createElement('img');

    newPhoto.setAttribute('src', el);
    newPhoto.dataset.schoolGallery = el;

    galleryBox.appendChild(newPhoto);
    newPhoto.addEventListener('click', handleGalleryPhoto);
});

let allPhotos = document.querySelectorAll('.school-gallery .school-gallery-photos img');
allPhotos[0].classList.add('active');

function handleGalleryPhoto(el) {
    allPhotos.forEach(e => e.classList.remove('active'));

    el.target.classList.add('active');
    activePhoto.setAttribute('src', el.target.dataset.schoolGallery);
}



// Tel validation
document.querySelectorAll('input[type="tel"]').forEach(el => el.addEventListener('input', function (event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, ''); // Видаляємо всі нецифрові символи
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue = '(';
    }
    if (value.length > 3) {
        formattedValue += value.slice(0, 3) + ') ';
    } else if (value.length > 0) {
        formattedValue += value;
    }
    if (value.length > 6) {
        formattedValue += value.slice(3, 6) + '-';
        formattedValue += value.slice(6, 10);
    } else if (value.length > 3) {
        formattedValue += value.slice(3, 6);
    }

    input.value = formattedValue;
}));


