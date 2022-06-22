let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .navbar-open");
let menuCloseBtn = document.querySelector(".nav-links .navbar-close");

menuOpenBtn.onclick = function () {
  navLinks.classList.add("mobActive");
};
menuCloseBtn.onclick = function () {
  navLinks.classList.remove("mobActive");
};

const hasSubMenus = document.querySelectorAll(".has-submenu");

Array.from(hasSubMenus).forEach((li) => {
  li.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.target.closest("li"));
    e.target.closest("li").classList.toggle("submenu-active");
  });

  li.addEventListener("mouseleave", (e) => {
    e.target.closest("li").classList.remove("submenu-active");
  });
});

const parallax = document.querySelector(".parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY =
    (offset - parallax.offsetTop) * 0.5 + "px";
  // console.log("Parallax : " + parallax.offsetTop + " / Window: " + offset);
  // console.log("real : " + (offset - parallax.offsetTop) + " Reel: " + (offset - parallax.offsetTop) * 0.5);
});
