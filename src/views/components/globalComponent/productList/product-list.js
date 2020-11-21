import Swiper from "swiper/bundle";

const productList = {
  init: () => {
    new Swiper(".product-list-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: true,
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
