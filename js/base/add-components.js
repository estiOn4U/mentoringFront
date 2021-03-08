import {checkFooterCollapse, checkNavbarCollapse, addTabListeners} from "../components/collapsibles.js";
import {addNavbarSlider} from '../components/slider.js';

function addFooter() {

    fetch("./MainFooter.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".main-footer").innerHTML = data;
        })
        .then(checkFooterCollapse);
}

function addNavbar() {

    fetch("./MainNavbar.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".main-header").innerHTML = data;
        })
        .then(addTabListeners)
        .then(addNavbarSlider)
        .then(checkNavbarCollapse);
}


export {addFooter, addNavbar};