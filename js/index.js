window.addEventListener("load", init);
window.addEventListener("resize", checkFooterCollapse);

const focusableSelectors = 'input:not([disabled]), button:not([disabled]), a[href]:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]';
var slideIndex = 1;

function init() {
    addFooter();
    addEventListeners();
    checkFooterCollapse();
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
    let customSelect = document.querySelector("#accordion-button");

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

    customSelect.addEventListener("click", function () {
        let panel = this.nextElementSibling;

        if (!panel.classList.contains('f-hidden')) { //si esta abierto lo escondo
            panel.removeAttribute("aria-expanded");
            panel.classList.add('f-hidden');
        } else { //si está cerrado lo muestro
            panel.classList.remove('f-hidden');
            panel.setAttribute("aria-expanded", "true");
            for (let option of document.querySelectorAll(".custom-select__option")) {
                option.addEventListener("click", function () {
                    if (!this.classList.contains("selected")) {
                        this.parentNode.querySelector('.custom-select__option.selected').classList.remove('selected');
                        this.classList.add("selected");
                    }
                });
            }
        }
        //TODO: Make list crawlable!
    });
}

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
    //TODO: Añadir un listener del tamaño de pantalla. La función tiene margen de mejora...
}

function checkFooterCollapse() {
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