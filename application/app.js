const allProducts = [
  {
    name: "Leather jacket",
    color: "red",
    price: 49.99,
    currentPrice: 29.99,
    date: "2022-3-12",
    size: "xl",
    imgSrc: "../images/img1.jpg",
    id: "0000",
    quantity: 1,
  },
  {
    name: "Blue jeans",
    color: "blue",
    price: 29.99,
    currentPrice: 29.99,
    date: "2022-3-12",
    size: "xl",
    imgSrc: "../images/img2.jpg",
    id: "0100",
    quantity: 1,
  },
  {
    name: "Black jeans",
    color: "black",
    price: 29.99,
    currentPrice: 29.99,
    date: "2022-3-12",
    size: "xl",
    imgSrc: "../images/img3.jpg",
    id: "0110",
    quantity: 1,
  },
  {
    name: "Light blue jeans",
    color: "blue",
    price: 29.99,
    currentPrice: 18.99,
    date: "2022-3-12",
    size: "l",
    imgSrc: "../images/img4.jpg",
    id: "0111",
    quantity: 1,
  },
  {
    name: "Leather jacket",
    color: "black",
    price: 49.99,
    currentPrice: 34.99,
    date: "2022-2-2",
    size: "l",
    imgSrc: "../images/img5.jpg",
    id: "1111",
    quantity: 1,
  },
  {
    name: "Nike sneakers",
    color: "black",
    price: 119.99,
    currentPrice: 69.99,
    date: "2022-2-2",
    size: "l",
    imgSrc: "../images/img6.jpg",
    id: "1112",
    quantity: 1,
  },
  {
    name: "Nike sneakers",
    color: "black",
    price: 129.99,
    currentPrice: 129.99,
    date: "2022-2-2",
    size: "l",
    imgSrc: "../images/img7.jpg",
    id: "1122",
    quantity: 1,
  },
  {
    name: "Nike sneakers",
    color: "black",
    price: 89.99,
    currentPrice: 74.99,
    date: "2022-2-2",
    size: "m",
    imgSrc: "../images/img8.jpg",
    id: "1222",
    quantity: 1,
  },
  {
    name: "Black shirt",
    color: "black",
    price: 19.99,
    currentPrice: 7.99,
    date: "2021-12-23",
    size: "m",
    imgSrc: "../images/img9.jpg",
    id: "2222",
    quantity: 1,
  },
  {
    name: "White shirt",
    color: "white",
    price: 19.99,
    currentPrice: 19.99,
    date: "2021-12-23",
    size: "m",
    imgSrc: "../images/img10.jpg",
    id: "2223",
    quantity: 1,
  },
  {
    name: "Black jeans",
    color: "black",
    price: 29.99,
    currentPrice: 24.99,
    date: "2021-12-23",
    size: "m",
    imgSrc: "../images/img11.jpg",
    id: "2233",
    quantity: 1,
  },
  {
    name: "Beige suit",
    color: "beige",
    price: 299.99,
    currentPrice: 299.99,
    date: "2021-12-23",
    size: "m",
    imgSrc: "../images/img12.jpg",
    id: "2333",
    quantity: 1,
  },
  {
    name: "Green suit",
    color: "green",
    price: 299.99,
    currentPrice: 299.99,
    date: "2021-8-15",
    size: "m",
    imgSrc: "../images/img13.jpg",
    id: "3333",
    quantity: 1,
  },
  {
    name: "Grey suit",
    color: "grey",
    price: 299.99,
    currentPrice: 299.99,
    date: "2021-8-15",
    size: "s",
    imgSrc: "../images/img14.jpg",
    id: "3334",
    quantity: 1,
  },
  {
    name: "Grey suit",
    color: "grey",
    price: 299.99,
    currentPrice: 189.99,
    date: "2021-8-15",
    size: "s",
    imgSrc: "../images/img15.jpg",
    id: "3344",
    quantity: 1,
  },
  {
    name: "Black suit",
    color: "black",
    price: 299.99,
    currentPrice: 299.99,
    date: "2021-8-15",
    size: "s",
    imgSrc: "../images/img16.jpg",
    id: "3444",
    quantity: 1,
  },
  {
    name: "Grey suit",
    color: "grey",
    price: 299.99,
    currentPrice: 299.99,
    date: "2021-2-17",
    size: "s",
    imgSrc: "../images/img17.jpg",
    id: "4444",
    quantity: 1,
  },
  {
    name: "Black track suit",
    color: "black",
    price: 79.99,
    currentPrice: 79.99,
    date: "2021-2-17",
    size: "s",
    imgSrc: "../images/img18.jpg",
    id: "4445",
    quantity: 1,
  },
  {
    name: "Bomber",
    color: "black",
    price: 49.99,
    currentPrice: 49.99,
    date: "2021-2-17",
    size: "xxl",
    imgSrc: "../images/img19.jpg",
    id: "4455",
    quantity: 1,
  },
  {
    name: "Bomber",
    color: "black",
    price: 49.99,
    currentPrice: 39.99,
    date: "2021-2-17",
    size: "xxl",
    imgSrc: "../images/img20.jpg",
    id: "4555",
    quantity: 1,
  },
  {
    name: "Jacket",
    color: "black",
    price: 59.99,
    currentPrice: 49.99,
    date: "2020-11-17",
    size: "xxl",
    imgSrc: "../images/img21.jpg",
    id: "5555",
    quantity: 1,
  },
  {
    name: "T-shirt",
    color: "white",
    price: 9.99,
    currentPrice: 9.99,
    date: "2020-11-17",
    size: "xxl",
    imgSrc: "../images/img22.jpg",
    id: "5556",
    quantity: 1,
  },
  {
    name: "T-shirt",
    color: "mixed",
    price: 19.99,
    currentPrice: 14.99,
    date: "2020-11-17",
    size: "xxl",
    imgSrc: "../images/img23.jpg",
    id: "5566",
    quantity: 1,
  },
  {
    name: "T-shirt",
    color: "mixed",
    price: 19.99,
    currentPrice: 19.99,
    date: "2020-11-17",
    size: "xxl",
    imgSrc: "../images/img24.jpg",
    id: "5666",
    quantity: 1,
  },
];
let dynamicArr = [...allProducts];
const productsWrapper = document.querySelector(".products");
const prevPageBtn = document.querySelector(".prev-page");
const nextPageBtn = document.querySelector(".next-page");
const currentPageBtn = document.querySelector(".current-page");
const filters = document.querySelectorAll(".filters div p");
const productsSestion = document.querySelector(".products-section");
const links = [
  document.querySelectorAll("nav .links li")[0],
  document.querySelectorAll("footer .links li")[0],
  document.querySelector(".show-products"),
];
const productsPerPage = 8;
let currentPage = 1;
const colors = new Set();
const sizes = new Set();

displayProducts();
//TOGGLE FILTER DROPDOWN MENUS
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    if (filter.nextElementSibling.classList.contains("active")) {
      filters.forEach((f) => {
        f.nextElementSibling.classList.remove("active");
      });
      filter.nextElementSibling.classList.remove("active");
    } else {
      filters.forEach((f) => {
        f.nextElementSibling.classList.remove("active");
      });
      filter.nextElementSibling.classList.add("active");
    }
  });
});
//SCROLL TO THE PRODUCTS SECTION
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    productsSestion.scrollIntoView({ behavior: "smooth" });
  });
});
//SORT PRODUCTS
document.querySelector(".sort-by").addEventListener("click", (e) => {
  const clicked = e.target;

  dynamicArr.sort((a, b) => {
    currentPage = 1;
    if (clicked.closest(".low-high")) {
      closeFilters();
      return a.currentPrice - b.currentPrice;
    }
    if (clicked.closest(".high-low")) {
      closeFilters();
      return b.currentPrice - a.currentPrice;
    }
    if (clicked.closest(".newest")) {
      closeFilters();
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return bDate - aDate;
    }
    if (clicked.closest(".oldest")) {
      closeFilters();
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate - bDate;
    }
  });
  displayProducts();
});
//FILTER BY COLOR
document.querySelector(".color").addEventListener("click", (e) => {
  const clickedEl = e.target;
  const check = dynamicArr.some((c) => c.color === clickedEl.dataset.color);
  if (check) {
    closeFilters();
    currentPage = 1;
    dynamicArr = [
      ...dynamicArr.filter((p) => p.color === clickedEl.dataset.color),
    ];
    displayProducts();
  }
});
//FILTER BY SIZE
document.querySelector(".size").addEventListener("click", (e) => {
  const clickedEl = e.target;
  const check = dynamicArr.some((c) => c.size === clickedEl.dataset.size);
  if (check) {
    closeFilters();
    currentPage = 1;
    dynamicArr = [
      ...dynamicArr.filter((p) => p.size === clickedEl.dataset.size),
    ];
    displayProducts();
  }
});
//MOVE PAGE BACK
prevPageBtn.addEventListener("click", () => {
  currentPage--;
  displayProducts();
});
//MOVE PAGE AHEAD
nextPageBtn.addEventListener("click", () => {
  currentPage++;
  displayProducts();
});
//CLEAR ALL FILTERS
document.querySelector(".clear").addEventListener("click", () => {
  currentPage = 1;
  dynamicArr = [...allProducts];
  displayProducts();
  closeFilters();
});
//OPEN PRODUCT PAGE
productsWrapper.addEventListener("click", (e) => {
  const currentProductEl = e.target.closest(".product");
  if (currentProductEl) {
    let currentProductObj = allProducts.find(
      (el) => el.id === currentProductEl.dataset.id
    );
    localStorage.setItem("viewedProduct", JSON.stringify(currentProductObj));
    window.location.href = "../pages/product.html";
  }
});
//DYNAMIC CHANGE OF THE COPYRIGHT YEAR IN THE FOOTER
document.querySelector(".year").textContent = new Date().getFullYear();

//!FUNCTIONS
function displayProducts() {
  displayFilterCategories();
  controlPagination();

  const shownProducts = dynamicArr.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  productsWrapper.innerHTML = "";
  shownProducts.forEach((product) => {
    const check = product.currentPrice < product.price;
    const html = `
          <div class="product ${check ? "sale" : ""}" data-id="${product.id}">
            <img src="${product.imgSrc}" alt="" />
            <p class="name">${product.name}</p>
            <p class="price-wrapper">
            ${
              check
                ? `<span class="price">$${product.price}</span>
            <span class="current-price">$${product.currentPrice}</span>`
                : `<span class="price"></span>
            <span class="current-price">$${product.currentPrice}</span>`
            }
            </p>
          </div>
        `;
    productsWrapper.insertAdjacentHTML("beforeend", html);
  });
}

function displayFilterCategories() {
  document.querySelector(".color ul").innerHTML = "";
  document.querySelector(".size ul").innerHTML = "";

  colors.clear();
  sizes.clear();

  dynamicArr.forEach((p) => {
    colors.add(p.color);
    sizes.add(p.size);
  });

  colors.forEach((c) => {
    const html = `<li data-color="${c}">${c}</li>`;
    document.querySelector(".color ul").insertAdjacentHTML("beforeend", html);
  });

  sizes.forEach((s) => {
    const html = `<li data-size="${s}">${s}</li>`;
    document.querySelector(".size ul").insertAdjacentHTML("beforeend", html);
  });
}

function controlPagination() {
  if (Math.ceil(dynamicArr.length / productsPerPage) === currentPage)
    nextPageBtn.classList.add("turn-off");
  else nextPageBtn.classList.remove("turn-off");
  if (currentPage === 1) prevPageBtn.classList.add("turn-off");
  else prevPageBtn.classList.remove("turn-off");
  currentPageBtn.textContent = currentPage;
}

function closeFilters() {
  filters.forEach((f) => {
    f.nextElementSibling.classList.remove("active");
  });
}
