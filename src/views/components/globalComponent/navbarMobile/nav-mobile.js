const navMobile = {
  init: () => {
    navMobile.toggleNavBar();
  },
  toggleNavBar: () => {
    const navMobile = document.querySelector("#nav-mobile");
    const navMobileBtn = document.querySelector("#nav-menu-btn");
    const navMobileBackDrop = document.querySelector("#nav-back-drop");
    const body = document.body;

    navMobileBtn.addEventListener("click", () => {
      navMobile.classList.add("nav-mobile-active");
      body.style.overflow = "hidden";
    });

    navMobileBackDrop.addEventListener("click", () => {
      navMobile.classList.remove("nav-mobile-active");
      body.style.overflow = "auto";
    });
  },
};

export default navMobile;
