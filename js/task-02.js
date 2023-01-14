const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const listEl = document.querySelector('#ingredients');

// for (const ingredient of ingredients) {

//       const itemEl = document.createElement('li');
//       itemEl.textContent = ingredient; 
//       itemEl.classList.add('item');
//       listEl.append(itemEl);
// }

// console.log(listEl);

const listEl = document.querySelector('#ingredients');
  
const newArr = ingredients.map(element => {
  const itemEl = document.createElement('li');  
  itemEl.classList.add('item');
  itemEl.textContent = element; 
  return itemEl;
});

listEl.append(...newArr); 

console.log(listEl);
