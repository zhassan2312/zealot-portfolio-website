// Initialize Lottie animation

// Load the animation
document.addEventListener('DOMContentLoaded', function() {
bodymovin.loadAnimation({
    container: document.getElementById('lottie-container'), // the DOM element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/d78558f1-ff0d-4a13-bed5-67218e6702e3/wtKDYL2WZJ.json' // the path to the animation JSON file
});

bodymovin.loadAnimation({
    container: document.getElementById('skillsAnimation'), // the DOM element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/a6e864cb-f717-4a92-b941-2acacabddfed/Vd3FJATepJ.json',
});
});