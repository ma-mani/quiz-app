const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

export const createCard = (question, answer) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-js', 'bookmark');

    card.innerHTML = `
                <svg
                    data-js="bookmark-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="bookmark__icon"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                </svg>

                <span class="card__question">${question}</span>
                <button class="card__btn" data-js="button">Show Answer</button>
                <span
                    class="card__answer card__hide-answer"
                    data-js="card__answer"
                    >${answer}</span
                >
                <div class="card__hash">
                    <span>#html</span>
                    <span>#css</span>
                    <span>#abbreviation</span>
                </div>
    `;

    main.append(card);

    const selectBookmark = card.querySelector("[data-js='bookmark-1']");
    selectBookmark.addEventListener('click', () => {
        selectBookmark.classList.toggle('--green');
    });
    return card;
};

form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (!data) return;

    const localStore = localStorage.getItem('cardData');

    const cardDataList = localStore ? JSON.parse(localStore) : [];

    cardDataList.push({question: data.question, answer: data.answer});

    localStorage.setItem('cardData', JSON.stringify(cardDataList));

    event.target.reset();
});
