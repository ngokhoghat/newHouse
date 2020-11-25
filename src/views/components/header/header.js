const Header = {
  init: () => {
    Header.handelScroll();
  },
  handelScroll: () => {
    let last_known_scroll_position = 0;
    let ticking = false;
    window.addEventListener("scroll", function (e) {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          let Header = document.querySelector(".header");
          if (last_known_scroll_position > 70 && Header) {
            Header.classList.add("header-sticky");
            Header.classList.add("header-fixed");
          } else {
            Header.classList.remove("header-sticky");
            Header.classList.remove("header-fixed");
          }
          ticking = false;
        });

        ticking = true;
      }
    });
  },
  toggleLanguageDropDownDesktop: () => {
    const languageBtn = document.querySelector("#dropdownLanguageBtn");
    const languageList = document.querySelector("#dropdownLanguageList");
    if (languageBtn && languageList) {
      languageBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        languageList.classList.toggle("open-language");
      });
      document.querySelector("body").addEventListener("click", () => {
        if (languageList.classList.contains("open-language"))
          languageList.classList.remove("open-language");
      });
    }
  },
  handleClickHamburgerOpenNav: () => {
    const hamburgerBtn = document.querySelector(
      ".navigation button.navigation__hamburger-btn"
    );
    const navMain = document.querySelector(".navigation nav");
    if (hamburgerBtn && navMain) {
      hamburgerBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        navMain.classList.add("nav__is-open");
        document.querySelector("body").classList.add("body__is__nav-open");
        document.querySelector("html").classList.add("body__is__nav-open");
      });
    }
  },
  handleClickCloseNav: () => {
    const closeNavs = document.querySelectorAll(
      ".navigation .navigation__close-button button, .navigation__layout"
    );
    const navMain = document.querySelector(".navigation nav");
    if (closeNavs && navMain) {
      [].forEach.call(closeNavs, (closeNav) => {
        closeNav.addEventListener("click", (evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          navMain.classList.remove("nav__is-open");
          document.querySelector("body").classList.remove("body__is__nav-open");
          document.querySelector("html").classList.remove("body__is__nav-open");
        });
      });
    }
  },
};
export default Header;
