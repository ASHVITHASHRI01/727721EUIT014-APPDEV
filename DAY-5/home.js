import React from 'react'
import './home.css';
import Contact from './contact';
// import Navbar from './Navbar';
function Home() {
  return (
    <div>
      {/* <Navbar/> */}
  <header class="header">
  <img src="C:\Users\ashuk\gardens\src\plant.png" width={100}></img>
    <a href="home" class="logo">Plant-Me</a>
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
    <div class="intro">
      <h1>Welcome To Plant-Me</h1>
      <p></p>
      {/* <button>Explore</button> */}
    </div>
    <div class="about-me">
    </div>
    </main>
  
  </div>
)
}

export default Home



// <header>
//   <img src="https://www.example.com/image.jpg" alt="Example image">
// </header>



// import React from 'react'
// import Navbar from './Navbar'
// import './home.css'
// function Home() {
//   return (
//     <div>
//       <Navbar/>
//       <main>
//         <h1>Hello</h1>
//       </main>
//     </div>
//   )
// }

// export default Home