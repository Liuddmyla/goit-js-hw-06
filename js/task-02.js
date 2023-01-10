const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

const creatList = ingredients.forEach((element) => {
      const itemEl = document.createElement('li');
      itemEl.textContent = element; 
      itemEl.classList.add('item');   
  
      return listEl.append(itemEl);
});

console.log(listEl);
