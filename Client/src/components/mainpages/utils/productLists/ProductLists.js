import React from "react";
import { Link } from "react-router-dom";

const ProductLists = ({ product }) => {
  // console.log(product);
  return (
    <div className="product_card">
      <img alt="img" src={product.images.url} />
      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <div className="row_btn" >
        <Link id="btn_buy" to={`#!`} >
        Buy
        </Link>
        <Link id="btn_view" to={`detail/${product._id}`} >
          View 
        </Link>
      </div>
    </div>
  );
};

export default ProductLists;
