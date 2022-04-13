import React from 'react';
import style from './signin.module.css'

const Signin=()=>{
    return(
    <main>

        <body className={style.nbody}>
        <br></br>
        <form action="" method="post">
        <main className={style.Signin}>
            <div className={style.title}>
                <h2>Create Account</h2>
            </div>
            <div className={style.flex}>
                <label for="name">First Name</label>
                <input type="text" name="name" required/>
            </div>
            <div className={style.flex}>
                <label for="name">Last Name</label>
                <input type="text" name="name" required/>
            </div>
            <div className={style.flex}>
                <label for="name">Nick Name</label>
                <input type="text" name="name" required/>
            </div>
            <div className={style.flex}>
                <label for="email">Email</label>
                <input type="email" placeholder="whatever@example.com" name="email" required/>
            </div>
            <div className={style.flex}>
                <label for="password">Password</label>
                <input type="password" placeholder="At least 8 characters" name="password" minlength="8" required/>
            </div>
            <div className={style.flex}>
                <label for="phoneNumber">Phone number</label>
                <input type="number" name="phoneNumber" minlength="11" required/>
            </div>
            <div className={style.flex}>
                <label for="country">Country</label>
                <select name="country" id="country" required>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <br/><br/>
                <button type="submit">SIGN UP</button>
            </div>
            <div className={style.redirect_Signin}>
                <p>Already have an account? <a href="signin">Sign-In</a></p>
            </div>
        </main>
        </form>
     </body>
    </main>
    )
}
export default Signin