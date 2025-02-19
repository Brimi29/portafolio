// script.js
let currentIndex = 0;

const images = document.querySelectorAll('.image-container');
const totalImages = images.length;

function moveSlide(direction) {
  currentIndex += direction;

  // Si llegamos al final, volvemos al principio
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }

  // Desplazamos el carrusel
  document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}