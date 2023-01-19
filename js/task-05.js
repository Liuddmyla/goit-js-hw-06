const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');



inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
   
    spanEl.textContent = event.currentTarget.value.trim() || "Anonymous";    
};



// додала trim() :). Вибачаюсь не туди додола trim()!