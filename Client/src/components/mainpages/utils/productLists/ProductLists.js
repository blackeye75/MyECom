import React from "react";
// import { Link } from "react-router-dom";

import BtnRender from "./BtnRender";

const ProductLists = ({ product, isAdmin }) => {
  // console.log(product);
  // const state = useContext(GlobalState);             //already recive through props
  // // console.log(state);
  // const [products] = state.productAPI.products;
  // // const [isAdmin]=state.UserApi.isAdmin;
  // const addCart=state.UserApi.addCart;
  return (
    <div className="product_card py-3">
      {isAdmin && <input type="checkbox" onChange={()=>{}} checked={product.checked} />}

      <img alt="img" src={product.images} />
      <div className="product_box">
        <h2 className="text-sm mt-1 tracking-tighter" title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <BtnRender product={product}/>
    </div>
  );
};

export default ProductLists;
