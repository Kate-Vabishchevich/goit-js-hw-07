import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const createGallery = galleryItems.map(cardEl).join("");

function cardEl({ preview, original, description }) {
    return `
 <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
   </li>
  `;
};
console.log(createGallery);

galleryEl.insertAdjacentHTML('beforeend', createGallery);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});


