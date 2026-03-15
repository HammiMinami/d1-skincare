const state = {
  cartItems: [],
};

export const getCartItems = () => [...state.cartItems];

export const getCartCount = () =>
  state.cartItems.reduce((total, item) => total + item.quantity, 0);

export const addToCartItem = (item) => {
  const existing = state.cartItems.find((entry) => entry.id === item.id);

  existing
    ? (existing.quantity += 1)
    : state.cartItems.push({ ...item, quantity: 1 });

  return getCartCount();
};

export const incrementCartItem = (id) => {
  const existing = state.cartItems.find((entry) => entry.id === id);

  existing ? (existing.quantity += 1) : null;

  return getCartCount();
};

export const decrementCartItem = (id) => {
  const existing = state.cartItems.find((entry) => entry.id === id);
  if (!existing) {
    return getCartCount();
  }

  existing.quantity -= 1;
  if (existing.quantity <= 0) {
    state.cartItems = state.cartItems.filter((entry) => entry.id !== id);
  }

  return getCartCount();
};

export const setCartCount = (value) => {
  if (value <= 0) {
    state.cartItems = [];
    return;
  }

  if (state.cartItems.length === 0) {
    state.cartItems.push({
      id: "default",
      name: "D1 Skincare Set",
      price: 58.99,
      quantity: value,
    });
    return;
  }

  const currentCount = getCartCount();
  const diff = value - currentCount;
  if (diff > 0) {
    state.cartItems[0].quantity += diff;
  }
};
