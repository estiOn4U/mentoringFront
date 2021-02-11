
/*function manageCustomSelect() {
    let panel = this.nextElementSibling;
    let optionlist = document.getElementsByClassName("custom-select__option");

    if (!panel.classList.contains('f-hidden')) {
        panel.removeAttribute("aria-expanded");
        panel.classList.add('f-hidden');
        removeControls(panel);
        for (let i = 0; i < optionlist.length; i++) {
            optionlist[i].removeEventListener("click", function () {
                selectOption(this);
            });
            optionlist[i].removeEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    selectOption(this);
                }
            });
        }
    } else {
        panel.classList.remove('f-hidden');
        panel.setAttribute("aria-expanded", "true");
        addControls(panel);
        for (let i = 0; i < optionlist.length; i++) {
            optionlist[i].addEventListener("click", function () {
                selectOption(this);
            });
            optionlist[i].addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    this.click();
                }
            });
        }

    }
}

function addControls() {
    this.addEventListener("keydown", function (e) {
        if (e.keyCode === 38) {
            loopOptions(1);
        }
        if (e.keyCode === 40) {
            loopOptions(-1);
        }
    });
}

function loopOptions(n) {
    optIndex += n;
    let optionlist = document.getElementsByClassName("custom-select__option");

    if (optIndex > optionlist.length) {
        optIndex = 1;
        console.log(optionlist[(optionlist.length) - optIndex]);
    }
    if (optIndex < 1) {
        optIndex = optionlist.length;
        console.log(optionlist[(optionlist.length) - optIndex]);

    }
    console.log(optionlist[(optionlist.length) - optIndex]);

    for (let i = 0; i < optionlist.length; i += 1) {
        optionlist[i].style.color = "initial";
    }
    optionlist[(optionlist.length) - optIndex].style.color = "pink";

}

function removeControls() {
    this.removeEventListener;
}

function selectOption(option) {
    let btnText = document.querySelector('.fake-select-btn');
    let prevOption = option.parentNode.querySelector('.custom-select__option.selected');
    if (!option.classList.contains("selected")) {
        prevOption.classList.remove('selected');
        prevOption.removeAttribute("aria-selected");
        option.classList.add("selected");
        option.setAttribute("aria-selected", "true");
    }
    btnText.innerHTML = option.innerHTML;

}*/
