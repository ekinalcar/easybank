const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    return overlay.classList.add('fade-out');
  }
  header.classList.add('open');
  overlay.classList.remove('fade-out');
  return overlay.classList.add('fade-in');
});
