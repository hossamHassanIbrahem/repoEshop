import React from 'react'
import './Nav.css'
import Hm from './Hm'
import Products from './Products'
import Contactus from './Contactus'
import Whatsnew from './Whatsnew'
import Aboutus from './About us'
import { BrowserRouter, Routes,Route ,Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
    <div className="logo">
    <h1>
        our idea
    </h1>
    </div>
    <BrowserRouter>
      <div className="links">

        <Link as={Link} to='/'></Link>
        <Link as={Link} to='/Hm'>Home</Link>
        <Link as={Link} to='/Products'>Products</Link>
        <Link as={Link} to='/Whatsnew'>Whats new</Link>
        <Link as={Link} to='/Aboutus'>Aboutus</Link>
        <Link as={Link} to='/Contactus'>Contact us</Link>
      </div>
      <div>
        <Routes>
          <Route path='/'/>
          <Route path='/Hm' element={<Hm/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Whatsnew' element={<Whatsnew/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      my main page
    </>
  )
}
export default Nav