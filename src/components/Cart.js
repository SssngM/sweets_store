import React from 'react';
import "../App.css";

function Cart({ cartItems }) {

  function getCartTotal() {
    let total = 0;
    for (let cur of cartItems) {
      total += Number(cur.total);
    }
    return total.toFixed(2);  
  }

  return (
    <div className="cart">
      <div >
        <h3>Your Cart</h3>
        <ul>
          {cartItems.map(cartItem => (
            <li key={cartItem.id} style={{ 'display': 'inline-block' }}>
              <div>
                <img className="images-cart"
                  src={cartItem.img}
                  alt={cartItem.name} />
              </div>
              <div className="cart-list">
                <span>{cartItem.name}</span><br/>
                <span>Quantity : {cartItem.quantity}</span>
                <div>Item total : {cartItem.total}$</div>
              </div>
            </li>
          ))}
        </ul>
        <p><h3 >Total Price : {getCartTotal()}$</h3></p>
        <button >Check Out</button>
      </div>
    </div>
  )
}

export default Cart;
