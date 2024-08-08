document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.figure-rollover');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const numImagesPerSlide = 4; // Mostrar 4 imágenes por vez
    const totalImages = images.length;
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + Math.ceil(totalImages / numImagesPerSlide)) % Math.ceil(totalImages / numImagesPerSlide);
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % Math.ceil(totalImages / numImagesPerSlide);
        updateCarousel();
    });
});
