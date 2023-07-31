import React from 'react'
import plant02 from './plant.png';
import sow01 from './sow01.jpg';
import jan from './jan.jpg';
import april from './april.jpg';
import july1 from './july1.jpg';
import oct from './oct.jpg'
import './garden.css'
function garden() {
  return (
    <div>
  <header class="header">
  <img src={plant02} width={70}></img>
    <a href="home" class="logo">Plant-Me</a>
    <nav class="nav-items">
    <a href="home">Home</a>
    <a href="garden">Garden Calender</a>
    <a href="journal">Garden Journal</a> 
    <a href="remainder">Remainder</a>
    <a href="about">About</a>
    <a href="contact">Contact</a> 
    <a href="login">Login</a>
    <a href="createac">Register</a>
    </nav>
  </header>
  <main>
    <div class="g-intro">
      <h1>Garden Calender</h1>
      {/* <p></p>
      <button>Register</button> */}
    </div>
    {/* <div class="about-me">
      
    </div> */}
 <br></br>
    <div className="garden-image">
    <center>
      <a href="janlink">
        <img src={jan} width={700} height={400}  />
      </a>
      <div className="jan-desc">
        <h5>Best Plants to Grow In January</h5>
        <h5>February & March</h5>
      </div> 
        
      <a href="aprillink">
        <img src={april} width={700} height={400}  />
      </a>
      <div className="april-desc">
        <h5>Best Plants to Grow In April</h5>
        <h5>May & June</h5>
      </div> 

      <center>
      <a href="julylink">
        <img src={oct} width={700} height={400}  />
      </a>
      <div className="jan-desc">
        <h5>Best Plants to Grow In July</h5>
        <h5>August & September</h5>
      </div> 

      <center>
      <a href="octlink">
        <img src={july1} width={700} height={400}  />
      </a>
      <div className="jan-desc">
        <h5>Best Plants to Grow In October</h5>
        <h5>November & December</h5>
      </div> 
        </center>
        </center>
        </center>
      </div>
    </main>
  
  </div>
)
}

export default garden