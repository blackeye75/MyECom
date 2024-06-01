import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductLists from '../utils/productLists/ProductLists';

const Products = () => {
  const state=useContext(GlobalState);
  // console.log(state);
  const [products]=state.productAPI.products;
  const [isAdmin]=state.UserApi.isAdmin;

  // console.log(products);
  return (
    <div className='products' >
      {
        products.map((product)=>{
          return <ProductLists key={product._id} product={product} isAdmin={isAdmin} />
        })
      }
    </div>
  )
}

export default Products