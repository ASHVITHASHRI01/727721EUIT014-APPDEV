import React from 'react'
import './Createac.css';
import './Login';
import {Link} from 'react-router-dom';
function createac() {
  return (
    <body>
   <header class="header">
   </header>
    
    <div class="background"></div>
    <div class="container">

        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>CREATE AN ACCOUNT</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Name' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Username' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Contact' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password'required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="confirm password" placeholder='Confirm Password'required/>
                    </div>
                    <button class="btn">Sign Up</button>
                    <div class="create-account">
                        <p>Have already an account? <Link to="/Login" >< a class="register-link">Login Here</a></Link></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    
</body>
    
  )
}

export default createac