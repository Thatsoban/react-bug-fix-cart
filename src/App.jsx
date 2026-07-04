import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Vortex 60 Keyboard",
    desc: "Hot-swappable mechanical keyboard, 60% layout, red switches.",
    price: 79,
    icon: "⌨️",
  },
  {
    id: 2,
    name: "Nova X Mouse",
    desc: "Lightweight wireless mouse, 26000 DPI sensor, 60hr battery.",
    price: 49,
    icon: "🖱️",
  },
  {
    id: 3,
    name: "Aero Headset",
    desc: "Open-back gaming headset with detachable mic.",
    price: 65,
    icon: "🎧",
  },
  {
    id: 4,
    name: "Pulse Controller",
    desc: "Wired controller, hall-effect sticks, no drift.",
    price: 39,
    icon: "🎮",
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  // adds product to cart
  function handleAddToCart(product) {
    // create a new array instead of mutating the old one,
    // otherwise React sees the same reference and skips the re-render
    setCartItems((prev) => [...prev, product]);
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <div className="topbar">
        <div className="brand">
          <div className="brand-mark">
            Level<span>Up</span>
          </div>
          <div className="brand-sub">gear store</div>
        </div>

        <div className="cart-badge">
          <div>
            <div className="cart-label">cart</div>
            <div className="cart-total">${total}</div>
          </div>
          <div className="cart-count">{cartItems.length}</div>
        </div>
      </div>

      <h1 className="headline">Gaming gear, sorted.</h1>
      <p className="subhead">Add a few things to your cart and check the total up top.</p>

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <div className="card-icon">{p.icon}</div>
            <div className="card-name">{p.name}</div>
            <div className="card-desc">{p.desc}</div>
            <div className="card-footer">
              <div className="card-price">${p.price}</div>
              <button className="add-btn" onClick={() => handleAddToCart(p)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="footnote">LevelUp Cart — practice project</div>
    </div>
  );
}
