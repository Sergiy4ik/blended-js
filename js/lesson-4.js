// Завдання 1:

// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) -
// "Ще один спосіб створити DOM-елементи і помістити їх в дерево -
// це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// const bodyEl = document.querySelector("body");
// const idEl = document.querySelector("#title");
// const listEl = document.querySelector(".list");
// const allTopicEl = document.querySelectorAll("[data-topic]");
// const firstTopicEl = document.querySelector("[data-topic]");
// const lastTopicEl = allTopicEl[allTopicEl.length - 1];
// const titleEl = document.querySelector("h1");
// const nextSibling = titleEl.nextElementSibling;
// const allTitles = document.querySelectorAll("h3");

// for (const item of allTitles) {
//     item.classList.add('active');
// }

// const topicEl = document.querySelector("[data-topic=navigation]");
// topicEl.style.backgroundColor = "yellow"
// const topicPEl = document.querySelector("[data-topic=navigation] p");
// topicPEl.textContent = "Я змінив тут текст!"

// const currentTopic = "manipulation";
// const currentTopicEl = document.querySelector(`[data-topic=${currentTopic}]`);
// currentTopicEl.style.backgroundColor = "blue"

// const titleCompleted = document.querySelector(".completed");
// const listCompleted = document.querySelector("[data-topic=props]")
// listCompleted.remove()

// const addElement = `<p>Об'єктна модель документа (Document Object Model)</p>`
// idEl.insertAdjacentHTML("afterend", addElement)

// const addListElement = `
// <li>
// <h3>Властивість innerHTML</h3>
// <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
// </li>
// `
// listEl.insertAdjacentHTML("beforeend", addListElement);

// listEl.innerHTML = ""

// console.log(bodyEl);
// console.log(idEl);
// console.log(listEl);
// console.log(allTopicEl);
// console.log(firstTopicEl);
// console.log(lastTopicEl);
// console.log(nextSibling);
// console.log(allTitles);
// console.log(topicEl);
// console.log(currentTopicEl);
// console.log(titleCompleted);


// Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const numberContainer = document.querySelector(".number-container")
// for (let i = 0; i <= 100; i++) {
//     const num = randomNumber();

//     const div = document.createElement("div")
//     div.classList.add("number")
//     div.textContent = num

//     if (num % 2 === 0) {
//         div.classList.add("even")
//     } else {
//         div.classList.add("odd")
//     }

//     numberContainer.append(div)
// }


//  Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у об'єкт і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const formInput = document.querySelector(".js-username-input");
// formInput.addEventListener("input", addClass);

// function addClass() {
//     if (formInput.value.length >= 6) {
//         formInput.classList.add("success")
//         formInput.classList.remove("error")
//     } else {
//         formInput.classList.add("error");
//         formInput.classList.remove("success")
//     }
// }



// formInput.addEventListener("focus", focus);

// function focus() {
//     if (formInput.value.trim() === "") {
//         formInput.style.outline = '3px solid red'
//     }
//     else {
//         formInput.style.outline = '3px solid green'
//     }
// }



// formInput.addEventListener("blur", inputBlur);

// function inputBlur() {
//     if (formInput.value.trim() === "") {
//         formInput.style.outline = '3px solid red'
//     } else {
//         formInput.style.outline = '3px solid lime'
//     }
// }


// const form = document.querySelector(".js-contact-form");
// const checkbox = document.querySelector(".js-policy-checkbox")
// const span = document.querySelector(".js-username-output");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const name = formInput.value.trim();
//     const checked = checkbox.checked;

//     if (name === "" || !checked) {
//         alert("Заповніть форму!")
//         return
//     }

//     const userName = {
//         name: name
//     }
//     console.log(userName);

//     form.reset()
// });

// formInput.addEventListener("input", () => {
//     if (formInput.value.trim() === "") {
//         span.textContent = "Anonymous"
//     } else {
//         span.textContent = formInput.value
//     }
// })



// Завдання 4

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const decrease = document.querySelector(".js-decrease");
const increase = document.querySelector(".js-increase");
const box = document.querySelector(".box")


decrease.addEventListener("click", () => {
    let width = box.offsetWidth;
    let height = box.offsetHeight;

    if (width > 20 && height > 20) {
        box.style.width = width - 20 + "px"
        box.style.height = height - 20 + "px"
    }
});

increase.addEventListener("click", () => {
    let width = box.offsetWidth;
    let height = box.offsetHeight;

    if (width < 200 && height < 200) {
        box.style.width = width + 20 + "px"
        box.style.height = height + 20 + "px"
    }
})
