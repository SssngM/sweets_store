import React from 'react';
import { NavLink } from "react-router-dom";
import "../App.css";
import mainimg from '../img/vending1.jpeg'

function Home() {
  return (
    <div>
      <div className="title">
        <h2>Choose your snack!</h2>
      </div>
      <div className="mainimage">
        <img className="resize" src={mainimg} alt="" />
      </div>
      <div className="subimg" >
        <div>
          <NavLink exact to="/product/chips">
            <img src="https://media2.giphy.com/media/l3q2PWti4zRPYPTDG/giphy.gif?cid=ecf05e47qtf5wkn2knfmbvfdxq84yrx90rvniz78mt4hdspj&rid=giphy.gif" alt=""
            />
          </NavLink>
          <h3> chips </h3>
        </div>
        <div>
          <NavLink exact to="/product/drinks">
            <img src="https://media1.giphy.com/media/acJgACIGXAhLa/giphy.gif" alt="" />
          </NavLink>
          <h3> drinks </h3>
        </div>

        <div>
          <NavLink exact to="/product/candy">
            <img src="https://media3.giphy.com/media/l3V0dQdn63xyyUec0/giphy.gif?cid=ecf05e479nhf4qwv7gckv7h6qa5zg75ad6lk4tyurjas9i5a&rid=giphy.gif&ct=g" />
          </NavLink>
          <h3> candy </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
