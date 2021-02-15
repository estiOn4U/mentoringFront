function validateForm() {
    let fieldset = this.previousElementSibling;
    let checkbox = fieldset.querySelector('#politica-contacto')
    if (!checkbox.checked) {
        checkbox.parentElement.style.backgroundColor = '#ffcccc';
        checkbox.focus();
        return false;
    }
    return true;
}

export {validateForm};