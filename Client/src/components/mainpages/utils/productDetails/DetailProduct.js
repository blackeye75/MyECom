import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";

const DetailProduct = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productAPI.products;
  const [detailProducts, setdetailProducts] = useState([]);

  useEffect(() => {
    if (params) {
      products.forEach((product) => {
        if (product._id === params.id) setdetailProducts(product);
      });
    }
  }, [params, products]);
//   console.log(detailProducts);
  if (detailProducts.length === 0) return null;
  return (
    <div className="detail">
      <img alt="some img" src={detailProducts.images.url} />
      <div className="box-detail">
        <div className="row">
            <h2>{detailProducts.title}</h2>
            <h5>{detailProducts.product_id}</h5>
        </div>
            <span><b>$ </b>{detailProducts.price}</span>
            <p>{detailProducts.description}</p>
            <p>{detailProducts.content}</p>
            <p>Total Sold {detailProducts.sold}</p>
            <Link to='/cart' className="cart">Buy Now</Link>
      </div>
    </div>
  );
};

export default DetailProduct;
