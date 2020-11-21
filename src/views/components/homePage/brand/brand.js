import Swiper from "swiper/bundle";

const brand = {
  init: () => {
    new Swiper(".brand-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        993: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
      // If we need pagination
      pagination: {
        el: ".brand-swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".brand-swiper-button-next",
        prevEl: ".brand-swiper-button-prev",
      },
    });
  },
};

export default brand;
