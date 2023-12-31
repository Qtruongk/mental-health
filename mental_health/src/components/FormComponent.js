// Message.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Message.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    const usernameValue = formData.username;
    const passwordValue = formData.password;
    const emailValue = formData.email;
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    if (
      usernameValue === 'Phat' &&
      passwordValue === 'testing' &&
      emailValue === 'testing@gmail.com'
    ) {
      // Set the isLoggedIn flag in localStorage to true
      localStorage.setItem('isLoggedIn', 'true');
      // Update the state to indicate the user has logged in
      setIsLoggedIn(true);

      // Redirect to the homepage if login is successful
      console.log('Redirecting to the homepage...');
      navigate('/main'); // Assuming the path for the homepage is '/'
    } else {
      window.alert('Wrong username or password or gmail. Check it again');
    }
  };

  // If the user is logged in, don't render the login form
  if (false) {
    return <p>Welcome back! You are already logged in.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className='center-container'>
      <h1>Contact Form</h1>
      <div>
        <label htmlFor="username">Username: </label>
        <input 
          type="text"
          id="username"
          name="username"
          className="PlaceHolder1"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          className="PlaceHolder2"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          className='PlaceHolder3'
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className='submit-btn'>Submit</button>
    </form>
  );
};

export default FormComponent;