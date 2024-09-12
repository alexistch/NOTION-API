
 document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.main_section');
    let positionX = 50; // Position de départ en X
    let positionY = 50; // Position de départ en Y
    let speedX = 0.2; // Vitesse du déplacement en X
    let speedY = 0.2; // Vitesse du déplacement en Y

    function animateBackground() {
        positionX += speedX;
        positionY += speedY;

        if (positionX > 100 || positionX < 0) {
            speedX = -speedX; // Inverser la direction en X
        }
        if (positionY > 100 || positionY < 0) {
            speedY = -speedY; // Inverser la direction en Y
        }

        section.style.backgroundPosition = `${positionX}% ${positionY}%`;

        requestAnimationFrame(animateBackground);
    }

    animateBackground();
});


document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.second_section');
    let positionX = 50; // Position de départ en X
    let positionY = 50; // Position de départ en Y
    let speedX = 0.2; // Vitesse du déplacement en X
    let speedY = 0.2; // Vitesse du déplacement en Y

    function animateBackground() {
        positionX += speedX;
        positionY += speedY;

        if (positionX > 100 || positionX < 0) {
            speedX = -speedX; // Inverser la direction en X
        }
        if (positionY > 100 || positionY < 0) {
            speedY = -speedY; // Inverser la direction en Y
        }

        section.style.backgroundPosition = `${positionX}% ${positionY}%`;

        requestAnimationFrame(animateBackground);
    }

    animateBackground();
});

let currentSlide = 0;

function moveSlide(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = carouselImages.children.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    const translateX = -currentSlide * 100;
    carouselImages.style.transform = `translateX(${translateX}%)`;
}
