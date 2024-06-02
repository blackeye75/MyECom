import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart,setCart] = state.UserApi.cart;
  const [isLogged]=state.UserApi.isLogged;
  // console.log(setCart);
  if(!isLogged) return (<h1 className="text-center text-4xl text-red-500 h-[70vh]" >Login please</h1>)
  if (cart.length === 0) {
    return <h2 className="text-center text-4xl h-[70vh] ">Cart is Empty!!</h2>;
  } else {
    return (
      <>
        {" "}
        <div className="w-full h-fit justify-center items-center gap-10 flex flex-wrap">
          {cart.map((product) => (
            <div key={product._id} className="product_card py-3 h-fit">
              <img alt="img" src={product.images} />
              <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
                <div className="buy">
                  <button className="px-4 py-1 rounded-lg font-semibold  bg-blue-500">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-4 py-2 bg-cyan-600 m-3 rounded-lg font-semibold ">
            Check Out
          </button>
        </div>
      </>
    );
  }
};

export default Cart;
