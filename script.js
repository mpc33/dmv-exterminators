// Language functionality
let currentLanguage = localStorage.getItem('language') || 'en';
let translations = {};

// Load language file
async function loadLanguage(lang) {
    try {
        console.log(`Loading language file: languages/${lang}.json`);
        const response = await fetch(`languages/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load language file: ${response.status}`);
        }
        translations = await response.json();
        console.log('Translations loaded:', translations);
        applyTranslations();
        updateLanguageToggle();
    } catch (error) {
        console.error('Error loading language file:', error);
        // If loading fails, fallback to English
        if (lang !== 'en') {
            currentLanguage = 'en';
            localStorage.setItem('language', 'en');
            loadLanguage('en');
        }
    }
}

// Apply translations to the page
function applyTranslations() {
    document.documentElement.lang = currentLanguage;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const parts = key.split('.');
        
        let value = translations;
        for (const part of parts) {
            if (value[part] === undefined) {
                console.warn(`Translation key not found: ${key}`);
                return;
            }
            value = value[part];
        }
        
        if (typeof value === 'string') {
            console.log(`Translating ${key} to: ${value}`);
            // Handle different element types
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = value;
            } else if (element.tagName === 'A' && element.hasAttribute('data-i18n-href')) {
                // Update href if specified
                const hrefKey = element.getAttribute('data-i18n-href');
                const hrefParts = hrefKey.split('.');
                let hrefValue = translations;
                for (const part of hrefParts) {
                    if (hrefValue[part] === undefined) {
                        break;
                    }
                    hrefValue = hrefValue[part];
                }
                if (typeof hrefValue === 'string') {
                    element.href = hrefValue;
                }
                element.textContent = value;
            } else if (element.hasAttribute('data-i18n-html') || value.includes('<br>')) {
                // Use innerHTML for elements that contain HTML
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    });
    
    // Update placeholders for form elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const parts = key.split('.');
        
        let value = translations;
        for (const part of parts) {
            if (value[part] === undefined) {
                console.warn(`Translation key not found for placeholder: ${key}`);
                return;
            }
            value = value[part];
        }
        
        if (typeof value === 'string') {
            console.log(`Translating placeholder ${key} to: ${value}`);
            element.placeholder = value;
        }
    });
}

// Toggle between languages
function toggleLanguage() {
    console.log(`Toggling language from ${currentLanguage}`);
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('language', currentLanguage);
    loadLanguage(currentLanguage);
}

// Update language toggle button text
function updateLanguageToggle() {
    const toggleButton = document.querySelector('.language-toggle');
    if (toggleButton && translations.language && translations.language.toggle) {
        const buttonSpan = toggleButton.querySelector('span');
        if (buttonSpan) {
            buttonSpan.textContent = translations.language.toggle;
        } else {
            // Fallback if span doesn't exist
            toggleButton.innerHTML = `<i class="fas fa-globe"></i> <span>${translations.language.toggle}</span>`;
        }
        
        toggleButton.setAttribute('aria-label', 
            currentLanguage === 'en' 
                ? 'Switch to Spanish' 
                : 'Cambiar a Inglés'
        );
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Load the current language
    console.log('DOM content loaded, initializing language functionality');
    loadLanguage(currentLanguage);
    
    // Set up language toggle button click handler
    const languageToggle = document.querySelector('.language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
        console.log('Language toggle button set up');
    } else {
        console.warn('Language toggle button not found');
    }

    // Read More functionality
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reviewCard = this.closest('.review-card');
            const isExpanded = reviewCard.classList.contains('expanded');
            
            // First collapse all cards
            document.querySelectorAll('.review-card').forEach(card => {
                card.classList.remove('expanded');
                card.querySelector('.read-more-btn').textContent = 'Read More';
            });
            
            // Then expand the clicked card if it wasn't expanded
            if (!isExpanded) {
                reviewCard.classList.add('expanded');
                this.textContent = 'Read Less';
                
                // Ensure the expanded card is visible in the scroll view
                if (window.innerWidth <= 768) {
                    reviewCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
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

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navContainer.contains(event.target) && 
            !hamburger.contains(event.target) && 
            navContainer.classList.contains('active')) {
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
