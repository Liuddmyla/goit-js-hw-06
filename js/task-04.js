let counterValue = 0;

const spanEl = document.querySelector('#value');
const btnEl = document.querySelectorAll('button');


btnEl[0].addEventListener("click", () => { 
    
    counterValue -= 1;
    spanEl.textContent = counterValue;
    
});

btnEl[1].addEventListener("click", () => {
   
    counterValue += 1;
    spanEl.textContent = counterValue;
    
});




btnEl[0].style.backgroundColor = 'red';
btnEl[1].style.backgroundColor = 'green';
spanEl.style.fontWeight = '900';
