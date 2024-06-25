let nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    nav.classList.add("dark");
  } else {
    nav.classList.remove("dark");
  }
});
