const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');



inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
   
    spanEl.textContent.trim() = event.currentTarget.value || "Anonymous";    
};



// додала trim() :)