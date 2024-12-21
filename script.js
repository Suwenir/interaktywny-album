const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Funkcja zmieniająca slajdy
function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
}

// Zmiana co 3 sekundy
setInterval(changeSlide, 3000);
