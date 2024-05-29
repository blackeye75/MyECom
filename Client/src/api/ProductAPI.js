import { useEffect, useState } from "react";
import axios from "axios";

const ProductAPI = () => {
  const [products, setproducts] = useState([]);
  const getProducts = async() => {
    const res = await axios.get('http://localhost:5000/api/products');
    // console.log(res.data.products);
    setproducts(res.data.products);
  };
  useEffect(() => {
    getProducts()
  },[]);
  return {
    products: [products,setproducts ],   //setproducts
  };
};

export default ProductAPI;
