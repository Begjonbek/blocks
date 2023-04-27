const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

let btn1 = document.querySelectorAll(".btn-js-down");
let main1 = document.querySelectorAll(".main-js-down");

btn1.forEach((item, index) => {
  item.addEventListener("click", function () {
    main1[index].classList.toggle("hidden");
    item.classList.toggle("rotate-180");
  });
});


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});