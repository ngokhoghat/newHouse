import Swiper from "swiper/bundle";

const customer = {
  init: () => {
    new Swiper(".customer-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      // If we need pagination
      pagination: {
        el: ".customer-swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".customer-swiper-button-next",
        prevEl: ".customer-swiper-button-prev",
      },
    });
  },
};

export default customer;
