import React, { useState } from 'react'
import './Login.css';
import './Createac';
import home from './home';
import {Link} from 'react-router-dom';

function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    var count =1;
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(username);
        console.log(password)
       
    }
    const handleUsername=(e)=>{
       setUsername(e.target.value)
       console.log(username)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
        console.log(password)
    }
  return (
    <body>
   <header class="header">
   </header>
    
    <div class="background"></div>
    <div class="container">
      
        <div class="login-section">
            <div class="form-box login">
                <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Username' value={username} onChange={handleUsername}required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password' value={password} onChange={handlePassword}required/>
                    </div>
                    <div class="remember-password">
                        <label for=""><input type="checkbox"/>Remember Me</label>
                        <a href="www.mail.com">Forget Password</a>
                    </div>
                    <button class="btn">Log In</button>
                    <button class="google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBFaWfLGLcxy9wQ3jFfKa87DLrQ_rv7v2UQ&usqp=CAU" class='googleimg'></img>Sign In with Google</button>
                    <div class="create-account">
                        <p>Don't have an Account?<Link to="/createac"><a class="register-link">Sign Up</a></Link></p>
                    </div>
                </form>
            </div>
            
                   
               
            </div>
        </div>
    
</body>
    
  )
}

export default Login