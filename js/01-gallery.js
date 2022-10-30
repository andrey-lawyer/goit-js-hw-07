import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galaryEl = document.querySelector(".gallery");
const arrayImages = galleryItems
  .map(
    (itemImag) => `<div class="gallery__item">
    <a class="gallery__link" href="${itemImag.original}">
    <img
      class="gallery__image"
      src="${itemImag.preview}"
      data-source="${itemImag.original}"
      alt="${itemImag.description}"
    />
    </a>
   </div>`
  )
  .join("");
galaryEl.insertAdjacentHTML("afterbegin", arrayImages);
// console.log(arrayImages);

const galleryImageEl = document.querySelectorAll(".gallery__image");
// Вариант через IMG !!!!------------------------!!!!
// galleryImageEl.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     event.stopPropagation();
//     event.preventDefault();
//   });
// });
// !!!!! ------------------------!!!!

// Вариант через блоk DIV c картинками !!!!------------------------!!!!
galaryEl.addEventListener("click", onClick);
function onClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.stopPropagation();
  event.preventDefault();

  const curentImg = event.target;
  // const tempImg = curentImg.src;
  // curentImg.src = curentImg.dataset.source;
  const instance = basicLightbox.create(
    `<img src= "${curentImg.dataset.source}">`
  );
  // const instance = basicLightbox.create(`${curentImg}`);
  instance.show();

  // закрытие модального окна клавишей Escape !!!!!!!!--------------!!!!!!!!!!!!!
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
  // !!!!!! --------------!!!!!!!!!!

  // curentImg.src = tempImg;
}
