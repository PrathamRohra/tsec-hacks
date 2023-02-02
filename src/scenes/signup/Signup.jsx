import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDOB] = useState('');
    const [gender, setGender] = useState('Choose...');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();

      try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res);
        await setDoc(doc(db, "users", res.user.uid), {
          name,
          email,
          password,
          date,
          gender,
        });

        navigate('/login');


      }catch(err){
          console.log(err);
      }

    };

  

  return (
      <form onSubmit={handleSubmit}>
          <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
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
           <br />
      <label>
        DOB
        <input
          type="date"
          value={date}
          onChange={(event) => setDOB(event.target.value)}
        />
          </label>
           <label>
        Gender
         <select value={gender} onChange={(event) => setGender(event.target.value)}>
          <option value="Choose..." disabled>Choose...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer Not to say">Prefer Not to Say</option>
        </select>
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
