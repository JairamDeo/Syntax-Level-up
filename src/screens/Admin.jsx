import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const handleAdminLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/adminlogin', formData);
      console.log(response.data);
      alert('Admin login successfully');
      setFormData({ username: '', password: '' }); // Clear all fields

      localStorage.setItem("authToken1",response.authToken1);
      console.log(localStorage.getItem("authToken1"));
      navigate("/");

    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div style={{ marginBottom: '0' }}>
      <div className='logpage'>
        <div className='wrapper' style={{ background: '#081b29', boxShadow: '0 0 25px red', border: '3px solid red' }}>
          <span className='bg-animate' style={{ background: 'linear-gradient(45deg, #081b29, red)', borderBottom: '3px solid red' }}></span>
          <span className='bg-animate2'></span>
          <div className='form-box login'>
            <h2 className='animation' style={{ '--i': '0', '--j': '21;' }}>Admin Login</h2>
            <form onSubmit={handleAdminLoginSubmit}>
              <div className='input-box admininputbox animation' style={{ '--i': '2', '--j': '23;' }}>
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} required></input>
                <label>Username: </label>
                <i class="fa-regular fa-circle-user"></i>
              </div>
              <div className='input-box admininputbox animation' style={{ '--i': '3', '--j': '24;' }}>
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} required></input>
                <label>Password: </label>
                <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} icon`} onClick={togglePasswordVisibility}></i>
              </div>
              <button type='submit' className='logbtn logbtn2 animation' style={{ '--i': '4', '--j': '24;' }}>Login</button>
              
            </form>
          </div>
          <div className='info-text login'>
            <h2 className='animation' style={{ '--i': '0;', '--j': '20;' }}>Syntax Level Up</h2>
            <p className='animation' style={{ '--i': '1;', '--j': '21;' }}> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
