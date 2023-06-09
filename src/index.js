// burger

const burgerEl = document.querySelector('#burger');
const menuEl = document.querySelector('.nav__block');

burgerEl.addEventListener('click', () => {
  menuEl.classList.toggle('open');
});
