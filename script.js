document.addEventListener('DOMContentLoaded', function() {
    // Existing carousel code...

    // Read More functionality
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reviewCard = this.closest('.review-card');
            reviewCard.classList.add('expanded');
        });
    });

    // Mobile menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinksContainer = document.querySelector('.nav-links-container');

    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navLinksContainer.contains(event.target) && 
            !hamburgerMenu.contains(event.target) && 
            navLinksContainer.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            navLinksContainer.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
});
