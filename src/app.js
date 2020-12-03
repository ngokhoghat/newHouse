import Global from "./views/components/global/global";
import Header from "./views/components/header/header";
import NavMobile from "./views/components/globalComponent/navbarMobile/nav-mobile";

import ProductSwiper from "./views/components/globalComponent/productList/product-list";
import OurServiceSwiper from "./views/components/globalComponent/ourService/our-service";
import customerService from "./views/components/homePage/customer/customer";
import brandService from "./views/components/homePage/brand/brand";
import BannerSwiper from "./views/components/homePage/banner/banner";

import Product from "./views/components/productDetailPage/product/product";
import ProductDetail from "./views/components/productDetailPage/productDetail/product-detail";

import productSection from "./views/components/productPage/productSection/product-section";

require("normalize.css");

$(() => {
  NavMobile.init();
  // Code here
  Header.init();
  // Banner Swiper
  BannerSwiper.init();
  ProductSwiper.init();
  OurServiceSwiper.init();
  OurServiceSwiper.init();
  customerService.init();
  brandService.init();

  productSection.init();

  Product.init();
  ProductDetail.init();
  
  function initMap() {
    const uluru = { lat: 21.0277644, lng: 105.8341598 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("google-map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  initMap()
});

$(document).ready(() => {
  Global.lazyLoad();
});

$(window).on("resize", () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {};
