import React, { useState } from 'react';
import './Createac.css';
import './Login';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
function Createac() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
        name:formData.name,
        username:formData.username,
        email:formData.email,
        password:formData.password
    }
    
    await axios.post('http://127.0.0.1:8080/api/v1/auth/register',data)
    alert("Register Successful");
    navigate("/Login");
    
        
    }

  return (
    <body>
      {/* <header class="header">
      </header> */}

      <div class="l-background"></div>
      <div class="l-container">

        <div class="create-section">
          <div class="form-box login">
            <form onSubmit={handleSubmit}>

              <h2>CREATE AN ACCOUNT</h2>
              <div class="input-box">
                <span class="icon"><i class='bx bxs-envelope'></i></span>
                <input
                  type="text"
                  placeholder='Name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div class="input-box">
                <span class="icon"><i class='bx bxs-envelope'></i></span>
                <input
                  type="text"
                  placeholder='Username'
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="icon"><i class='bx bxs-envelope'></i></span>
                <input
                  type="text"
                  placeholder='Email'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <div class="input-box">
                <span class="icon"><i class='bx bxs-envelope'></i></span>
                <input
                  type="text"
                  placeholder='Contact'
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div> */}

              <div class="input-box">
                <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                <input
                  type="password"
                  placeholder='Password'
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <div class="input-box">
                  <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                  <input
                    type="confirm password"
                    placeholder='Confirm Password'
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div> */}

              <button type="submit" class="l-btn">Sign Up</button>
              <div class="create-account">
                <p>Have already an account? <Link to="/Login" >< a class="register-link">Login Here</a></Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </body>

  );
}

export default Createac;


// import React from 'react'
// import './Createac.css';
// import './Login';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
// function Createac() {

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setFormErrors(validate(formValues));
    
//         if (Object.keys(formErrors).length === 0) {
//           try {
//             await axios.post('http://localhost:8080/createac', formValues); // Replace the URL with your backend API endpoint
//             console.log('Registration successful!');
//           } catch (error) {
//             console.error('Registration failed:', error);
//           }
        
//     return (
//     <body>
   
    
//     <div class="l-background"></div>
//     <div class="l-container">

//         <div class="create-section">
//             <div class="form-box login">
//                 <form action="">

//                     <h2>CREATE AN ACCOUNT</h2>
//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='First Name' required/>
//                     </div>

//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='Last Name' required/>
//                     </div>

//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='Contact' required/>
//                     </div>

//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
//                         <input type="password" placeholder='Password'required/>
//                     </div>

//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
//                         <input type="confirm password" placeholder='Confirm Password'required/>
//                     </div>

//                     <button class="l-btn">Sign Up</button>
//                     <div class="create-account">
//                         <p>Have already an account? <Link to="/Login" >< a class="register-link">Login Here</a></Link></p>
//                     </div>
//                 </form>
//             </div>
//             </div>
//         </div>
    
// </body>
    
//   )
// }


// export default Createac


// import React from 'react'
// import './Createac.css';
// import './Login'
// function createac() {
//   return (
//     <body>
//    <header class="cheader">
//    </header>
    
//     <div class="background"></div>
//     <div class="container">

//         <div class="login-section">
//             <div class="form-box login">
//                 <form action="">
//                     <h2>CREATE AN ACCOUNT</h2>
//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='Name' required/>
//                     </div>
//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='Username' required/>
//                     </div>
//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='Contact' required/>
//                     </div>
//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
//                         <input type="password" placeholder='Password'required/>
//                     </div>
//                     <div class="input-box">
//                         <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
//                         <input type="confirm password" placeholder='Confirm Password'required/>
//                     </div>
//                     <button class="btn">Sign Up</button>
//                     <div class="create-account">
//                         <p>Have already an account? <a href="#" class="register-link">Login Here</a></p>
//                     </div>
//                 </form>
//             </div>
//             </div>
//         </div>
    
// </body>
    
//   )
// }

// export default createac
// import React from 'react'
// import './Createac.css';
// import './Login';
// import {Link} from 'react-router-dom';
// function createac() {
//   return (
//     <body>
//    <header class="cheader">
//    </header>
    
//     <div class="background"></div>
//     <div class="c-container">

//         <div class="login-section">
//             <div class="form-box login">
//                 <form action="">
//                     <h2>CREATE AN ACCOUNT</h2>
//                     <div class="c-input-box">
//                         <span class="c-icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='Name' required/>
//                     </div>
//                     <div class="c-input-box">
//                         <span class="c-icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='Username' required/>
//                     </div>
//                     <div class="c-input-box">
//                         <span class="c-icon"><i class='bx bxs-envelope'></i></span>
//                         <input type="text" placeholder='Contact' required/>
//                     </div>
//                     <div class="c-input-box">
//                         <span class="c-icon"><i class='bx bxs-lock-alt' ></i></span>
//                         <input type="password" placeholder='Password'required/>
//                     </div>
//                     <div class="c-input-box">
//                         <span class="c-icon"><i class='bx bxs-lock-alt' ></i></span>
//                         <input type="confirm password" placeholder='Confirm Password'required/>
//                     </div>
//                     <button class="c-btn"> Sign Up</button>
//                     <div class="create-account">
//                         <p>Have already an account? <Link to="/Login" >< a class="register-link">   Login Here</a></Link></p>
//                     </div>
//                 </form>
//             </div>
//             </div>
//         </div>
    
// </body>
    
//   )
// }

// export default createac