import {addFooter} from './base/add-components.js';
import {checkFooterCollapse} from './components/collapsibles.js';
import {trapFocus} from './components/dialogs.js';
import {addSlider} from './components/slider.js';
import {validateForm} from './components/form-validations.js';

if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

function init() {
    addFooter();
    addEventListeners();
    checkFooterCollapse();
    addSlider();
}

function addEventListeners() {
    let dialog = document.querySelector("#modal");
    let overlay = document.querySelector("#modal-overlay");
    let closeButton = document.querySelector("#close-button");
    let openButton = document.querySelector("#open-button");
    let submitButton = document.querySelector('#main-submit-btn');

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

    overlay.addEventListener("click", function () {
        dialog.classList.toggle("closed");
        dialog.setAttribute("aria-hidden", "true");
        dialog.removeAttribute("aria-modal");
        this.classList.toggle("closed");
    });

    submitButton.addEventListener("click", validateForm);
}