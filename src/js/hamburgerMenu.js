const hamburgerButton = document.querySelector(".hamburger");
const navigation = document.querySelector(".header__navigation");

hamburgerButton.addEventListener("click", (e) => {
  hamburgerButton.classList.toggle("menu-handle");
  navigation.classList.toggle("nav-handle");
});
