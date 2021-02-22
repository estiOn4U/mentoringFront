const focusableSelectors = 'input:not([disabled]), button:not([disabled]), a[href]:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]';

function trapFocus(dialog) {
    /*Approach 1: get elements from inside modal, add event listener to the last one
    * instead of applying tabindex to the rest of the elements of the DOM*/

    let modalFocusables = dialog.querySelectorAll(focusableSelectors);
    let firstFocusable = modalFocusables[0];
    let lastFocusable = modalFocusables[modalFocusables.length - 1];

    dialog.addEventListener("keydown", function (e) {
        let isTabPressed = (e.key === 'Tab' || e.keyCode === 9);

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
}


export {trapFocus};