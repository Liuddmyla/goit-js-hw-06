function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onChangeColor);

function onChangeColor(event) {

  bodyEl.style.backgroundColor = getRandomHexColor();

  spanEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  
}
