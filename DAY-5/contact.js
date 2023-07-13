import React from 'react'
import './contact.css'
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    // <div class="intro">
    //   <h1>Welcome To Plant-Me</h1>
    //   <p></p>
    // <button>Explore</button> 
    // </div>
    //<div class="about-me">
    //</div> 
    <div className="contactbg">
      <header class="header">
  {/* <img src="C:\Users\ashuk\gardens\src\plant.png" width={100}></img> */}
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
    <div className="container-mt-5">
      <h2 className="mb-3">Contact</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="c-form-control" type="text" id="name" required />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="c-form-control" type="email" id="email" required />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="c-form-control" id="message" required />
        </div>
        <button className="c-btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </div>
    // </div>
  )
}
export default Contact