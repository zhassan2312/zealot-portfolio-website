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
});

gsap.to('.page1',{
    scrollTrigger: {
        trigger: '.page1',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
    },
    x: 0,
    opacity: 1
})