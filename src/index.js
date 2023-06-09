// burger

const burgerEl = document.querySelector('#burger');
const menuEl = document.querySelector('.nav__block');
const closeEl = document.querySelector('.close');
const brEl = document.querySelector('.br')

burgerEl.addEventListener('click', () => {
  menuEl.classList.toggle('open');
});

// burgerEl.addEventListener('click', event => {
//   event.target.classList.remove('close');
//   console.log(event.target);
// });



// slider
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,

  nextArrow: `<svg class="slider-icon-next" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="29" cy="29" r="29" fill=""/>
<path d="M25 37.43L33 29.1164L25 20.8027" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  prevArrow: `<svg class="slider-icon-prev" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="29" cy="29" r="29" fill=""/>
<path d="M33 36.43L25 28.1164L33 19.8027" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
});