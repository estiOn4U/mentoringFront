window.addEventListener("load", init);

function init() {
    let dialog = document.querySelector("#modal");
    let overlay = document.querySelector("#modal-overlay");
    let closeButton = document.querySelector("#close-button");
    let openButton = document.querySelector("#open-button");

    let clientWidth  = document.documentElement.clientWidth;


    closeButton.addEventListener("click", function() {
        dialog.classList.toggle("closed");
        dialog.setAttribute("aria-hidden", "true");
        dialog.removeAttribute("aria-modal");
        overlay.classList.toggle("closed");
    });

    openButton.addEventListener("click", function() {
        dialog.classList.toggle("closed");
        dialog.setAttribute("aria-modal", "true");
        dialog.removeAttribute("aria-hidden");
        overlay.classList.toggle("closed");
    });

    if(clientWidth <= 768) {
        let acc = document.getElementsByClassName("accordion");
        let i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                    panel.removeAttribute("aria-expanded");
                } else {
                    panel.style.display = "block";
                    panel.setAttribute("aria-expanded", "true");
                }
            });
        }

    }
}

/*TODO: Add ESC navigation!*/