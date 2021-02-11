window.addEventListener("resize", checkFooterCollapse);

import { checkFooterCollapse } from './components/collapsibles.js';
import { trapFocus } from './components/dialogs.js';

var slideIndex = 1;

if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

function init() {
    addFooter();
    addEventListeners();
    checkFooterCollapse();
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
}