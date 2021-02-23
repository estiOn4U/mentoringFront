import {tabletH} from '../abstracts/media-queries.js';

function genericCollapse(collapsible) {
    if (collapsible.classList.contains('visible')) {
        collapsible.removeAttribute("aria-expanded");
        collapsible.classList.remove('visible');
    } else {
        collapsible.setAttribute("aria-expanded", "true");
        collapsible.classList.add('visible');
    }
}

function toggleCollapseFooter() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    genericCollapse(panel);
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

function autoCollapseSubnav() {
    let defaultActive = document.querySelector("a[href='https://www.cosentino.com/es/soluciones-arquitectonicas/']").parentNode;
    defaultActive.classList.toggle("active");
    this.classList.toggle("active");
    let panel = this.lastElementChild;
    genericCollapse(panel);

}

function autoFocus() {
    let navTabs = document.querySelectorAll(".main-navbar__tab:not(.active)");
    for (let i = 0; i < navTabs.length; i++) {
        navTabs[i].addEventListener("mouseenter", autoCollapseSubnav);
        navTabs[i].addEventListener("mouseleave", autoCollapseSubnav);
    }
}

function toggleCollapseNavbar() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.classList.toggle("active");
    genericCollapse(panel);

    let acc = document.querySelectorAll(".main-navbar__tab");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", toggleCollapseColumn);
    }
}

function toggleCollapseColumn() {
    this.classList.toggle("active");
    let panel = this.lastElementChild;

    genericCollapse(panel);
}

function checkNavbarCollapse() {
    let clientWidth = document.documentElement.clientWidth;
    let toggleNavbarBtn = document.querySelector(".toggle-navbar-btn");
    if (clientWidth <= tabletH) {
        toggleNavbarBtn.addEventListener("click", toggleCollapseOverlay);
    } else {
        autoFocus();
    }
}

function toggleCollapseOverlay() {
    let overlay = document.querySelector(".all-headers__container.overlay-content");
    this.classList.toggle("active"); //this ==button

    if (overlay.style.width === "") {
        overlay.style.width = "100%";
        document.querySelector("body").style.overflow = "hidden";
    } else {
        overlay.style.width = "";
        document.querySelector("body").style.overflow = "auto";
    }
}

export {checkFooterCollapse, autoFocus, checkNavbarCollapse};