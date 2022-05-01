if (!localStorage.getItem("cartProductsArr")) {
  localStorage.setItem("cartProductsArr", "[]");
}

const wrapper = document.querySelector(".purchased-products");
const layer = document.querySelector(".layer");
const totalPriceEl = document.querySelector(".total-price span");
const parsed = JSON.parse(localStorage.getItem("cartProductsArr"));

displayProducts();
checkAndSet();

//DYNAMIC CHANGE OF THE COPYRIGHT YEAR IN THE FOOTER
document.querySelector(".year").textContent = new Date().getFullYear();

//MORE DETAILS IN THE EVENT LISTENER
document.querySelector("body").addEventListener("click", (e) => {
  const clickedElement = e.target;

  //FINISH ORDER OR CLEAR CART
  if (
    ["clear-purchase", "finish-purchase"].some((el) =>
      clickedElement.classList.contains(el)
    )
  ) {
    if (
      clickedElement.classList.contains("finish-purchase") &&
      parsed.length > 0
    ) {
      layer.style.opacity = 1;
      setTimeout(() => {
        layer.style.opacity = 0;
      }, 2000);
    }
    parsed.splice(0, parsed.length);
    displayProducts();
    checkAndSet();
  }

  //QUANTITY CHANGING
  if (
    ["fa-plus", "fa-minus", "fa-trash-can"].some((el) =>
      clickedElement.classList.contains(el)
    )
  ) {
    const currentObj = parsed.find(
      (el) => el.id == clickedElement.parentElement.dataset.id
    );
    if (clickedElement.classList.contains("fa-plus")) currentObj.quantity++;
    if (clickedElement.classList.contains("fa-minus")) {
      currentObj.quantity--;
      if (currentObj.quantity < 1) currentObj.quantity = 1;
    }
    if (clickedElement.classList.contains("fa-trash-can")) {
      parsed.splice(parsed.indexOf(currentObj), 1);
      clickedElement.parentElement.remove();
    }
    clickedElement.parentElement.querySelector(".quantity-count").textContent =
      currentObj?.quantity;
    checkAndSet();
  }
});

function checkAndSet() {
  localStorage.setItem("cartProductsArr", JSON.stringify(parsed));
  checkEmptyCart();
  calcTotalPrice();
}

function checkEmptyCart() {
  if (parsed.length === 0) {
    wrapper.innerHTML = `<p class="message">Your cart is empty! :(</p>`;
  }
}

function calcTotalPrice() {
  totalPriceEl.textContent =
    Math.round(
      parsed.reduce((a, b) => a + b.quantity * b.currentPrice, 0) * 100
    ) / 100;
}

function displayProducts() {
  wrapper.innerHTML = "";
  parsed.forEach((el) => {
    const html = `
      <div class="purchased-product" data-id="${el.id}">
        <img src="${el.imgSrc}" alt="" />
        <p>${el.name}</p>
        <p>$${el.currentPrice}</p>
        <p>${el.size}</p>
        <p class="quantity-count">${el.quantity}</p>
        <i class="fa-solid fa-minus"></i>
        <i class="fa-solid fa-plus"></i>
        <i class="fa-solid fa-trash-can"></i>
      </div>
    `;
    wrapper.insertAdjacentHTML("beforeend", html);
  });
}
