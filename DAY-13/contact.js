// // 

// import React from 'react'
// import plant02 from './plant.png';
// import './contact.css';
// const Contact = () => {
//   const [formStatus, setFormStatus] = React.useState('Send')
//   const onSubmit = (e) => {
//     e.preventDefault()
//     setFormStatus('Submitting...')
//     const { name, email, message } = e.target.elements
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     }
//     console.log(conFom)
//   }
//   return (
//     <div className="contactbg">
//       <header class="header">
//       <img src={plant02} width={70}></img>
//     <a href="home" class="logo">Plant-Me</a>
//     <nav class="nav-items">
//       <a href="home">Home</a>
//       <a href="garden">Garden Calender</a>
//       <a href="#">Garden Journal</a>
//       <a href="remainder">Remainder</a> 
//       <a href="about">About</a>
//       <a href="contact">Contact</a> 
//       <a href="login">Login</a>
//       <a href="createac">Register</a>
      
//     </nav>
//   </header>
//     <div className="container-mt-55">
//       <center><h2 className="mb-3">Contact</h2>
//       <form onSubmit={onSubmit}>
//         <div className="mb-4">
//           <label className="form-label" htmlFor="name">
//             Name
//           </label>
//           <input className="c-form-control" type="text" id="name" required />
//         </div>
//         <div className="mb-4">
//           <label className="form-label" htmlFor="email">
//             Email
//           </label>
//           <input className="c-form-control" type="email" id="email" required />
//         </div>
//         <div className="mb-4">
//           <label className="form-label" htmlFor="message">
//             Message
//           </label>
//           <textarea className="c-form-control" id="message" required />
//         </div>
//         <center>
//         <button className="c-btn btn-danger" type="submit">
//           {formStatus}
//         </button></center>
//       </form>
//       </center>
//     </div>
//     </div>
    // </div>
//   )
// }
// export default Contact

import React, { useEffect, useState } from 'react';
import plant02 from './plant.png';
import './contact.css'; // Import the CSS file for the component
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handleNameChange = (e) =>{
    setName(e.target.value);
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  }
  const handleMessageChange = (e) =>{
    setMessage(e.target.value);
  }

  const feedSubmit = async (e) => {
    e.preventDefault();
    const data = {"name":name,"email":email,"message":message};
    console.log(data);
    axios.post("http://localhost:8081/Feedback/addfed",data);
    toast.success('Feedback Submitted Successfully !', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
  setTimeout(() => {
      window.location.reload();
  }, 2500);
  }

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
    {/* <Navbar /> */}
    <div className='outer-cont'>
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <p>
        We'd love to hear from you! Feel free to reach out to us!!
      </p>
   
      <h2>Send Us a Message</h2>
      <form className="contact-form" onSubmit={feedSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" name="name" value={name} onChange={handleNameChange} required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required/>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={message} onChange={handleMessageChange} required/>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
    {/* <Footer /> */}
    </div>
  );
};

export default Contact;