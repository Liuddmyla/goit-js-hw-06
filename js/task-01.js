const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

for (let i = 0; i < itemEl.length; i += 1){

    const titleEl = document.querySelectorAll('h2');

    console.log('Category:', titleEl[i].textContent);
    console.log('Elements:', itemEl[i].querySelectorAll('li').length);    
}



