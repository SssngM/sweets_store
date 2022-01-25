import React from 'react';
import "./App.css";

function Cart({ cartItems }) {

  function getCartTotal() {
    // let total = 0;

    // for (let cur of cartItems) {
    //   total += Number(cur.total);
    // }

    // return total.toFixed(2);

    return cartItems.reduce((total, cur) => total + Number(cur.total), 0);
  }


  return (
    <div className="cart">
      <div >
        <h3>Your Cart</h3>
        {/* <p>cart total : {Number(getCartTotal()).toFixed(2)}</p> */}
        <ul>
          {cartItems.map(cartItem => (
            <li style={{ 'display': 'inline-block' }}>
              <div>
                <img className="images-cart"
                  src={cartItem.img}
                  alt={cartItem.name} />
              </div>
              <div className="cart-list">
                <span>{cartItem.name}</span>
                <span>quantity : {cartItem.quantity}</span>
                <div>price : {cartItem.price}$</div>
              </div>
            </li>
          ))}
        </ul>
        <p><h3 >Total Price : {Number(getCartTotal()).toFixed(2)}$</h3></p>
        <button >Check Out</button>
      </div>
    </div>
  )
}

export default Cart;
