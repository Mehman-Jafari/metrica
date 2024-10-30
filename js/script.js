/* Импорт "burgerOpenAndExit" и вызов функции работы с бургером */
import burgerOpenAndExit from "./burger.js";
burgerOpenAndExit();

const btnServices = document.querySelector('.body-services__btn');
const popup = document.querySelector('.popup-services');
const btnClose = document.querySelector('.body-popup-services__close-btn');

btnServices.addEventListener('click', () => {
    popup.classList.add('open');
    body.classList.add('lock');
});

btnClose.addEventListener('click', () => {
    popup.classList.remove('open');
    body.classList.remove('lock');
});