import React from 'react'
import './Nav.css'
import Oneaaaa from './Oneaaaa'
import Twoaaaa from './Twoaaaa'
import Threaaa from './Threaaa'
import Fouraaa from './Fouraaa'
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
        <Link  as={Link} to='/'>home </Link>
        <Link  as={Link} to='/'>home </Link>
        <Link  as={Link} to='/'>home </Link>
        <Link  as={Link} to='/'>home </Link>
        <Link as={Link} to='/Twoaaaa'>prodact </Link>
        <Link as={Link} to='/Threaaa'>about us </Link>
        <Link as={Link} to='/Fouraaa'>log in </Link>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Oneaaaa/>}/>
          <Route path='/Twoaaaa' element={<Twoaaaa/>}/>
          <Route path='/Threaaa' element={<Threaaa/>}/>
          <Route path='/Fouraaa' element={<Fouraaa/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}
export default Nav