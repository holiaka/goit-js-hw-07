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
  if (evt.target.className !== "gallery__image") {
    return;
  }
  controlModalImage(evt.target.dataset.source);
}

let statusGalleryImage;

function controlModalImage(link) {
  statusGalleryImage = basicLightbox.create(
    `
    <img src="${link}" width="800" height="600">
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", onlistenerKeyboard);
      },
      onClose: () => {
        document.removeEventListener("keydown", onlistenerKeyboard);
      },
    }
  );

  statusGalleryImage.show();
}

function onlistenerKeyboard(evt) {
  if (evt.code === "Escape") {
    return statusGalleryImage.close();
  }
}
