function checkFooterCollapse() {
    let clientWidth = document.documentElement.clientWidth;
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        if (clientWidth <= 768) {
            acc[i].addEventListener("click", toggleCollapse);
            acc[i].nextElementSibling.style.display = "none";
        } else {
            acc[i].removeEventListener("click", toggleCollapse);
            let panel = acc[i].nextElementSibling;
            panel.style.display = "block";
        }
    }
}

function toggleCollapse() {
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

export { checkFooterCollapse };