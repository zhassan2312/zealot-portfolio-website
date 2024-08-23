let slideIndex = 1;
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial");
    let dots = document.getElementsByClassName("dot");
    let totalSlides = slides.length;

    if (n > totalSlides) { slideIndex = 1 }
    if (n < 1) { slideIndex = totalSlides }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${(slideIndex - 1) * 500}px)`;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}