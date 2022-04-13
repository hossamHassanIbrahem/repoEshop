import React from 'react'
import  './Nav.css'
import style from './nav.module.css'
import Hm from './Hm'
import Signin from './Signin'
import Topproducts from './Topproducts'
import Aboutus from './About us'
import Categories from '../cat/Categories'
import CartPage from './../cart/CartPage'
import { BrowserRouter, Routes,Route ,Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>

    <div className="logo">

    </div>
    <BrowserRouter>
      <div className={style.links}>


        <Link as={Link} to='/Hm'>Home</Link>
        <Link as={Link} to='../cat/Categories'>Categories
          
        </Link>
        <Link as={Link} to='/Topproducts'>Top products</Link>
        <Link as={Link} to='/Aboutus'>Aboutus</Link>
        <Link as={Link} to='/Signin'>Signin/Up</Link>
        <Link className={style.cart} as={Link} to='../cart/CartPage'>CartPage</Link>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Hm/>}/>
          <Route path='/Hm' element={<Hm/>}/>
          <Route path='/Categories' element={<Categories/>}/>
          <Route path='/Topproducts' element={<Topproducts/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/cart/CartPage' element={<CartPage/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}
export default Nav