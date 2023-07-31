import React from 'react'
import plant02 from './plant.png';
import './about.css';
import bg8 from './bg8.jpg'
function About() {
  return (
    <div>
  <header class="header">
  <img src={plant02} width={70}></img>
    <a href="home" class="logo">Plant-Me</a>
    <nav class="nav-items">
    <a href="home">Home</a>
    <a href="garden">Garden Calender</a>
    <a href="remainder">Remainder</a> 
      {/* <a href="#">Garden Journal</a>   */}
      <a href="about">About</a>
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="createac">Register</a>
    </nav>
  </header>
  <main>
    <div class="a-intro">
      <h1>About us</h1>
      
    </div>
    
    <div class="a-about">
        <p></p>
    <h2>Welcome to our Home Garden Application, where we help you unlock the beauty 
        and potential of your green spaces. At Home Garden, we are dedicated to providing a 
        seamless gardening experience for enthusiasts of all levels, from beginners to seasoned gardeners.</h2></div>
    <div class="a-about">
        <p></p>
        <h2>Our mission is to empower individuals to create and maintain their dream gardens right at home. 
            Whether you have a small balcony or a spacious backyard, our user-friendly
             application offers a wide range of features and resources to support your gardening journey.</h2>
    </div>
    </main>
  
  </div>
)
}

export default About