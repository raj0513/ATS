function toggleMobileMenu() {
      const navMenu = document.getElementById("navMenu");
      navMenu.classList.toggle("show");
    }

let currentSlide = 0;
const slides = document.querySelectorAll(".slide-img");
const slideshow = document.getElementById("slideshow");

function updateSlide() {
  const slideHeight = window.matchMedia("(max-width: 420px)").matches ? 400 : 650;
  slideshow.style.transform = `translateY(-${currentSlide * slideHeight}px)`;

  slides.forEach(slide => {
    const headline = slide.querySelector(".slideshow-headlines");
    headline.style.animation = "none";
    headline.offsetHeight;
    headline.style.animation = null;
  });
}

function showSlide(index) {
  currentSlide = index;
  updateSlide();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

setInterval(nextSlide, 10000);
updateSlide();


const slider = document.querySelector('.news-slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cards = slider.querySelectorAll('.news-card');

const gap = 30;
const cardWidth = cards[0].offsetWidth + gap;
const visibleCards = 2;

prevBtn.addEventListener('click', () => {
  if (slider.scrollLeft <= 0) {
    slider.scrollTo({
      left: slider.scrollWidth,
      behavior: 'smooth'
    });
  } else {
    slider.scrollBy({
      left: -cardWidth * visibleCards,
      behavior: 'smooth'
    });
  }
});

nextBtn.addEventListener('click', () => {
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft >= maxScrollLeft - 5) {
    slider.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  } else {
    slider.scrollBy({
      left: cardWidth * visibleCards,
      behavior: 'smooth'
    });
  }
});

