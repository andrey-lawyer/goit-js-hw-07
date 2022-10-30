import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log("\u03A9");
const galaryEl = document.querySelector(".gallery");
const arrayImages = galleryItems
  .map(
    (itemImag) =>
      `
  <a class="gallery__item" href="${itemImag.original}">
  <img class="gallery__image"
  src="${itemImag.preview}" 
  alt="${itemImag.description}"
  />
  </a>
  `
  )
  .join("");
galaryEl.insertAdjacentHTML("afterbegin", arrayImages);

const galleryItemEl = document.querySelector(".gallery__item");
galaryEl.addEventListener("click", onClick);
function onClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.stopPropagation();
  event.preventDefault();
  // console.log(event.target.alt);
  // console.log(event.target.getAttribute("alt"));

  //   console.log(event.target);
  var gallery = new SimpleLightbox(".gallery__item", {
    captionDelay: 250,
    captionsData: "alt",
    navText: ["\u261A", "\u261B"],
    showCounter: false,
    closeText: "\u2A37",
  });
}
