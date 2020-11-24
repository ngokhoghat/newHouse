const aboutPage = {
  init: () => {
    aboutPage.handelScroll();
  },
  handelScroll: () => {
    let last_known_scroll_position = 0;
    let ticking = false;
    window.addEventListener("scroll", function (e) {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          let Header = document.querySelector(".about-page__header-container");
          if (last_known_scroll_position > 70) {
            Header.classList.add("header-fixed");
          } else {
            Header.classList.remove("header-fixed");
          }
          ticking = false;
        });

        ticking = true;
      }
    });
  },
};

export default aboutPage;
