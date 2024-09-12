document.addEventListener('DOMContentLoaded', function () {
    const mainSection = document.querySelector('.main_section');
    const secondSection = document.querySelector('.second_section');
    const thirdSection = document.querySelector('.third_sections');

    function animateBackground(section) {
        let positionX = 50; // Position de départ en X
        let positionY = 50; // Position de départ en Y
        let speedX = 0.05; // Vitesse du déplacement en X
        let speedY = 0.05; // Vitesse du déplacement en Y

        function animate() {
            positionX += speedX;
            positionY += speedY;

            if (positionX > 100 || positionX < 0) {
                speedX = -speedX; // Inverser la direction en X
            }
            if (positionY > 100 || positionY < 0) {
                speedY = -speedY; // Inverser la direction en Y
            }

            section.style.backgroundPosition = `${positionX}% ${positionY}%`;

            requestAnimationFrame(animate);
        }

        animate();
    }

    // Initialisation de l'animation pour les trois sections
    animateBackground(mainSection);
    animateBackground(secondSection);
    animateBackground(thirdSection);
});


let currentSlide = 0;

function moveSlide(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = carouselImages.children.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    const translateX = -currentSlide * 100;
    carouselImages.style.transform = `translateX(${translateX}%)`;
}
