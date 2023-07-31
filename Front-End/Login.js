import React, { useState } from 'react'
import './Login.css';
import './Createac';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";
function Login() {
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        dispatch(
            login(
                {
                    name:username
                }
            )
        )

        // const data={
        //     email:email,
        //     password:password,
        // };
        try{
            const response =await axios.post('http://127.0.0.1:8080/api/v1/auth/authenticate',{
                "name":username,
                "email":email,
                "password":password
            })
            .then((response)=>{
                console.log(response.data);
                localStorage.setItem('token',response.data.token);
                console.log(localStorage.getItem('token'));
            })
            alert("Login successful");
            navigate("/home");
        }
        catch(error){
            alert("Invalid email and password");
        }
    }
  return (
    <body>
   <header class="lheader">
   </header>
    
    <div class="l-background"></div>
    <div class="hello-container">
      
        <div class="login-section">
            <div class="form-box login">
                <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        {/* <input type="text" placeholder='Username' value={username} onChange={handleUsername}required/> */}
                        <input type="username" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        {/* <input type="text" placeholder='Username' value={username} onChange={handleUsername}required/> */}
                        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        {/* <input type="password" placeholder='Password' value={password} onChange={handlePassword}required/> */}
                        <input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}required/>
                    </div>
                    <p></p>
                    <div class="remember-password">

                        {/* <label for=""><input className="harini" type="checkbox"/>Remember Me</label> */}
                        <a href="https://accounts.google.com/signin/v2/challenge/pwd?TL=AJvNCbbEmT7Qw7QU_QybDTR8mOc9r293tHcVBqXS1c6G4UCY-w5cKTBj38JhJ0f-&cid=1&continue=https%3A%2F%2Fmyaccount.google.com%2Fsigninoptions%2Fpassword%3Fpli%3D1&flowName=GlifWebSignIn&hl=en&ifkv=AeDOFXi9k3_k7nmrzO9bk2cqrJcZTMll9TIJBV6fFVdRqmn7cXC1iGJdCrYPtLJVQCXwqv_86ecoog&kdi=CAM&rart=ANgoxcep5n2RgoTv0Kn9ai4zdut_7UjmPRsTcpo66XOQvlo14ylFSmEGnyKmm5kdcOnb_KuftzLthr8s2i7VVb4a6pM2psWIjA&sarp=1&scc=1&service=accountsettings&flowEntry=ServiceLogin">
                            Forget Password</a>
                    
                    </div>
                    <p></p>
                    <p></p>
                    <button type="submit" class="l-btn">Log In</button>
                    {/* <button class="google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBFaWfLGLcxy9wQ3jFfKa87DLrQ_rv7v2UQ&usqp=CAU" class='googleimg'></img>Sign In with Google
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S1527761250%3A1689180149336586&Email=727721euit014%40skcet.ac.in&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession"></a>
                    </button> */}
                    <p></p>
                    <div class="create-account">
                        <p>Don't have an Account?<Link to="/createac"><a class="register-link">   Sign Up</a></Link></p>
                    </div>
                </form>
            </div>
            
                   
               
            </div>
        </div>
    
</body>
    
  )
}

export default Login


// import React from 'react'
// import './Login.css';
// import './Createac';
// import {Link} from 'react-router-dom';
// function Login() {
//   return (
//     <body>
    
//     <div class="background"></div>
//     <div class="hello-container">
      
//         <div class="login-section">
//             <div class="form-box login">
//                 <form className='login-form' action="">
//                     <h2>Log In</h2>
//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='Username' required/>
//                     </div>
//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
//                         <input type="password" placeholder='Password'required/>
//                     </div>
//                     <div class="remember-password">
//                         <label for=""><input type="checkbox"/>Remember Me</label>
//                         <a href="#">Forget Password</a>
//                     </div>
//                     <button class="l-btn">Log In</button>
//                     <button class="google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBFaWfLGLcxy9wQ3jFfKa87DLrQ_rv7v2UQ&usqp=CAU" class='googleimg'></img>Sign In with Google</button>
//                     <div class="create-account">
//                         <p>Don't have an Account?<Link to="/createac"><a class="register-link">Sign Up</a></Link></p>
//                     </div>
//                 </form>
//             </div>
            
                   
               
//             </div>
//         </div>
    
// </body>
    
//   )
// }

// export default Login