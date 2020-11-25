const productDetail = {
  init: () => {
    const tabBtnList = document.querySelectorAll(
      ".product-detail-infomation__tab-btn .tab-btn"
    );

    const tabList = document.querySelectorAll(
      ".product-detail-infomation__tab-content .tab"
    );
    console.log(tabList);
    tabBtnList.forEach((button, buttonIdx) => {
      button.addEventListener("click", (e) => {
        const tabActiveId = buttonIdx;

        tabBtnList.forEach((tab, tabIdx) => {
          if (tabIdx === buttonIdx) {
            tab.classList.add("active");
          } else {
            tab.classList.remove("active");
          }
        });
        
        tabList.forEach((tab, tabIdx) => {
          if (tabActiveId === tabIdx) {
            tab.classList.add("tab-active");
          } else {
            tab.classList.remove("tab-active");
          }
        });
      });
    });
  },
};

export default productDetail;
