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


// const ulGalleryEl = document.querySelector('.gallery');

// const creatGallery = images.map((image) => `<li><img src = ${image.url}, alt = "${image.alt}", width = 400 ></li>`).join('');
 
// ulGalleryEl.insertAdjacentHTML("beforeend", creatGallery);



// const itemGalleryEl = ulGalleryEl.children;

// for (const elem of itemGalleryEl) {
//   elem.style.listStyle = "none";
//   elem.style.margin = "10px"; 
//   elem.style.display = "flex"; 
//   elem.style.outline = "5px solid #FFD700"; 
//   elem.style.maxWidth = "400px"; 
// }


const ulGalleryEl = document.querySelector('.gallery');

const creatGallery = images.map(({ url, alt }) => {
  
  return `<li><img class='gallery__item' src='${url}' alt='${alt}' width = 300 height = 200 ></li>`;
  
}).join('');
 
ulGalleryEl.insertAdjacentHTML("beforeend", creatGallery);



ulGalleryEl.style.listStyle = "none";
ulGalleryEl.style.display = "flex"; 
ulGalleryEl.style.gap = "10px"; 
document.body.style.backgroundColor = "rgba(0,255,0,0.3)";


