import React from 'react'
import './about.css';
function About() {
  return (
    <div>
  <header class="header">
    <a href="#" class="logo">Plant-Me</a>
    <nav class="nav-items">
    <a href="#">Garden Planning</a>
      <a href="#">Season</a>
      <a href="#">Remainder</a>
      <a href="#">Garden Journal</a>
      <a href="about">About</a>
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="createac">Register</a>
    </nav>
  </header>
  <main>
    <div class="a-intro">
      <h1>About us</h1>
      {/* <p></p>
      <button>Register</button> */}
    </div>
    {/* <div class="about-me">
      
      
    </div> */}
    <div class="a-about">
    <h2>Welcome to our Home Garden Application, where we help you unlock the beauty 
        and potential of your green spaces. At Home Garden, we are dedicated to providing a 
        seamless gardening experience for enthusiasts of all levels, from beginners to seasoned gardeners.</h2></div>

    </main>
  
  </div>
)
}

export default About