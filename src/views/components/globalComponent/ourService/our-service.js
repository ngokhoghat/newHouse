import Swiper from "swiper/bundle";

const ourService = {
  init: () => {
    new Swiper(".our-service-container", {
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
        nextEl: ".our-service-swiper-button-next",
        prevEl: ".our-service-swiper-button-prev",
      },
    });
  },
};

export default ourService;
