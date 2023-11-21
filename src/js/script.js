import {createCard} from './form.js';

// Select all Ellements

const showAnswer = document.querySelector('[data-js="button"]');
const showAnswer1 = document.querySelector('[data-js="button-1"]');

const textAnswer = document.querySelector("[data-js='card__answer']");
const textAnswer1 = document.querySelector("[data-js='card__answer-1']");

const selectBookmark1 = document.querySelector("[data-js='bookmark-1']");
const selectBookmark2 = document.querySelector("[data-js='bookmark-2']");

const main = document.querySelector('[data-js="main"]');
const card = document.createElement('div');

card.classList.add('card');

// Events

// showAnswer.addEventListener('click', () => {
//     if (showAnswer.textContent === 'Show Answer') {
//         showAnswer.textContent = 'Hide Answer';
//         textAnswer.classList.remove('card__hide-answer');
//     } else {
//         textAnswer.classList.add('card__hide-answer');
//         showAnswer.textContent = 'Show Answer';
//     }
// });

// showAnswer1.addEventListener('click', () => {
//     if (showAnswer1.textContent === 'Show Answer') {
//         showAnswer1.textContent = 'Hide Answer';
//         textAnswer1.classList.remove('card__hide-answer');
//     } else {
//         textAnswer1.classList.add('card__hide-answer');
//         showAnswer1.textContent = 'Show Answer';
//     }
// });

// selectBookmark1.addEventListener('click', () => {
//     selectBookmark1.classList.toggle('--green');
// });

// selectBookmark2.addEventListener('click', () => {
//     selectBookmark2.classList.toggle('--green');
// });

// question answer

// export const update = () => {
// };
const localStore = localStorage.getItem('cardData');

const cardData = localStore ? JSON.parse(localStore) : [];
// console.log(cardData);

const cards = cardData.forEach((data) =>
    main.append(createCard(data.question, data.answer)),
);
