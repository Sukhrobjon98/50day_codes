const panles = document.querySelectorAll('.panel');

panles.forEach((element) => {
  element.addEventListener('mouseover', () => {
    removeActiveClass();
    element.classList.add('active');
  });
});

function removeActiveClass() {
  panles.forEach((element) => {
    element.classList.remove('active');
  });
}
