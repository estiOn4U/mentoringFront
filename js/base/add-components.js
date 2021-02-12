import {checkFooterCollapse} from "../components/collapsibles.js";

function addFooter() {

    fetch("./MainFooter.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        })
        .then(checkFooterCollapse);
}

export {addFooter};