const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

spanEl.style.fontSize = `${Number(inputEl.value)}px`;

inputEl.addEventListener('input', onInputFontSize);

function onInputFontSize(event) {
    
    spanEl.style.fontSize = `${Number(event.currentTarget.value)}px`;   
};


// додала 4 рядок :)

