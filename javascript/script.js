const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });





    //Kode for billede slider

    const slides = [
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide3.jpg',
  'images/slide4.jpg',
  'images/slide5.jpeg'
];

let slideIndex = 0;
const slider = document.getElementById('slider');

function showSlides() {
  slider.style.opacity = 0;

  setTimeout(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    slider.src = slides[slideIndex];
    slider.style.opacity = 1;
  }, 600); // half of the CSS transition time
}

setInterval(showSlides, 4000);




document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('input[name="valentine"]');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const yesLabel = document.querySelector('input[value="yes"]').parentElement;
      const noLabel = document.querySelector('input[value="no"]').parentElement;

      if (!yesLabel || !noLabel) return; // safety guard

      if (radio.value === 'no') {
        yesLabel.lastChild.textContent = ' Nej';
        noLabel.lastChild.textContent = ' Ja';
      } else {
        yesLabel.lastChild.textContent = ' Ja';
        noLabel.lastChild.textContent = ' Nej';
      }
    });
  });
});
