function validateForm() {
    //let parentForm = console.log(this.parentNode);
    let fieldset = this.previousElementSibling;
    let checkbox = fieldset.querySelector('#politica-contacto')
    if (!checkbox.checked) {
        checkbox.parentElement.style.backgroundColor = '#ffcccc';
        checkbox.focus();
        checkbox.parentElement.innerHTML += "<div>Por favor, lee y acepta la Política de Privacidad y la Cláusula de Contacto antes de enviar el formulario</div>";
    }
}

export {validateForm};