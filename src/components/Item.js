import { React, useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)

  const addToCart = () => {
    setCart(!cart)
  }

  const appClass = cart ? "in-cart" : ""

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => { addToCart() }} className="add"> {cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
