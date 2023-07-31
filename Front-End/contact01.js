// import React from 'react'
// import plant02 from './plant.png';
// import './contact01.css';
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
//       <a href="journal">Garden Journal</a>
//       <a href="remainder">Remainder</a> 
//       <a href="about">About</a>
//       <a href="contact">Contact</a> 
//       <a href="login">Login</a>
//       <a href="createac">Register</a>
      
//     </nav>
//   </header>
//   <center>
//     <div className="container-mt-5">
//         <h2 className="mb-3">Contact</h2>
//       <form onSubmit={onSubmit}>
//         <div className="mb-4">
//       <center>
//           <label className="form-label" htmlFor="name">
//             Name
//           </label>
//           <input className="c-form-control" type="text" id="name" required />
//           </center>
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
//         <button className="c-btn btn-danger" type="submit">
//         <center> 
//           {formStatus}
//         </center>
//         </button>
//       </form>
//     </div>

//     </center>
//     </div>
//   )
// }
// export default Contact
import React, { useState } from 'react';
import './contact01.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', { name, email, message });
    // You can use Axios or other libraries to make API requests if needed
  };

  return (
    
    <div className="App">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
