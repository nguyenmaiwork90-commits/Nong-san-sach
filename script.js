// Select modal elements
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");

// Add event listener for product click
const products = document.querySelectorAll(".product");
products.forEach(product => {
  product.addEventListener("click", () => {
    const name = product.getAttribute("data-name");
    const desc = product.getAttribute("data-desc");
    const price = product.getAttribute("data-price");

    modalTitle.textContent = name;
    modalDesc.textContent = desc;
    modalPrice.textContent = price;

    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when click outside modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
