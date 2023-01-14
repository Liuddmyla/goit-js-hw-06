// let counterValue = 0;

// const spanEl = document.querySelector('#value');
// const btnEl = document.querySelectorAll('button');


// btnEl[0].addEventListener("click", () => {
    
//     counterValue -= 1;
//     spanEl.textContent = counterValue;
    
// });

// btnEl[1].addEventListener("click", () => {
   
//     counterValue += 1;
//     spanEl.textContent = counterValue;
    
// });

// btnEl[0].style.backgroundColor = 'red';
// btnEl[1].style.backgroundColor = 'green';
// spanEl.style.fontWeight = '900';

let counterValue = 0;

const divEl = document.querySelector('#counter');
const spanEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", () => { 
    
    counterValue -= 1;
    spanEl.textContent = counterValue;
    
});

incrementBtn.addEventListener("click", () => {
   
    counterValue += 1;
    spanEl.textContent = counterValue;
    
});



decrementBtn.style.backgroundColor = 'red';
decrementBtn.style.fontSize = '50px';
incrementBtn.style.backgroundColor = 'green';
incrementBtn.style.fontSize = '50px';
spanEl.style.fontWeight = '900';
divEl.style.fontSize = '50px';