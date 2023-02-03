import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
// import GeoAPI from '../GeoAPI';
import './signup.css'

function Signup() {
  const [loc, setLoc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDOB] = useState("");
  const [gender, setGender] = useState("Choose...");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      await setDoc(doc(db, "users", res.user.uid), {
        name,
        email,
        password,
        date,
        gender,
        loc,
      });

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="App">
        <div className="auth-form-container">
          <h1>Sign Up</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              className="new-input"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label>Email:</label>
            <input
              type="email"
              className="new-input"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <br />
            <label>Password:</label>
            <input
              className="new-input"
              placeholder="******"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <br />
            <br />
            <label>
              DOB
              <input
                type="date"
                className="date-1"
                value={date}
                onChange={(event) => setDOB(event.target.value)}
              />
            </label>
            <label>
              Gender
              <select
                className="gender"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <option value="Choose..." disabled>
                  Choose...
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer Not to say">Prefer Not to Say</option>
              </select>
            </label>
            <br />

            <input
              type="text"
              value={loc}
              placeholder="Enter your City"
              onChange={(event) => setLoc(event.target.value)}
            />

            <button className="button-sign" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
