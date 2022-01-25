import React, { useState } from 'react';

import Home from './home';
import NavBar from './NavBar';
import Product from './Product';
import Cart from './Cart';

import lays from "./img/lays.jpeg";
import doritos from "./img/doritos.jpeg";
import kettle from "./img/kettle.jpg";
import pringles from "./img/pringles.jpg";
import cocacola from "./img/cocacola.jpg";
import fanta from "./img/fanta.jpg";
import perrier from "./img/perrier.jpg";
import sprite from "./img/sprite.jpeg";
import skittles from "./img/skittles.jpg";
import chupachups from "./img/chupachups.jpg";

import haribo from "./img/haribo.jpg";
import kitkat from "./img/kitkat.jpeg";

import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  const [cart, setCart] = useState([]);

  console.log('cart...', cart)
  return (
    <div>
      <BrowserRouter>
        <NavBar quantity={cart.length} />
        <Route exact path="/product/:type">
          <Product
            cart={cart}
            setCart={setCart}
            dataObj={props} />
        </Route>
        <Route exact path="/cart">
          <Cart cartItems={cart} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  )
}


App.defaultProps = {
  chips: [
    {
      id: 1,
      amount: 0,
      name: "Lays",
      src: lays,
      price: "2.99"
    },
    {
      id: 2,
      amount: 0,
      name: "Doritos",
      src: doritos,
      price: "2.99"
    },
    {
      id: 3,
      amount: 0,
      name: "Kettle",
      src: kettle,
      price: "2.99"
    },
    {
      id: 4,
      amount: 0,
      name: "Pringles",
      src: pringles,
      price: "2.99"
    },
  ],
  drinks: [
    {
      id: 5,
      amount: 0,
      name: "cocacola",
      src: cocacola,
      price: "1.99"
    },
    {
      id: 6,
      amount: 0,
      name: "Fanta",
      src: fanta,
      price: "1.99"
    },
    {
      id: 7,
      amount: 0,
      name: "Perrier",
      src: perrier,
      price: "1.99"
    },
    {
      id: 8,
      amount: 0,
      name: "Sprite",
      src: sprite,
      price: "1.99"
    },
  ],
  candy: [
    {
      id: 9,
      amount: 0,
      name: "Skittles",
      src: skittles,
      price: "1.99"
    },
    {
      id: 10,
      amount: 0,
      name: "ChupaChups",
      src: chupachups,
      price: "1.99"
    },
    {
      id: 11,
      amount: 0,
      name: "Haribo",
      src: haribo,
      price: "1.99"
    },
    {
      id: 12,
      amount: 0,
      name: "Kitkat",
      src: kitkat,
      price: "1.99"
    }
  ]
}

export default App;
