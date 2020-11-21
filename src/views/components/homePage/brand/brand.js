import Swiper from "swiper/bundle";

const brand = {
  init: () => {
    new Swiper(".brand-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
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
