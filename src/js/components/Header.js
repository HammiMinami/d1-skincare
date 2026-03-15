export const renderHeader = (cartCount = 0) => {
  return `
    <header class="site-header">
    <div class="promo">
      free shipping on us orders over $100
    </div>
    <div class="site-header-content grid-container">
      <div class="site-header-logo">
       <button class="menu-toggle" type="button" aria-controls="side-menu" aria-expanded="false" aria-label="Open menu">
        <img src="src/assets/images/menu.svg" alt="Menu" />
       </button>
       <img src="src/assets/images/d1-logo.svg" alt="D1 Skincare" />
      </div>
      <div class="site-header-actions">
        <button class="btn btn-secondary">GET STARTED</button>
        <button class="icon-button cart-toggle" type="button" aria-label="View cart" aria-controls="cart-drawer" aria-expanded="false">
          <img src="src/assets/images/cart.png" alt="Cart" />
          <span class="badge">${cartCount}</span>
        </button>
      </div>
      </div>
    </header>
    <div class="side-menu" id="side-menu" aria-hidden="true">
      <div class="side-menu__overlay" data-menu-close></div>
      <div class="side-menu__panel" role="dialog" aria-modal="true" aria-label="Site menu">
        <div class="side-menu__header">
          <span class="side-menu__title">Menu</span>
          <button class="side-menu__close" type="button" aria-label="Close menu" data-menu-close>×</button>
        </div>
        <nav class="side-menu__nav">
          <a href="#" data-menu-close>Shop</a>
          <a href="#" data-menu-close>Routine</a>
          <a href="#" data-menu-close>Ingredients</a>
          <a href="#" data-menu-close>Results</a>
          <a href="#" data-menu-close>Contact</a>
        </nav>
        <div class="side-menu__actions">
          <button class="btn btn-secondary">GET STARTED</button>
        </div>
      </div>
    </div>
    <div class="cart-drawer" id="cart-drawer" aria-hidden="true">
      <div class="cart-drawer__overlay" data-cart-close></div>
      <div class="cart-drawer__panel" role="dialog" aria-modal="true" aria-label="Cart">
        <div class="cart-drawer__header">
          <span class="cart-drawer__title">Your Cart</span>
          <button class="cart-drawer__close" type="button" aria-label="Close cart" data-cart-close>×</button>
        </div>
        <div class="cart-drawer__body">
          <p class="cart-drawer__empty">Your cart is empty.</p>
          <div class="cart-drawer__items"></div>
        </div>
        <div class="cart-drawer__footer">
          <div class="cart-drawer__total">
            <span>Total</span>
            <span class="cart-drawer__total-value">$0.00</span>
          </div>
          <button class="btn btn-secondary cart-drawer__checkout" type="button">Checkout</button>
        </div>
      </div>
    </div>
  `;
};
