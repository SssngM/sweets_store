import React, { useState } from 'react';

function OrderForm({ product, setCart }) {
  const [quantity, setQuantity] = useState(1);


  function SubmitOrder() {
    const curOrder = {
      img: product.src,
      name: product.name,
      price: product.price,
      quantity: quantity,
      total: (Number(product.price) * Number(quantity)).toFixed(2)
    };

    setCart(cart => [...cart, curOrder]);
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
        <button onClick={SubmitOrder}> Add </button>
      </h3>
    </div>
  )
}


export default OrderForm; 
