const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currnet = 1;

next.addEventListener('click', () => {
  currnet++;
  if (currnet > circles.length) {
    currnet = circles.length;
  }
  if (currnet > 1) {
    prev.disabled = false;
  }
  update();
});

prev.addEventListener('click', () => {
  currnet--;
  if (currnet < 1) {
    currnet = 1;
    prev.disabled = true;
  }
  update();
});

function update() {
  circles.forEach((el, idx) => {
    if (currnet > idx) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width = ((actives.length - 0.4) / circles.length) * 100 + '%';
}
