import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

galleryListEl.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, description, original }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
        `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
