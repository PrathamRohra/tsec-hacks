import React, { useState } from 'react';
import "./style.css";
// import "./App.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <>
    {/* <div className="auth-form-container">
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
    </div> */}
    <div className='App'>
    <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="button-28" type="submit">Log In</button>
            </form>
            {/* <button className="link-btn" type="submit">Don't have an account? Register here.</button> */}
          
        </div>
        </div>
    </>
  
  );
}

export default Login;
// onClick={() => props.onFormSwitch('register')}
// className="link-btn"