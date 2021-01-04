const btnHamburger = document.querySelector('#btnHamburger');
btnHamburger.addEventListener('click', () => {
  if (btnHamburger.classList.contains('open')) {
    return btnHamburger.classList.remove('open');
  }
  return btnHamburger.classList.add('open');
});
