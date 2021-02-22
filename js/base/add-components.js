import {checkFooterCollapse, autoFocus, checkNavbarCollapse} from "../components/collapsibles.js";

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
        .then(checkNavbarCollapse);
}


export {addFooter, addNavbar};