window.addEventListener("load", init);
window.addEventListener("resize", checkFooterCollapse);

const focusableSelectors = 'input:not([disabled]), button:not([disabled]), a[href]:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]';
var slideIndex = 1;
//var optIndex = 1;

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
   // let customSelect = document.querySelector(".fake-select-btn");

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

   // customSelect.addEventListener("click", manageCustomSelect);
}

/*function manageCustomSelect() {
    let panel = this.nextElementSibling;
    let optionlist = document.getElementsByClassName("custom-select__option");

    if (!panel.classList.contains('f-hidden')) {
        panel.removeAttribute("aria-expanded");
        panel.classList.add('f-hidden');
        removeControls(panel);
        for (let i = 0; i < optionlist.length; i++) {
            optionlist[i].removeEventListener("click", function () {
                selectOption(this);
            });
            optionlist[i].removeEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    selectOption(this);
                }
            });
        }
    } else {
        panel.classList.remove('f-hidden');
        panel.setAttribute("aria-expanded", "true");
        addControls(panel);
        for (let i = 0; i < optionlist.length; i++) {
            optionlist[i].addEventListener("click", function () {
                selectOption(this);
            });
            optionlist[i].addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    this.click();
                }
            });
        }

    }
}

function addControls() {
    this.addEventListener("keydown", function (e) {
        if (e.keyCode === 38) {
            loopOptions(1);
        }
        if (e.keyCode === 40) {
            loopOptions(-1);
        }
    });
}

function loopOptions(n) {
    optIndex += n;
    let optionlist = document.getElementsByClassName("custom-select__option");

    if (optIndex > optionlist.length) {
        optIndex = 1;
        console.log(optionlist[(optionlist.length) - optIndex]);
    }
    if (optIndex < 1) {
        optIndex = optionlist.length;
        console.log(optionlist[(optionlist.length) - optIndex]);

    }
    console.log(optionlist[(optionlist.length) - optIndex]);

    for (let i = 0; i < optionlist.length; i += 1) {
        optionlist[i].style.color = "initial";
    }
    optionlist[(optionlist.length) - optIndex].style.color = "pink";

}

function removeControls() {
    this.removeEventListener;
}

function selectOption(option) {
    let btnText = document.querySelector('.fake-select-btn');
    let prevOption = option.parentNode.querySelector('.custom-select__option.selected');
    if (!option.classList.contains("selected")) {
        prevOption.classList.remove('selected');
        prevOption.removeAttribute("aria-selected");
        option.classList.add("selected");
        option.setAttribute("aria-selected", "true");
    }
    btnText.innerHTML = option.innerHTML;

}*/

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