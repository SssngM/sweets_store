import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function OrderForm({ type, product, setCart }) {
  const [quantity, setQuantity] = useState(1);
  let history = useHistory();

  function submitOrder() {
    const curOrder = {
      img: product.src,
      name: product.name,
      quantity: quantity,
      price: product.price,
      total: (Number(product.price) * Number(quantity)).toFixed(2)
    };

    setCart(cart => {
      const cartCopy = [...cart, curOrder];
      return cartCopy;
    });

    // history.push("/cart")
  }

  return (
    <div>
      <label>Qty</label>
      <select
        onChange={(e) => setQuantity(e.target.value)}
        name="quantity">
        <option value="1">1 </option>
        <option value="2">2 </option>
        <option value="3">3 </option>
        <option value="4">4 </option>
        <option value="5">5 </option>
        <option value="6">6 </option>
      </select>
      <h3 className="style">
        <button onClick={submitOrder}> +Add </button>
      </h3>
    </div>
  )
}


export default OrderForm; 
