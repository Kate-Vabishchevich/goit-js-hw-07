import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGallery = galleryItems.map(cardEl).join("");
function cardEl({ preview, original, description }) {
  return `
    <div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
            />
      </a>
 </div>`;
}
console.log(createGallery);

galleryEl.insertAdjacentHTML('beforeend', createGallery);

galleryEl.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `
      <img
        class="modal__image"
        src="${e.target.dataset.source}"
      />
    `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );
  
  function onEscPress(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}