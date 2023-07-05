// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector(".gallery");

const imagesCreate = galleryItems.map(({ preview, original, description }) =>
      `<li class='gallery__item'>
      <a class="gallery__link" href="${original}">
      <img src="${preview}" data-source="${original}" alt="${description}" width="300" height="200" class="gallery__image">
      </a>
      </li>`
  ).join("");

imagesList.insertAdjacentHTML("beforeend", imagesCreate);

const gallery = new SimpleLightbox('.gallery a', {
    sourceAttr: 'href',
    captions: true,
    captionsData: 'alt',
    captionDelay: 250
  });