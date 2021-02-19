import {tabletH} from '../abstracts/media-queries.js';

function toggleCollapseFooter() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.classList.contains('visible')) {
        panel.removeAttribute("aria-expanded");
        panel.classList.remove('visible');
    } else {
        panel.setAttribute("aria-expanded", "true");
        panel.classList.add('visible');
    }
}

function toggleCollapseNav() {
    let defaultActive = document.querySelector("a[href='https://www.cosentino.com/es/soluciones-arquitectonicas/']").parentNode;
    defaultActive.classList.toggle("active");
    this.classList.toggle("active");
    let panel = this.lastElementChild;
    if (panel.classList.contains('visible')) {
        panel.removeAttribute("aria-expanded");
        panel.classList.remove('visible');
    } else {
        panel.setAttribute("aria-expanded", "true");
        panel.classList.add('visible');
    }
}

function checkFooterCollapse() {
    let clientWidth = document.documentElement.clientWidth;
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        if (clientWidth <= tabletH) {
            acc[i].addEventListener("click", toggleCollapseFooter);
            acc[i].nextElementSibling.classList.remove('visible');
        } else {
            acc[i].removeEventListener("click", toggleCollapseFooter);
            let panel = acc[i].nextElementSibling;
            panel.classList.add('visible');
        }
    }
}

function autoFocus() {
    let navTabs = document.querySelectorAll(".main-navbar__tab:not(.active)");
    for (let i = 0; i < navTabs.length; i++) {
        navTabs[i].addEventListener("mouseenter", toggleCollapseNav);
        navTabs[i].addEventListener("mouseleave", toggleCollapseNav);
    }
}

export {checkFooterCollapse, autoFocus};