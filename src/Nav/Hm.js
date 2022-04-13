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
                <div className={style.image }>
                <img src="../../public/hero-img.png" alt=""/>
            
           
            </div>    
        </section>
      
    </main>
    
    </>
   
  )
}
export default Hm