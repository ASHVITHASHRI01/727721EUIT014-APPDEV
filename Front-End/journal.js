import React, { useState } from 'react';
import './journal.css';
import plant02 from './plant.png';
import jour2 from './jour2.jpg';
const Journal = ({ onAddEntry }) => {
  const [entry, setEntry] = useState('');

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (entry.trim() !== '') {
      onAddEntry(entry);
      setEntry('');
    }
  };

  return (
    <div>
    <header class="header">
  <img src={plant02} width={70}></img>
    <a href="home" class="logo">Plant-Me</a>
    <nav class="nav-items">
    <a href="home">Home</a>
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

    <div className='noted'>
  <h2>Create your Journal Here</h2>
    <form className='form-jour' onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your journal entry here..."
        value={entry}
        onChange={handleInputChange}
      />
      <p></p>
      <button className='jour-btn' type="submit">Add Journal</button>
    </form>
    {/* function onAddEntry(entry) {
  // Do something with the entry.
} */}
    </div>
    </div>
  );
};

export default Journal;