window.addEventListener("load", init);
window.addEventListener("resize", checkCollapse);

function init() {
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
    });

    checkCollapse();
}

function checkCollapse() {
    let clientWidth = document.documentElement.clientWidth;
    let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
        if (clientWidth <= 768) {
            acc[i].addEventListener("click", toggleCollapse);
        }
        else {
            acc[i].removeEventListener("click", toggleCollapse);
            let panel = acc[i].nextElementSibling;
            panel.style.display = "block";
        }

    }
}

function toggleCollapse(){
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