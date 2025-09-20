// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved user preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = '🌙';
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's a download link or external link
            if (this.getAttribute('href').startsWith('#') && this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate offset for fixed navbar
                    const navbarHeight = document.getElementById('navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight - 10;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received. (This is a frontend demo — no backend connected.)`);
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Add active class to nav links based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});