import { renderHeader } from "./components/Header.js";
import { renderHero } from "./components/Hero.js";
import { renderRoutine } from "./components/Routine.js";
import { renderBenefits } from "./components/Benefits.js";
import { renderResults } from "./components/Results.js";
import { renderComparison } from "./components/Comparison.js";
import { renderSet1 } from "./components/Set1.js";
import { renderIngredients } from "./components/Ingredients.js";
import { renderFormulas } from "./components/Formulas.js";
import { renderTestimonials } from "./components/Testimonials.js";
import { renderSocial } from "./components/Social.js";
import { renderSet2 } from "./components/Set2.js";
import { renderFooter } from "./components/Footer.js";
import {
  addToCartItem,
  decrementCartItem,
  getCartCount,
  getCartItems,
  incrementCartItem,
} from "./core/state.js";

const sections = [
  renderHeader(getCartCount()),
  renderHero(),
  renderRoutine(),
  renderBenefits(),
  renderResults(),
  renderComparison(),
  renderSet1(),
  renderIngredients(),
  renderFormulas(),
  renderTestimonials(),
  renderSocial(),
  renderSet2(),
  renderFooter(),
];

const root = document.getElementById("root");

if (root) {
  root.innerHTML = sections.join("");
}

const updateCartBadge = (count) => {
  // badge counter update
  const badge = document.querySelector(".cart-toggle .badge");
  if (badge) {
    badge.textContent = count;
  }
};

const renderCartItems = () => {
  // render items in cart
  const cartItems = getCartItems();
  const cartList = document.querySelector(".cart-drawer__items");
  const emptyState = document.querySelector(".cart-drawer__empty");
  const totalValue = document.querySelector(".cart-drawer__total-value");
  const totalRow = document.querySelector(".cart-drawer__total");
  const checkoutButton = document.querySelector(".cart-drawer__checkout");

  if (!cartList || !emptyState) {
    return;
  }

  if (totalValue) {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    totalValue.textContent = `$${total.toFixed(2)}`;
  }

  if (totalRow) {
    totalRow.style.display = cartItems.length === 0 ? "none" : "flex";
  }

  if (checkoutButton) {
    checkoutButton.disabled = cartItems.length === 0;
    checkoutButton.style.display = cartItems.length === 0 ? "none" : "";
  }

  if (cartItems.length === 0) {
    cartList.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  cartList.innerHTML = cartItems
    .map((item) => {
      const itemTotal = (item.price * item.quantity).toFixed(2);
      return `
        <div class="cart-item" data-cart-id="${item.id}">
          <div class="cart-item__info">
            <span class="cart-item__name">${item.name}</span>
            <div class="cart-item__controls" aria-label="Quantity controls">
              <button class="cart-qty-btn" type="button" data-action="decrease" data-cart-id="${item.id}" aria-label="Decrease quantity">-</button>
              <span class="cart-qty-value">${item.quantity}</span>
              <button class="cart-qty-btn" type="button" data-action="increase" data-cart-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <span class="cart-item__price">$${itemTotal}</span>
        </div>
      `;
    })
    .join("");
};

// ---------------- Cart Logic ---------------- //
const cartToggle = document.querySelector(".cart-toggle");
const cartDrawer = document.getElementById("cart-drawer");

if (cartToggle && cartDrawer) {
  const closeTargets = cartDrawer.querySelectorAll("[data-cart-close]");

  const openCart = () => {
    cartDrawer.classList.add("is-open");
    cartDrawer.setAttribute("aria-hidden", "false");
    cartToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("cart-open");
    renderCartItems();
  };

  const closeCart = () => {
    cartDrawer.classList.remove("is-open");
    cartDrawer.setAttribute("aria-hidden", "true");
    cartToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("cart-open");
  };

  cartToggle.addEventListener("click", () => {
    if (cartDrawer.classList.contains("is-open")) {
      closeCart();
      return;
    }

    openCart();
  });

  closeTargets.forEach((target) => {
    target.addEventListener("click", closeCart);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && cartDrawer.classList.contains("is-open")) {
      closeCart();
    }
  });

  cartDrawer.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest(".cart-qty-btn");
    if (!button) {
      return;
    }

    const action = button.dataset.action;
    const id = button.dataset.cartId;
    if (!action || !id) {
      return;
    }

    const count =
      action === "increase" ? incrementCartItem(id) : decrementCartItem(id);

    updateCartBadge(count);
    renderCartItems();
  });
}

const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
if (addToCartButtons.length > 0) {
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const item = {
        id: target.dataset.cartId || "d1-set",
        name: target.dataset.cartName || "D1 Skincare Set",
        price: Number.parseFloat(target.dataset.cartPrice || "58.99"),
      };

      const count = addToCartItem(item);
      updateCartBadge(count);
      if (cartDrawer && cartDrawer.classList.contains("is-open")) {
        renderCartItems();
      }
    });
  });
}

// ---------------- Menu Logic ---------------- //
const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.getElementById("side-menu");

if (menuToggle && sideMenu) {
  const closeTargets = sideMenu.querySelectorAll("[data-menu-close]");

  const openMenu = () => {
    sideMenu.classList.add("is-open");
    sideMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    sideMenu.classList.remove("is-open");
    sideMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  menuToggle.addEventListener("click", () => {
    if (sideMenu.classList.contains("is-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  closeTargets.forEach((target) => {
    target.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sideMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });
}
