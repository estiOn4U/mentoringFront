window.addEventListener("load", init);
window.addEventListener("resize", checkCollapse);

const focusableSelectors = 'input:not([disabled]), button:not([disabled]), a[href]:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]';
var slideIndex = 1;

function init() {
    addFooter();
    addEventListeners();
    checkCollapse();
    showSlides(slideIndex);
}

function addFooter() {
    fetch("./MainFooter.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
}

function addEventListeners() {
    let dialog = document.querySelector("#modal");
    let overlay = document.querySelector("#modal-overlay");
    let closeButton = document.querySelector("#close-button");
    let openButton = document.querySelector("#open-button");
    let nextSlide = document.querySelector(".next");
    let prevSlide = document.querySelector(".prev");


    closeButton.addEventListener("click", function () {
        dialog.classList.toggle("closed");
        dialog.setAttribute("aria-hidden", "true");
        dialog.removeAttribute("aria-modal");
        overlay.classList.toggle("closed");
    });

    openButton.addEventListener("click", function () {
        dialog.classList.toggle("closed");
        dialog.setAttribute("aria-modal", "true");
        dialog.removeAttribute("aria-hidden");
        overlay.classList.toggle("closed");
        trapFocus(dialog);
    });

    nextSlide.addEventListener("click", function () {
        plusSlides(1);
    });

    prevSlide.addEventListener("click", function () {
        plusSlides(-1);
    });
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("carousel__item");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function checkCollapse() {
    let clientWidth = document.documentElement.clientWidth;
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        if (clientWidth <= 768) {
            acc[i].addEventListener("click", toggleCollapse);
            acc[i].nextElementSibling.style.display = "none";
        } else {
            acc[i].removeEventListener("click", toggleCollapse);
            let panel = acc[i].nextElementSibling;
            panel.style.display = "block";
        }
    }
}

function toggleCollapse() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        panel.removeAttribute("aria-expanded");
    } else {
        panel.style.display = "block";
        panel.setAttribute("aria-expanded", "true");
    }
}

/*TODO: Add ESC key navigation!*/

function trapFocus(dialog) {
    /*Approach 1: get elements from inside modal, add event listener to the last one
    * instead of applying tabindex to the rest of the elements of the DOM*/

    let modalFocusables = dialog.querySelectorAll(focusableSelectors);
    let firstFocusable = modalFocusables[0];
    let lastFocusable = modalFocusables[modalFocusables.length - 1];

    dialog.addEventListener("keydown", function (e) {
        let isTabPressed = (e.key === 'Tab' || e.keyCode === 9);

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
}

/*TODO: Approach 2?: get all elements outside modal, apply tabindex=2-1 AND aria-hidden=true*/