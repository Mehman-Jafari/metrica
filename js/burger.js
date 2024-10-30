const burgerMenu = document.querySelector('.body-header__burger-menu');
const burgerContent = document.querySelector('.header__burger-content');
const body = document.querySelector('body');

export default function burgerOpenAndExit() {
    burgerContent.addEventListener('click', (e) => {
        if (e.target.tagName === "A" || e.target.tagName === "IMG") {
            burgerMenu.classList.remove('open');
            burgerContent.classList.remove('open');
            body.classList.remove('lock');
        }
    });
    
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        burgerContent.classList.toggle('open');
        body.classList.toggle('lock');
    });
}