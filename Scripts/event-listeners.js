document.addEventListener('DOMContentLoaded', function() {
    const portfolioLinks = document.querySelectorAll('.js-portfolio-navigation');
    const contactLinks = document.querySelectorAll('.js-contact-navigation');
    const portfolioSection = document.querySelector('#portfolioSection');
    const contactSection = document.querySelector('#contactSection');
    const upworkButton = document.querySelector('.js-upwork-button');
    const scheduleButton = document.querySelector('.js-schedule-button');
    const emailButton = document.querySelector('.js-email-button');
    

    // Add event listeners to all portfolio links
    if (portfolioLinks.length > 0) {
        console.log('Portfolio links found');
        portfolioLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor behavior
                if (portfolioSection) {
                    console.log('Portfolio section found');
                    portfolioSection.scrollIntoView({
                        behavior: 'smooth' // Smooth scroll
                    });
                } else {
                    console.error('Portfolio section not found');
                }
            });
        });
    } else {
        console.error('Portfolio links not found');
    }

    // Add event listeners to all contact links
    if (contactLinks.length > 0) {
        console.log('Contact links found');
        contactLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default anchor behavior
                if (contactSection) {
                    console.log('Contact section found');
                    contactSection.scrollIntoView({
                        behavior: 'smooth' // Smooth scroll
                    });
                } else {
                    console.error('Contact section not found');
                }
            });
        });
    } else {
        console.error('Contact links not found');
    }

    
    scheduleButton.addEventListener('click', function() {
        window.open('https://calendly.com/zhassan2312', '_blank');
        
    });

    
    upworkButton.addEventListener('click', function() {
        window.open('https://www.upwork.com/freelancers/~01ed8e41a9e6f5d90e', '_blank');
        
    });

    emailButton.addEventListener('click', function() {
        window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox', '_blank');
    });

});