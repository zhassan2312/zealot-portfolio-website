



document.addEventListener('DOMContentLoaded', function() {
    const heroSectionImage1 = document.querySelector('.heroSectionImage1');
    const heroSectionImage2 = document.querySelector('.heroSectionImage2');
    

    // Initial animations on page load
    const heroSectionHeading = document.querySelector('.heroSectionHeading');
    const heroSectionBodyText = document.querySelector('.heroSectionBodyText');
    const buttonContainer = document.querySelector('.buttonContainer');

    heroSectionHeading.classList.add('animate');
    heroSectionBodyText.classList.add('animate');
    buttonContainer.classList.add('animate');
    setTimeout(() => {
        heroSectionImage2.classList.add('animate');
    }, 1000); // Delay to ensure image 2 pops up after text
    setTimeout(() => {
        heroSectionImage1.classList.add('animate');
    }, 2000); // Delay to ensure image 1 pops out after image 2

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.logoContainer',{
        scrollTrigger: {
            trigger: '.header',
        
        },
        x: -800,
        duration: 2,

    });

    gsap.from('.headerButton',{
        scrollTrigger: {
            trigger: '.header',
        
        },
        duration: 2,
        x: 800,

    });

    gsap.from('.navigationLinks',{
        scrollTrigger: {
            trigger: '.header',
        
        },
        duration: 2,
        opacity:0,

    });


    
    gsap.to('.heroSectionImageContainer',{
        scrollTrigger: {
            trigger: '.page1',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
        x: 800,
    });
    gsap.to('.heroSectionContent',{
        scrollTrigger: {
            trigger: '.page1',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
        duration:8,
        x: -800,
    });

    gsap.to('.header',{
        scrollTrigger: {
            trigger: '.page1',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
        },
        duration:8,
        y: -200,
    });

    gsap.to('.heroSectionContainer', {
        scrollTrigger: {
            trigger: '.page1',
            start: 'top top',
            end: 'bottom center',
            scrub: 1,
        },
        duration:8,

        backgroundColor: 'rgba(255, 255, 255, 0)', // Fading to transparent white
    });

    gsap.from('.toolsSectionContainer', {
        scrollTrigger: {
            trigger: '.toolsSectionContainer',
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        opacity: 0,
    });
    
    gsap.to('.toolsSectionContainer', {
        scrollTrigger: {
            trigger: '.page2',
            start: 'top 20%',
            end: 'bottom center',
            scrub: 1,
            toggleActions: 'restart none none none', // Disable animation on scroll up
            pin: true,
            pinSpacing: true,
        },
    });
    
    gsap.from('.aboutSectionImageContainer', {
        scrollTrigger: {
            trigger: '.page3',
            start: 'top bottom',
            end: 'center center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        x: -800,
    });
    
    gsap.from('.aboutSectionContent', {
        scrollTrigger: {
            trigger: '.page3',
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        x: 800,
    });
    
    gsap.to('.aboutSectionContainer', {
        scrollTrigger: {
            trigger: '.page3',
            start: 'top 10%',
            end: 'bottom center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            pin: true,
            pinSpacing: true,
            scrub: 1,
        },
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.page4',
            start: 'top bottom',
            end: 'center center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
    });
    
    tl.from('.portfolioHeader', {
        opacity:0,
    },0);

    tl.from('.portfolioNavigationLinks', {
        opacity:0,
    },0);

    gsap.from('.portfolioContainer',{
        scrollTrigger: {
            trigger: '.page4',
            start: 'top bottom',
            end: 'center center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        x: -1200,
    });


    gsap.from('.skillsHeader',{
        scrollTrigger: {
            trigger: '.page5',
            start: 'top bottom',
            end: 'center center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        y: -300,
        opacity:0,
    });

    
    gsap.utils.toArray('.skillBarFill').forEach((bar) => {
        gsap.fromTo(bar, 
            { width: '0%' }, 
            { 
                width: `${bar.dataset.percentage}%`,
                scrollTrigger: {
                    trigger: '.page5',
                    start: 'top bottom',
                    end: 'center center',
                    toggleActions: 'restart none none none', // Disable animation on scroll up
                    scrub: 1,
                },
                duration: 1
            }
        );
    });


    gsap.to('.skillsSectionContainer',{
        scrollTrigger: {
            trigger: '.page5',
            start: 'top 10%',
            end: 'bottom center',
            pin:true,
            pinSpacing: true,
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
    });

    gsap.from('.clientsHeader',{
        scrollTrigger: {
            trigger: '.page6',
            start: 'top bottom',
            end: 'center center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        opacity:0,
    });

    gsap.from('.companiesLogoGrid',{
        scrollTrigger: {
            trigger: '.clientsHeader',
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        x:-1200,
    });


    gsap.from('.testimonialsSection',{
        scrollTrigger: {
            trigger: '.testimonialsSection',
            start: 'top bottom',
            end: 'center center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        opacity:0,
    });

    gsap.from('.testimonials',{
        scrollTrigger: {
            trigger: '.testimonialsSection',
            start: 'top bottom',
            end: 'center center',
            toggleActions: 'restart complete none none', // Disable animation on scroll up
            scrub: 1,
        },
        x:-1200,
    });

    gsap.from('.contactHeader',{
        scrollTrigger: {
            trigger: '.page7',
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        opacity:0,
    });

    gsap.from('.contactSectionImage2', {
        scrollTrigger: {
            trigger: '.page7',
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        x: -800,
    });
    
    gsap.from('.contactSection', {
        scrollTrigger: {
            trigger: '.page7',
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        x: 800,
    });


    gsap.to('.contactSectionContainer',{
        scrollTrigger: {
            trigger: '.page7',
            start: 'top 10%',
            end: 'bottom center',
            pin:true,
            pinSpacing: true,
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
    });

    gsap.from('.faqsHeader',{
        scrollTrigger: {
            trigger: '.page8',
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        opacity:0,
    });

    gsap.from('.faqSection', {
        scrollTrigger: {
            trigger: '.page8',
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
        x: -1200,
    });
    
    gsap.to('.faqSectionContainer',{
        scrollTrigger: {
            trigger: '.page8',
            start: 'top 10%',
            end: 'bottom center',
            pin:true,
            pinSpacing: true,
            toggleActions: 'restart none none none', // Disable animation on scroll up
            scrub: 1,
        },
    });


    gsap.from('.footerContent',
        {
            scrollTrigger: {
                trigger: '.footerContainer',
                start: 'top bottom',
                end: 'bottom center',
                toggleActions: 'restart none none none', // Disable animation on scroll up
                scrub: 1,
            },
            opacity:0,
        });
});
