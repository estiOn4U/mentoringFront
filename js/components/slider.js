var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel__item");
    let clientWidth = document.documentElement.clientWidth;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    if (clientWidth <= 1440) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "inline-block";
    } else {
        for (let i = 0; i < slides.length; i += 1) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "inline-block";

        if (slides[slideIndex]) {
            slides[slideIndex].style.display = "inline-block";
        } else {
            slides[slideIndex - 2].style.display = "inline-block";
        }
    }
}