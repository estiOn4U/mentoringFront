import {tabletH} from '../abstracts/media-queries.js';

function toggleCollapse() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.classList.contains('visible')) {
        panel.removeAttribute("aria-expanded");
        panel.classList.remove('visible');
    }
    else {
        panel.setAttribute("aria-expanded", "true");
        panel.classList.add('visible');
    }
}

function checkFooterCollapse() {
    let clientWidth = document.documentElement.clientWidth;
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        if (clientWidth <= tabletH) {
            acc[i].addEventListener("click", toggleCollapse);
            acc[i].nextElementSibling.classList.remove('visible');
        } else {
            acc[i].removeEventListener("click", toggleCollapse);
            let panel = acc[i].nextElementSibling;
            panel.classList.add('visible');
        }
    }
}

export {checkFooterCollapse};