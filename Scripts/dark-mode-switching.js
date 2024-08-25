document.addEventListener('DOMContentLoaded', function() {
document.getElementById('logo-container').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.logoImage').src = document.body.classList.contains('dark-mode') ? 'Assets/Logo/logo 1.svg' : 'Assets/Logo/logo.svg';
    document.querySelector('.heroSectionImage1').src = document.body.classList.contains('dark-mode') ? 'Assets/Graphics/dark.png' : 'Assets/Graphics/heroSectionImageBackground.svg';
    document.querySelector('.footerLogo').src = document.body.classList.contains('dark-mode') ? 'Assets/Logo/logo 1.svg' : 'Assets/Logo/logo.svg';
                    
    
});
});