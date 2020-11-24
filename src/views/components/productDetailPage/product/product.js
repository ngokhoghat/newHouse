import Swiper from "swiper";
import * as Zoom from "jquery-zoom";

const product = {
  init: () => {
    var galleryThumbs = new Swiper(".product-detail .gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: false,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(".product-detail .gallery-top", {
      spaceBetween: 10,
      loop: false,
      allowTouchMove: false,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    $(document).ready(function () {
      $(".product-detail .gallery-top .swiper-slide img")
        .wrap('<span style="display:inline-block"></span>')
        .css("display", "block")
        .parent()
        .zoom();
    });
  },
};

export default product;
