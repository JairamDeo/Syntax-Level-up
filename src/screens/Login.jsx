
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../screens/Login.css';

export default function Login() {

  let navigate = useNavigate();

  const [activeWrapper, setActiveWrapper] = useState(false);
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "", mobile: "" });
  const [loginCredentials, setLoginCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [showPassword2, setShowPassword2] = useState(false); // State to track confirm password visibility

  const handleRegisterClick = () => {
    setActiveWrapper(true);
  };

  const handleLoginClick = () => {
    setActiveWrapper(false);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      alert("Please enter a valid email address.");
      return;
  }
  if (!credentials.mobile.match(/^[0-9]{10}$/)) {
      alert("Please enter a valid phone number!");
      return;
  }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        mobile: credentials.mobile        
      });
      if (response && response.data) {
        console.log(response.data);
        setCredentials({ name: "", email: "", password: "", confirmPassword: "", mobile: "" });
        setError(null);
        alert("Account created successfully!");
      } else {
        throw new Error("Invalid response received");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;
        if (errorMessage.includes('Email') && errorMessage.includes('Mobile')) {
          alert("This Account already exists. Please try logging in.");
        } else if (errorMessage.includes('Email')) {
          alert("This Email already exists. Please try logging in.");
        } else if (errorMessage.includes('Mobile')) {
          alert("This Mobile number already exists. Please try logging in.");
        } else {
          alert(errorMessage);
        }
      } else {
        alert("Error creating account. Please try again.");
      }
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: loginCredentials.email,
        password: loginCredentials.password,
      });
      if (response && response.data) {
        console.log(response.data);
        setLoginCredentials({ email: "", password: "" });
        setError(null);
        alert("Logged in successfully!");
        localStorage.setItem("authToken",response.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      } else {
        throw new Error("Invalid response received");
      }
    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    // Ensure mobile field only accepts numeric input
    if (name === 'mobile' && isNaN(value)) {
      return;
    }
    setCredentials({ ...credentials, [name]: value });
  };

  const onLoginChange = (event) => {
    setLoginCredentials({ ...loginCredentials, [event.target.name]: event.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2); // Toggle password visibility
  };


  
  return (
    <div>
      <div className='logpage'>
        <div className={`wrapper ${activeWrapper ? 'active' : ''}`}>
          <span className='bg-animate'></span>
          <span className='bg-animate2'></span>
          <div className='form-box login'>
            <h2 className='animation' style={{ '--i': '0', '--j': '21;' }}>Login</h2>
            <form id='loginform' onSubmit={handleLoginSubmit}>
              <div className='input-box animation' style={{ '--i': '2', '--j': '23;' }}>
                <input type='email' name='email' value={loginCredentials.email} onChange={onLoginChange} required></input>
                <label>Email: </label>
                <i className="fa-solid fa-envelope icon"></i>
              </div>
              <div className='input-box animation' style={{ '--i': '3', '--j': '24;' }}>
                <input type={showPassword ? 'text' : 'password'} name='password' value={loginCredentials.password} onChange={onLoginChange} required></input>
                <label>Password: </label>
                <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} icon`} onClick={togglePasswordVisibility}></i>
              </div>
              <button type='submit' id='loginbtn' className='logbtn animation' style={{ '--i': '4', '--j': '24;' }}>Login</button>
              <div className='logreg-link animation' style={{ '--i': '5', '--j': '25;' }}>
                <p>Don't Have an Account?<Link to="#" className='register-link' onClick={handleRegisterClick}>Sign Up</Link></p>
              </div>
            </form>
          </div>
          <div className='info-text login'>
            <h2 className='animation' style={{ '--i': '0;', '--j': '20;' }}>Syntax Level Up</h2>
            <p className='animation' style={{ '--i': '1;', '--j': '21;' }}> </p>
          </div>

          <div className='form-box register'>
            <h2 className='animation' style={{ '--i': '17;', '--j': '0;' }}>Sign Up</h2>
            <form id='signupform' onSubmit={handleSignupSubmit}>
              <div className='input-box animation' style={{ '--i': '18;', '--j': '1;' }}>
                <input type='text' name='name' value={credentials.name} onChange={onChange} required></input>
                <label>Name: </label>
                <i className="fa-solid fa-person icon"></i>
              </div>
              <div className='input-box animation' style={{ '--i': '19;', '--j': '2;' }}>
                <input type='email' name='email' value={credentials.email} onChange={onChange} required></input>
                <label>Email: </label>
                <i className="fa-solid fa-envelope icon"></i>
              </div>
              <div className='input-box animation' style={{ '--i': '19;', '--j': '2;' }}>
                <input type='ph' name='mobile' value={credentials.mobile} onChange={onChange} maxLength={10} required></input>
                <label>Mobile No.: </label>
                <i class="fa-solid fa-phone"></i>
              </div>            
              <div className='input-box animation' style={{ '--i': '20;', '--j': '3;' }}>
                <input type={showPassword ? 'text' : 'password'} name='password' value={credentials.password} onChange={onChange} required></input>
                <label>Password: </label>
                <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} icon`} onClick={togglePasswordVisibility}></i>
              </div>
              <div className='input-box animation' style={{ '--i': '21;', '--j': '4;' }}>
                <input type={showPassword2 ? 'text' : 'password'} name='confirmPassword' value={credentials.confirmPassword} onChange={onChange} required></input>
                <label>Confirm Password: </label>
                <i className={`fa-solid ${showPassword2 ? 'fa-eye' : 'fa-eye-slash'} icon`} onClick={togglePasswordVisibility2}></i>
              </div>
              <button type='submit' id='signupbtn' className='logbtn animation' style={{ '--i': '21;', '--j': '4;' }}>Sign Up</button>
              <div className='logreg-link animation' style={{ '--i': '22;', '--j': '5;' }}>
                <p>Already Have an Account?<Link to="#" className='login-link' onClick={handleLoginClick}>Login</Link></p>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
          <div className='info-text register'>
            <h2 className='animation' style={{ '--i': '17;', '--j': '0;' }}>Syntax Level Up</h2>
            <p className='animation' style={{ '--i': '18;', '--j': '1;' }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}

