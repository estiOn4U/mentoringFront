window.addEventListener("load", init);
window.addEventListener("resize", checkCollapse);

function init() {
    addFooter();
    addEventListeners();
    checkCollapse();
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

function checkCollapse() {
    let clientWidth = document.documentElement.clientWidth;
    let acc = document.getElementsByClassName("accordion");
    for ( let i = 0; i < acc.length; i++) {
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

/*TODO: Add ESC navigation!*/

function trapFocus(dialog) {
    /*Approach 1: get elements from inside modal, add event listener to the last one
    * instead of applying tabindex to the rest of the elements of the DOM*/

    let lastGut = dialog.lastElementChild;
    console.log(lastGut);

    let modalFocusables = dialog.querySelectorAll('input:not([disabled]), button:not([disabled]), a, textarea, select');
    // 'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])' ... alguno más?
    //CONST focusable selectors
    console.log(modalFocusables);
    let firstFocusable = modalFocusables[0];

    lastGut.addEventListener("keydown", event => {
        if (event.keyCode === 9) { //tab key
            event.preventDefault(); //es IMPORTANTE
            firstFocusable.focus();
            return;
        }
    });
}

function trapFocusAlt() {
    /*Approach 1: get all elements outside modal, apply tabindex=-1 AND aria-hidden=true*/
}