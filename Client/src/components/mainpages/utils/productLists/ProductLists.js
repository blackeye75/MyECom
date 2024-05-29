import React from "react";

const ProductLists = ({ product }) => {
  // console.log(product);
  return (
    <div className="product_card">
      <img src={product.images.url} />
      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default ProductLists;
