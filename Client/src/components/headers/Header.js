import React, { useContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

const Header = () => {
  const state=useContext(GlobalState);
  // console.log(state);
  const [isLogged,setisLogged]=state.UserApi.isLogged;
  const [isAdmin,setisAdmin]=state.UserApi.isAdmin;
  
  return (
    <header>
      <div className="menu">
        <MdOutlineMenu size={30} />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">Dream Cart</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/login">Login or Register</Link>
        </li>
        <li>
          <Link to="/">
            <MdClose size={30} className="menu" />
          </Link>
        </li>
      </ul>
      <div className="cart-icon" >
        <span>0</span>
        <Link><MdOutlineAddShoppingCart size={30}/></Link>
      </div>
    </header>
  );
};

export default Header;
