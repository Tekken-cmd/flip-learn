import React, { useState } from 'react';
import './signUpPage.css';
const SignUpPage = () => {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isSigned, setIsSigned] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    // prevValue is just a usual prop to assign its previous value as current value
    setContact((prevValue) => {
      if (name === "userName") {
        return {
          userName: value,
          email: prevValue.email,
          password: prevValue.password,
          confirmPassword: prevValue.confirmPassword
        };
      } else if (name === "email") {
        return {
          userName: prevValue.userName,
          email: value,
          password: prevValue.password,
          confirmPassword: prevValue.confirmPassword
        };
      } else if (name === "password") {
        return {
          userName: prevValue.userName,
          email: prevValue.email,
          password: value,
          confirmPassword: prevValue.confirmPassword
        };
      } else if (name === "confirmPassword") {
        return {
          userName: prevValue.userName,
          email: prevValue.email,
          password: prevValue.password,
          confirmPassword: value
        };
      }
    });
  }

  function submitContactInfo(event) { // to save user's contact info in Database (future work) 
    console.log(contact);
    
    emptyString();
    event.preventDefault();
  }

  function isLogged(event) { // to check if the user is already logged in or not 
    setIsSigned(!isSigned);
    console.log(isSigned);

    emptyString();
    event.preventDefault();
  }

  function handleLogIn(event) {

    if(contact.userName !== "" && contact.password !== "") {
      alert("Successfully Logged In!");
    } else {
      alert("Please provide valid data!");
    }

    emptyString();
    event.preventDefault();
  }

  function emptyString(){ //Empty the string entered after "sign up" or "log in" is pressed.
    setContact(() => {
      return {
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    })
  }

  return (
    <div className="sign-up-container">
    
      {isSigned ? (<h1>Welcome, {contact.userName}!</h1>) : (<h1>Create an account!</h1>)}

      <form className="sign-up-form">
        <input
          onChange={handleChange}
          name="userName"
          placeholder="User name"
          value={contact.userName}
        />
        {!isSigned && 
        <input
          onChange={handleChange}
          type='email'
          name="email"
          placeholder="Email"
          value={contact.email}
        />}
        <input
          onChange={handleChange}
          type='password'
          name="password"
          placeholder="Password"
          value={contact.password}
        />
        {!isSigned && 
        <input
          onChange={handleChange}
          type='password'
          name="confirmPassword"
          placeholder="Confirm password"
          value={contact.confirmPassword}
        />}

        {/* The User already has an account */}
        {isSigned && <button className="signUpButton" onClick={handleLogIn}>Log In</button>}
        {isSigned && <p>Haven't registered yet? Then</p>}
        {isSigned && <button className="textButton" onClick={isLogged}>Sign up</button>}
        
        {/* The User doesn't have an account */}
        {!isSigned && <button className="signUpButton" onClick={submitContactInfo}>Sign Up</button>}
        {!isSigned && <p>Already have an account? Then</p>}
        {!isSigned && <button className="textButton" onClick={isLogged}>Log in</button>}
        
      </form>
    </div>
  );
}

export default SignUpPage;