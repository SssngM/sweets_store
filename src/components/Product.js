import React from 'react';
import { Link, useParams } from "react-router-dom";

import OrderForm from './OrderForm';
import "../App.css";

function Product({ setCart, dataObj }) {
  const { type } = useParams(); // objects of key, value pair
  const products = dataObj[type]; // array of data objects

  return (
    <div className="images">
      {products.map(product => (
        <div key={product.id}>
          <div>
          <img alt={product.name} src={product.src} />
          </div>
          <div>{product.name}</div>
          <div>price : {product.price}$</div>
          <div>
            <OrderForm
              product={product}
              setCart={setCart} />
          </div>
        </div>
      ))}
      {!products && <h1>404</h1>}
    </div>
  )
}


export default Product; 
