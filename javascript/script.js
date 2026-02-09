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



//Script til row med billederne i ideliste.html


            let isDown = false;
            let startX;
            let scrollLeft;
            const row = document.getElementById('rouletteRow');

            row.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - row.offsetLeft;
                scrollLeft = row.parentElement.scrollLeft;
            });

            row.addEventListener('mouseleave', () => isDown = false);
            row.addEventListener('mouseup', () => isDown = false);

            row.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - row.offsetLeft;
                const scroll = (x - startX) * -1;
                row.parentElement.scrollLeft = scrollLeft + scroll;
            });

function scrollRoulette(direction) {
    const itemWidth = row.querySelector('.roulette-item').offsetWidth + 16; // item width + gap
    row.parentElement.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth'
    });
}

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

row.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

row.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
        scrollRoulette(diff > 0 ? 1 : -1);
    }
}