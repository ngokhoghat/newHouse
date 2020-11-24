// import './assets/styles/_app.scss';
import Global from "./views/components/global/global";
import Header from "./views/components/header/header";
import ProductSwiper from "./views/components/globalComponent/productList/product-list";
import OurServiceSwiper from "./views/components/globalComponent/ourService/our-service";
import customerService from "./views/components/homePage/customer/customer";
import brandService from "./views/components/homePage/brand/brand";
import BannerSwiper from "./views/components/homePage/banner/banner";

import Product from "./views/components/productDetailPage/product/product";

import AboutPage from "./views/components/aboutPage/about-page";

import productSection from "./views/components/productPage/productSection/product-section";

require("normalize.css");

$(() => {
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

  AboutPage.init();

  Product.init();
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
