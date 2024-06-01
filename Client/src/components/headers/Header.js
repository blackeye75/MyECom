import React, { useContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import axios from "axios";

const Header = () => {
  const state = useContext(GlobalState);
  // console.log(state);
  const [isLogged, setisLogged] = state.UserApi.isLogged;
  const [isAdmin, setisAdmin] = state.UserApi.isAdmin;
  const [cart,setCart]=state.UserApi.cart;

  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.clear();
    setisAdmin(false);
    setisLogged(false);
    setCart("");
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create-product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };
  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  return (
    <header>
      <div className="menu-mbl">
        <MdOutlineMenu size={30} />
      </div>
      <div className="logo space-x-2 flex items-center">
        <img className="h-14 w-14" src="./mylogo.png" alt="" />
        <h1>
          <Link to="/">{isAdmin ? "Admin" : "DreamCart"}</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">{isAdmin ? "Product" : "Shop"}</Link>
        </li>
        {isAdmin && adminRouter()}
        {isLogged ? loggedRouter() : <Link to="/login">Login or Register</Link>}

        <li>
          <Link className="" to="/">
            <MdClose size={30} className="menu-mbl" />
          </Link>
        </li>
      </ul>
      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
         <Link  to='/cart' >
            <MdOutlineAddShoppingCart size={30} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
