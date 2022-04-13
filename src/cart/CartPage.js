import React from 'react'
import cart from './cartpage.module.css'
const CartPage = () => {
  return (

    <main>
    <div className={cart.header}>
    </div>
    <section>
        <div className={cart.cart}>
            <img src="../../public/06-loader_telega.gif" alt=""/>
            <h2>Your cart is empty!!!</h2>
            <p> <strong>What are you waiting for!!</strong> <br></br>Explore our wide range of products, <br></br> flexible
                payments & offers!</p>
            <button>Shop now!</button>
        </div>
    </section>
    </main>

  )
}

export default CartPage