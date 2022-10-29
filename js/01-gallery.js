import { galleryItems } from "./gallery-items.js";
// Change code below this line

//**************************************************** */

// Create gallery of images/photos

const imageBoxRef = document.querySelector(".gallery");

const imageElements = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/></a></div>`
);

imageBoxRef.insertAdjacentHTML("beforeend", imageElements.join(""));

// Add event listners and functions

imageBoxRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  controlModalImage(evt.target.dataset.source);
}

function controlModalImage(link) {
  const statusGalleryImage = basicLightbox.create(`
    <img src="${link}" width="800" height="600">
    `);
  statusGalleryImage.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {      
      return statusGalleryImage.close();
    }
  });
}
