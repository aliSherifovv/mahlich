if (!localStorage.getItem("cartProductsArr")) {
  localStorage.setItem("cartProductsArr", "[]");
}

const currentProductObj = JSON.parse(localStorage.getItem("viewedProduct"));

//DYNAMIC CHANGE OF THE COPYRIGHT YEAR IN THE FOOTER
document.querySelector(".year").textContent = new Date().getFullYear();

//DISPLAY CLICKED PRODUCT
document.querySelector(".viewed-product").innerHTML = `
<img src="${currentProductObj.imgSrc}" alt="" />
<div class="viewed-product-info">
  <div class="viewed-product-description">
    <h1>${currentProductObj.name}</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard
    </p>
    <p class="viewed-product-price">$${currentProductObj.currentPrice}</p>
    <p class="id">ID: ${currentProductObj.id}</p>
  </div>
  <div class="viewed-product-purchase">
    <div class="viewed-product-sizes">
      <p>Sizes</p>
      <p>${currentProductObj.size}</p>
    </div>
    <div class="viewed-product-quantity">
      <p>Quantity</p>
      <p class="quantity">
        <i class="fa-solid fa-minus"></i>
        <span class="quantity-count">${currentProductObj.quantity}</span
        ><i class="fa-solid fa-plus"></i>
      </p>
    </div>
    <button class="add-to-cart">Add to cart</button>
  </div>
</div>
<i class="fa-solid fa-arrow-left go-back"></i>
;`;

const quantityCount = document.querySelector(".quantity-count");

document.querySelector(".viewed-product").addEventListener("click", (e) => {
  const clickedEl = e.target;

  //GO BACK TO THE HOME PAGE
  if (clickedEl.classList.contains("go-back")) {
    window.location.href = "../pages/index.html";
  }
  //INCREASE QUANTITY
  if (clickedEl.classList.contains("fa-plus")) {
    currentProductObj.quantity++;
  }
  //DECREASE QUANTITY
  if (clickedEl.classList.contains("fa-minus")) {
    currentProductObj.quantity--;
    if (currentProductObj.quantity < 1) {
      currentProductObj.quantity = 1;
    }
  }
  //ADD TO CART
  if (clickedEl.classList.contains("add-to-cart")) {
    const parsed = JSON.parse(localStorage.getItem("cartProductsArr"));
    if (parsed.some((el) => el.id === currentProductObj.id)) {
      parsed.splice(
        parsed.findIndex((el) => el.id === currentProductObj.id),
        1
      );
    }
    parsed.push(currentProductObj);
    localStorage.setItem("cartProductsArr", JSON.stringify(parsed));
    window.location.href = "../pages/cart.html";
  }
  quantityCount.textContent = currentProductObj.quantity;
});
