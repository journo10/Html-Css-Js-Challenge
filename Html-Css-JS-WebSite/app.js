//search

const btn = document.querySelector(".search-btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

//responsive navbar menu
const hamburgerMenu = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
