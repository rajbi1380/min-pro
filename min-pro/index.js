let co = document.querySelector(".boxs");
let nv = document.querySelector(".nv");
let h1 = document.querySelector("h1");
co.addEventListener("click", () => {
  co.classList.toggle("change");
  if (nv.style.display == "block") {
    nv.style.display = "none";
  } else {
    h1.style.display = "none";
    nv.style.display = "block";
  }
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
