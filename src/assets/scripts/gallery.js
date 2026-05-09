import { BalancedMasonryGrid } from "@masonry-grid/vanilla";
import Modal from 'bootstrap/js/dist/modal';


// { url, width, height } — BalancedMasonryGrid necesita el aspect-ratio
// de cada item via variables CSS --width y --height en el div.frame
const images = [
  {
    url: new URL("../images/galeria/img1.jpg", import.meta.url),
    width: 640,
    height: 427,
  },
  {
    url: new URL("../images/galeria/img2.jpg", import.meta.url),
    width: 640,
    height: 516,
  },
  {
    url: new URL("../images/galeria/img3.jpg", import.meta.url),
    width: 640,
    height: 360,
  },
  {
    url: new URL("../images/galeria/img4.jpg", import.meta.url),
    width: 640,
    height: 479,
  },
  {
    url: new URL("../images/galeria/img5.jpg", import.meta.url),
    width: 454,
    height: 640,
  },
  {
    url: new URL("../images/galeria/img6.jpg", import.meta.url),
    width: 640,
    height: 428,
  },
  {
    url: new URL("../images/galeria/img7.jpg", import.meta.url),
    width: 640,
    height: 480,
  },
  {
    url: new URL("../images/galeria/img8.jpg", import.meta.url),
    width: 640,
    height: 427,
  },
  {
    url: new URL("../images/galeria/img9.jpg", import.meta.url),
    width: 427,
    height: 640,
  },
  {
    url: new URL("../images/galeria/img10.jpg", import.meta.url),
    width: 640,
    height: 427,
  },
  {
    url: new URL("../images/galeria/img11.jpg", import.meta.url),
    width: 640,
    height: 426,
  },
  {
    url: new URL("../images/galeria/img12.jpg", import.meta.url),
    width: 427,
    height: 640,
  },
  {
    url: new URL("../images/galeria/img13.jpg", import.meta.url),
    width: 640,
    height: 426,
  },
  {
    url: new URL("../images/galeria/img14.jpg", import.meta.url),
    width: 640,
    height: 480,
  },
  {
    url: new URL("../images/galeria/img15.jpg", import.meta.url),
    width: 640,
    height: 480,
  },
  {
    url: new URL("../images/galeria/img16.jpg", import.meta.url),
    width: 427,
    height: 640,
  },
  {
    url: new URL("../images/galeria/img17.jpg", import.meta.url),
    width: 640,
    height: 427,
  },
  {
    url: new URL("../images/galeria/img18.jpg", import.meta.url),
    width: 640,
    height: 359,
  },
  {
    url: new URL("../images/galeria/img19.jpg", import.meta.url),
    width: 640,
    height: 640,
  },
  {
    url: new URL("../images/galeria/img20.jpg", import.meta.url),
    width: 640,
    height: 427,
  },
];

const imageList = document.querySelector(".c-gallery__container");
const modalElement = document.getElementById("gallery-modal");
const modal = new Modal(modalElement);

function openModal(img) {
  modalElement.querySelector("img").src = img;
  modal.show();
}

function addImage({ url, width, height }, index) {
  const frame = document.createElement("div");
  frame.classList.add("c-gallery__frame");
  frame.style.setProperty("--width", width);
  frame.style.setProperty("--height", height);

  const imageElement = document.createElement("img");
  imageElement.src = url.href;
  imageElement.alt = `Gallery ${index + 1}`;

  const positionElement = document.createElement("div");
  positionElement.classList.add("c-gallery__frame--position");
  positionElement.append(index + 1);

  frame.append(positionElement, imageElement);
  imageList.append(frame);

  imageElement.addEventListener("click", () => openModal(url.href));
}

images.forEach((image, index) => addImage(image, index));

const balancedMasonryGrid = new BalancedMasonryGrid(imageList);
