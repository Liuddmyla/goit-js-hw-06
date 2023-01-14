// const itemEl = document.querySelectorAll('.item');
// console.log('Number of categories:', itemEl.length);

// for (let i = 0; i < itemEl.length; i += 1){

//     const titleEl = document.querySelectorAll('h2');

//     console.log('Category:', titleEl[i].textContent);
//     console.log('Elements:', itemEl[i].querySelectorAll('li').length);
// }



const itemEl = document.querySelectorAll('.item');


console.log('Number of categories:', itemEl.length);

itemEl.forEach(function (element) {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
});



