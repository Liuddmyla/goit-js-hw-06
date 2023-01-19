function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divColections = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  const elementsToAdd = [];

  for (let i = 1; i <= amount; i+=1) {
    const newDiv = document.createElement('div');

    newDiv.style.height = `${20 + 10 * i}px`;
    newDiv.style.width = `${20 + 10 * i}px`;
    newDiv.style.background = getRandomHexColor();
    newDiv.style.border = '2px solid black';

    elementsToAdd.push(newDiv);
 }
  return elementsToAdd;
}

btnCreate.addEventListener('click', onInputClick);

function onInputClick() {
  let newElementsToAdd = createBoxes(inputEl.value);
  divColections.append(...newElementsToAdd);
}

function destroyBoxes() {
  divColections.innerHTML = '';  
}

btnDestroy.addEventListener('click', offInputClick);

function offInputClick() {
  destroyBoxes.call();
  inputEl.value = '';
}



// додала 41 рядок, при натисненні на кнопку Destroy інпут очищається.