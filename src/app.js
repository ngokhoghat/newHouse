// import './assets/styles/_app.scss';
import Global from "./views/components/global/global";
import Header from "./views/components/header/header";
import BannerSwiper from "./views/components/global/banner";
import ProductSwiper from "./views/components/globalComponent/productList/product-list";
import OurServiceSwiper from "./views/components/globalComponent/ourService/our-service";
import customerService from "./views/components/homePage/customer/customer";
import brandService from "./views/components/homePage/brand/brand";

require("normalize.css");

$(() => {
  // Code here

  // Banner Swiper
  BannerSwiper.init();
  ProductSwiper.init();
  OurServiceSwiper.init();
  OurServiceSwiper.init();
  customerService.init();
  brandService.init();
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
