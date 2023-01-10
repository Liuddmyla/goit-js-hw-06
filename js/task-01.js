const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);


const categoryElements = itemEl.forEach((elem) => {
    console.log('Category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.lastElementChild.querySelectorAll('li').length);
});


// for (let i = 0; i < itemEl.length; i += 1){

//     const titleEl = document.querySelectorAll('h2');

//     console.log('Category:', titleEl[i].textContent);
//     console.log('Elements:', itemEl[i].querySelectorAll('li').length);    
// }
