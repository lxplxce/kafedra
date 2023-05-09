import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".listing__swiper", {
  updateOnWindowResize: true,
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 0,
  speed: 500,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
    disabledClass: "arrow--disabled",
  },
});
