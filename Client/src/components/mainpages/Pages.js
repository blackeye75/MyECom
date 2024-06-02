import React from 'react'
import Products from './products/Products'
import Login from './login/Login'
import Register from './login/Register'
import Cart from './cart/Cart'
import { Route, Routes } from 'react-router-dom'
import DetailProduct from './utils/productDetails/DetailProduct'
import Contact from '../contact/Contact'
import CreateProduct from './utils/createProduct/CreateProduct'
import DeleteProd from './utils/productDetails/DeleteProd'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/detail/:id' element={<DetailProduct/>} />
      <Route path='/delete/:id' element={<DeleteProd/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/create-product' element={<CreateProduct/>} />
    </Routes>
  )
}

export default Pages