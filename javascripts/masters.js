const slider = document.querySelector('.masters-slider');
const slides = document.querySelectorAll('.masters-slide');

let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  slider.scrollTo({
    left: slider.offsetWidth * currentIndex,
    behavior: 'smooth'
  });
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  slider.scrollTo({
    left: slider.offsetWidth * currentIndex,
    behavior: 'smooth'
  });
});