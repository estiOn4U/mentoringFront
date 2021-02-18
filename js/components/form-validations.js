function validateForm() {
    let fieldset = this.previousElementSibling;
    let checkbox = fieldset.querySelector('#politica-contacto')
    if (!checkbox.checked) {
        checkbox.parentElement.classList.add('onError');
        checkbox.focus();
        return false;
    }
    return true;
}

export {validateForm};