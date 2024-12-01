const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Add animation to the hamburger
    mobileMenu.classList.toggle('active'); // Slide in the menu
});
