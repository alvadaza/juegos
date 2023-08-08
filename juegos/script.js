const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");

hamburger.onclick = function() {
    navbar.classList.toggle("active");
}
