const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery');

const creatGallery = images.forEach((element) => {
  const itemEl = document.createElement('li');
  const imgEl = document.createElement('img');
  itemEl.append(imgEl); 
  imgEl.setAttribute('src', element.url);
  imgEl.setAttribute('alt', element.alt);
  imgEl.setAttribute('width', 250);  
  itemEl.classList.add('gallery__item');
  

  return galleryEl.append(itemEl); 
  
});

console.log(galleryEl);