function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const divColections = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const buttonsEl = document.querySelector('button');


inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  
  const numInput = Number(event.currentTarget.value);    
    
  buttonsEl.addEventListener('click', createBoxes);

  function createBoxes(amount) {
                   
    for (let i = 1; i <= numInput; i += 1) {
      const newDiv = document.createElement('div');
    
      newDiv.style.width = `${20 + 10 * i}px`;
      newDiv.style.height = `${20 + 10 * i}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.border = '2px solid black';
      divColections.append(newDiv);    
    }
   
  }

  buttonsEl.nextElementSibling.addEventListener('click', destroyBoxes);

  function destroyBoxes(amount) {
   
    for (let i = 1; i <= numInput; i += 1){
      divColections.firstElementChild.remove();      
    }
    
  }
  
}
