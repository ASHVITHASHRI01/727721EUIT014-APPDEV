// import React from 'react'
// import './home.css';
// import Contact from './contact';
// import plant01 from './plant01.jpg';
// import plant02 from './plant.png';
// import plant03 from './plant03.jpg'
// import plant04 from './plant04.jpg'
// import plant05 from './plant05.jpg'
// import plant07 from './plant07.jpg';
// import { useDispatch, useSelector } from "react-redux";
// import { logout, selectUser } from "./redux/userSlice";
// import link1 from './link1';
// import { PhotoAlbum } from 'react-photo-album';
// import { useUser } from './usecontext';
// import plant from './plant.png'
// import Navbar from './Navbar';
// function Home() {
  // const { userEmail } = useUser();
//   return (
  //   <div>
  //     {/* <Navbar/> */}
  // <header class="header">
  // <img src={plant02} width={70}></img>
  //   <a href="home" class="logo">Plant-Me</a>
  //   <nav class="nav-items">
  //   {/* <a href="home">Home</a> */}
  //     <a href="garden">Garden Calender</a>
  //     {/* <a href="#">Season</a> */}
  //     <a href="journal">Garden Journel</a> 
  //     <a href="remainder">Remainder</a>
  //     <a href="about">About</a>
  //     <a href="contact">Contact</a> 
  //     <a href="login">Login</a>
  //     <a href="createac">Register</a>
  //   </nav>
  // </header>
  // <main>
   
  //   <div class="intro">
  //     <h1>Welcome to <img src={plant02} width={80}></img>Plant-Me</h1> 
  //     {/* <p>{userEmail}</p> */}
  //     </div>
  //   <div className="book">
  //     <h3>Gardens</h3>
  //     <h5>Our gardens have become more important than ever, 
  //       whether you’re lucky enough to have a sprawling country
  //        garden or you need small garden ideas. Our garden page 
  //        is full of inspiration, including our essential beginners
  //         guide to gardening and landscape design, tips on the
  //          best garden design apps to help you plan your planting,
  //           shopping guides for garden furniture or gifts for your 
  //           favourite gardener, and design ideas for decking, flower 
  //           gardens, front gardens, and much more.</h5>
      
  //     <h3> Explore</h3>
  //     <center>
  //   <div className="image-links-home">
  //     <div class="image-container">
  //     <a href="link1">
  //       <img src={plant01} width={750} height={390}  />
  //       </a> 
  //     <p></p>
  //     <div className="plant-desc">
  //       <h4>HOW TO PLANT A GRAVEL GARDEN</h4>
     
  //     </div> </div>
  //     <p></p>

  //     <a href="link2">
  //       <img src={plant07} width={750} height={480}className="image-link" />
  //     </a>
  //     <p></p>
  //     <div className="plant-desc">
  //       <h4>KNOW MORE ABOUT FLOWERS </h4>
  //     </div>

  //     <p></p>
  //     <a href="link3">
  //       <img src={plant04} width={750} height={480}className="image-link" />
  //     </a>
  //     <p></p>
  //     <div className="plant-desc">
  //       <h4> FRESH HERBS AND PLANTS YOU CAN GROW </h4>
  //     </div>
      
  //     <p></p> 
  //     <a href="link4">
  //       <img src={plant05} width={750} height={480}className="image-link" />
  //     </a>
  //     <p></p>
  //     <div className="plant-desc">
  //       <h4>VEGETABLES TO GROW IN YOUR HOME </h4>
  //     </div>
  //     <br></br>
  //     </div>
  //     </center> 
  //     </div>
  //   </main>

//   </div>
// ) 
// }

// export default Home





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import Contact from './contact';
import plant01 from './plant01.jpg';
import plant02 from './plant.png';
import plant03 from './plant03.jpg';
import plant04 from './plant04.jpg';
import plant05 from './plant05.jpg';
import plant07 from './plant07.jpg';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./redux/userSlice";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios.get('/api/data') // Replace this with your server endpoint
      .then((response) => {
        setData(response.data); // Assuming the response contains an array of data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const user= useSelector(selectUser);
	const dispatch = useDispatch();
	const handleLogout = (e) => {
	  e.preventDefault();
	  dispatch(logout());
	};
  return (
    <div>
      {/* <Navbar/> */}
  <header class="header">
  <img src={plant02} width={70}></img>
    <a href="home" class="logo">Plant-Me</a>
    <p>Welcome {user.name}</p>
    <nav class="nav-items">
    {/* <a href="home">Home</a> */}
      <a href="garden">Garden Calender</a>
      {/* <a href="#">Season</a> */}
      <a href="journal">Garden Journel</a> 
      <a href="remainder">Remainder</a>
      <a href="about">About</a>
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="createac">Register</a>
    </nav>
  </header>
  <main>
   
    <div class="intro">
      <h1>Welcome to <img src={plant02} width={80}></img>Plant-Me</h1> 
      {/* <p>{userEmail}</p> */}
      </div>
    <div className="book">
      <h3>Gardens</h3>
      <h5>Our gardens have become more important than ever, 
        whether you’re lucky enough to have a sprawling country
         garden or you need small garden ideas. Our garden page 
         is full of inspiration, including our essential beginners
          guide to gardening and landscape design, tips on the
           best garden design apps to help you plan your planting,
            shopping guides for garden furniture or gifts for your 
            favourite gardener, and design ideas for decking, flower 
            gardens, front gardens, and much more.</h5>
      
      <h3> Explore</h3>
      <center>
    <div className="image-links-home">
      <div class="image-container">
      <a href="link1">
        <img src={plant01} width={750} height={390}  />
        </a> 
      <p></p>
      <div className="plant-desc">
        <h4>HOW TO PLANT A GRAVEL GARDEN</h4>
     
      </div> </div>
      <p></p>

      <a href="link2">
        <img src={plant07} width={750} height={480}className="image-link" />
      </a>
      <p></p>
      <div className="plant-desc">
        <h4>KNOW MORE ABOUT FLOWERS </h4>
      </div>

      <p></p>
      <a href="link3">
        <img src={plant04} width={750} height={480}className="image-link" />
      </a>
      <p></p>
      <div className="plant-desc">
        <h4> FRESH HERBS AND PLANTS YOU CAN GROW </h4>
      </div>
      
      <p></p> 
      <a href="link4">
        <img src={plant05} width={750} height={480}className="image-link" />
      </a>
      <p></p>
      <div className="plant-desc">
        <h4>VEGETABLES TO GROW IN YOUR HOME </h4>
      </div>
      <br></br>
      </div>
      </center> 
      </div>
    </main>
</div>
  );
}

export default Home;
