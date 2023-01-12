const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlurInput);

function onBlurInput(event) {

    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');

    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {

        inputEl.classList.add('valid');
               
    } else {
        inputEl.classList.add('invalid');        
    }    
};