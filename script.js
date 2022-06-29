let navLinks = document.querySelector(".nav-links");
let navAnchors = navLinks.querySelectorAll(".links li a");
let menuOpenBtn = document.querySelector(".navbar .navbar-open");
let menuCloseBtn = document.querySelector(".nav-links .navbar-close");

menuOpenBtn.addEventListener("click", () => {
  navLinks.classList.add("mobActive");
});

const closeNav = () => navLinks.classList.remove("mobActive");

menuCloseBtn.addEventListener("click", closeNav);
navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", closeNav);
})



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
const cards = Array.from(document.querySelectorAll(".associates .cards .card"));

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY =
    (offset - parallax.offsetTop) * 0.5 + "px";
  // console.log("Parallax : " + parallax.offsetTop + " / Window: " + offset);
  // console.log("real : " + (offset - parallax.offsetTop) + " Reel: " + (offset - parallax.offsetTop) * 0.5);

});

if (window.innerWidth < 500) {

  window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
    cards.forEach(card => {
      // console.log(card.offsetTop -500, offset);
      if (card.offsetTop - 400 < offset) {
        card.classList.add("active");
      }
    })
    
  });
}



