import React from 'react'
import Products from './products/Products'
import Login from './login/Login'
import Register from './login/Register'
import Cart from './cart/Cart'
import { Route, Routes } from 'react-router-dom'
import DetailProduct from './utils/productDetails/DetailProduct'
import Contact from '../contact/Contact'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/detail/:id' element={<DetailProduct/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default Pages