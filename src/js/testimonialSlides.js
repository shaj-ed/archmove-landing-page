const testimonialContent = document.querySelector(".testimonial__content");
const testimonials = document.querySelectorAll(".testimonial__item");
const leftBtn = document.querySelector(".testimonial__button--left");
const rightBtn = document.querySelector(".testimonial__button--right");

let positionIndex = 0;
let testimonialLength = testimonials.length;

rightBtn.addEventListener("click", () => {
  moveTestimonial("right");
});

leftBtn.addEventListener("click", () => {
  moveTestimonial("left");
});

function moveTestimonial(type) {
  testimonials[positionIndex].classList.remove("opacity");
  if (type === "right") {
    positionIndex === testimonialLength - 1
      ? (positionIndex = 0)
      : positionIndex++;
    testimonials[positionIndex].classList.add("opacity");
  } else {
    positionIndex === 0
      ? (positionIndex = testimonialLength - 1)
      : positionIndex--;
    testimonials[positionIndex].classList.add("opacity");
  }

  testimonialContent.style.transform = `translateX(${-100 * positionIndex}%)`;
}
