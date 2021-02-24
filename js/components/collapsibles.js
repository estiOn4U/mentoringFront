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
    let hamIconSvg = this.childNodes[1].lastElementChild;
    let overlay = document.querySelector(".all-headers__container.overlay-content");
    let acc = document.querySelectorAll(".main-navbar__tab");
    let overlayClose = document.querySelector(".overlay__close");
    let allSubnavs = document.querySelectorAll(".navbar__dropdown.overlay-content");

    this.classList.toggle("active");
    if (!overlay.classList.contains("overlay--active")) {
        hamIconSvg.setAttribute("xlink:href", './resources/svg/sprites.svg#hamburguer-close');
        overlay.classList.add("overlay--active");
        document.querySelector("body").style.overflow = "hidden";
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", toggleCollapseSubnav);
        }
        for (let i = 0; i < overlayClose.length; i++) {
            overlayClose[i].addEventListener("click", toggleCollapseSubnav);
        }
    } else {
        hamIconSvg.setAttribute("xlink:href", './resources/svg/sprites.svg#hamburguer-open');
        overlay.classList.remove("overlay--active");
        document.querySelector("body").style.overflow = "auto";
        for (let i = 0; i < acc.length; i++) {
            acc[i].removeEventListener("click", toggleCollapseSubnav);
        }
        for (let i = 0; i < overlayClose.length; i++) {
            overlayClose[i].removeEventListener("click", toggleCollapseSubnav);
        }
        for (let i = 0; i < allSubnavs.length; i++) {
            allSubnavs[i].classList.remove("overlay--active");
        }
    }
}

function toggleCollapseSubnav() {
    this.classList.toggle("active");
    let panel = this.lastElementChild;
    if (!panel.classList.contains("overlay--active")) {
        panel.classList.add("overlay--active");
    } else {
        panel.classList.remove("overlay--active");
    }
}

export {checkFooterCollapse, autoFocus, checkNavbarCollapse};