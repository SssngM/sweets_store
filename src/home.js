import React from 'react';
import { NavLink } from "react-router-dom";
import "./App.css";
import mainimg from './img/vending1.jpeg'

function Home() {
  return (
    <div>
      <div className="title">
        <h2>Choose your snack!</h2>
      </div>
      <div className="mainimage">
        <img className="resize" src={mainimg} alt="" />
      </div>
      {/* <h1>  choose your snacks! </h1> */}
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




  // https://d26eb5y2jukpbz.cloudfront.net/ebs/archive/2018/large/OS_BE18069M_10.jpg
          // https://cnet3.cbsistatic.com/img/_Fowm3P0bkDZzObQpNZapzS0Kn0=/2020/03/25/10817fb1-ef94-4f6a-bde1-4026502160bb/gettyimages-1149135424.jpg
          // https://www.fdiforum.net/mag/wp-content/uploads/2020/05/Salt-of-the-Earth.-Mediteranean-Unami-Powder.jpg

          // https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzLzBiMTU3Nzc4MWJmZjg5YjQ4NV9nZXR0eWltYWdlcy0xNDA0MzE0ODRfMTAyNC5qcGciXSxbInAiLCJjb252ZXJ0IiwiIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdLFsicCIsInRodW1iIiwiNzgweDUyMCMiXV0/gettyimages-140431484_1024.jpg
          // https://foodandcity.org/wp-content/uploads/2017/11/Automat.jpeg

          // https://i.dailymail.co.uk/i/pix/2015/01/23/24E904C000000578-2923545-1952_Vending_machines_were_already_able_to_refrigerate_and_heat_-a-154_1422027472490.jpg
          // alt="Vending machine"