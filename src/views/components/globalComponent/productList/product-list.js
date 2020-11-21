import Swiper from "swiper/bundle";

const productList = {
  init: () => {
    new Swiper(".product-list-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        993: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".product-list-swiper-button-next",
        prevEl: ".product-list-swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};

export default productList;
