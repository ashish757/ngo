  // search-box open close js code
  let navbar = document.querySelector(".navbar");
 
  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .navbar-open");
  let menuCloseBtn = document.querySelector(".nav-links .navbar-close");

  menuOpenBtn.onclick = function() {
  navLinks.classList.add("mobActive");
  }
  menuCloseBtn.onclick = function() {
    navLinks.classList.remove("mobActive");
  
  }
  
  
  // sidebar submenu open close js code
  // let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  // htmlcssArrow.onclick = function() {
  //  navLinks.classList.toggle("show1");
  // }
  // let moreArrow = document.querySelector(".more-arrow");
  // moreArrow.onclick = function() {
  //  navLinks.classList.toggle("show2");
  // }
  // let jsArrow = document.querySelector(".js-arrow");
  // jsArrow.onclick = function() {
  //  navLinks.classList.toggle("show3");
  // }
  