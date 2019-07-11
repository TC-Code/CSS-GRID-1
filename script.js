const burgerIcon = document.querySelector('.burger-icon');
const mainNav = document.querySelector('.main-nav');

burgerIcon.addEventListener('click', () => {
  mainNav.classList.toggle('burger-menu')
});