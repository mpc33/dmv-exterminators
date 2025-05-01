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
    const hamburger = document.querySelector('.hamburger-menu');
    const navContainer = document.querySelector('.nav-links-container');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navContainer.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navContainer.contains(event.target) && !hamburger.contains(event.target)) {
            hamburger.classList.remove('active');
            navContainer.classList.remove('active');
        }
    });

    // Handle dropdowns
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        // Handle both click and touch events for the dropdown toggle
        ['click', 'touchend'].forEach(eventType => {
            dropdownToggle.addEventListener(eventType, function(e) {
                e.preventDefault(); // Prevent navigation
                e.stopPropagation(); // Prevent event bubbling
                
                if (window.innerWidth <= 768) {
                    // Mobile behavior
                    // Close all other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('active');
                        }
                    });
                    dropdown.classList.toggle('active');
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        const isDropdownClick = event.target.closest('.dropdown');
        if (!isDropdownClick) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});
