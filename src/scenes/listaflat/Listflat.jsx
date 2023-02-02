import React from 'react'
import { useState } from 'react';
import './listflat.css'


const Listflat = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email} Password: ${password}`);
      };
  
  return (
    <>
   <div className="auth-form-container">
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button className="link-btn" type="submit">Login</button>
    </form>
    </div> 
    
    </>
  )
}

export default Listflat
