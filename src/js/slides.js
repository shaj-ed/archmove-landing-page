const slideContainer = document.querySelector(".gallery__container");
const slideItem = document.querySelector(".gallery__item");
const prevButton = document.querySelector(".gallery__button--left");
const nextButton = document.querySelector(".gallery__button--right");

nextButton.addEventListener("click", () => {
  slideContainer.scrollLeft += slideItem.clientWidth;
});

prevButton.addEventListener("click", () => {
  slideContainer.scrollLeft -= slideItem.clientWidth;
});
