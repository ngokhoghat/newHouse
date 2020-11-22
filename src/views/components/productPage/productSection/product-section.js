const GRID_VIEW = "grid-view";
const DETAIL_VIEW = "detail-view";

const productSection = {
  init: () => {
    productSection.handleChangeViewProduct();
  },
  handleChangeViewProduct: () => {
    const viewButtons = document.querySelectorAll(".filter-group-icon__icon");
    const productGridItem = document.querySelectorAll(
      ".product-item-grid-container"
    );
    const productDetailItem = document.querySelectorAll(
      ".product-item-detail-container"
    );
    viewButtons.forEach((item) => {
      item.addEventListener("click", async function () {
        let itemId = item.getAttribute("id");
        await viewButtons.forEach((button) => {
          button.classList.remove("active");
        });
        await item.classList.add("active");
        if (itemId === GRID_VIEW) {
          await productGridItem.forEach((product) => {
            product.classList.add("product-active");
          });
          await productDetailItem.forEach((product) => {
            product.classList.remove("col-12");
            product.classList.remove("product-active");
          });
        } else {
          await productGridItem.forEach((product) => {
            product.classList.remove("product-active");
          });
          await productDetailItem.forEach((product) => {
            product.classList.add("col-12");
            product.classList.add("product-active");
          });
        }
      });
    });
  },
};

export default productSection;
