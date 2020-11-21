import Swiper from "swiper/bundle";

const customer = {
  init: () => {
    new Swiper(".customer-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        993: {
          slidesPerView: 3,
        },
      },
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
