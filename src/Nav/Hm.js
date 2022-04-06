import React from 'react'
import style from './hm.module.css'


export const Hm = () => {
  return (
    <>
    <main>
        <section id="hero" className={style.hero}>
            <div className={style.intro}>
                <h1>If You Are A <span>True Gamer!!</span><br/>
                    <pre>This Is Your Destination</pre>
                </h1>
                <h2>
                    <pre>Premium Poducts Just For You</pre>
                </h2>
                <p>Its not just shopping .. its a life style
                </p>
                    <a href="#categories"><button>Shop Now</button></a>
            </div>
            {/*}                 <div className={style.hero_image}>
                    <img src="assets/img/500.png" alt="headset">
  </div> {*/}
        </section>
        <section id="categories" className={style.categories}>
            <h1>DISCOVER PRODUCTS</h1>
            <div className={style.discount}>
                <div className={style.discount_item}>
                    <a href="motherboaed.html"><img src="/1809547.jpg" alt="Motherboard"
                            title="Motherboard"/></a>
                </div>
                <div className={style.discount_item}>
                    <a href="desktop.html"><img src="/2098486.jpg" alt="Desktop" title="Desktop"/></a>
                </div>
                <div className={style.discount_item}>
                    <a href="laptops.html"><img src="/kv67.jpg" alt="Laptops" title="Laptops"/></a>
                </div>
            </div>
        </section>
    </main>
    
    </>
   
  )
}
export default Hm