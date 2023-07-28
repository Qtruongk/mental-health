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

    if (
      usernameValue === 'Phat' &&
      passwordValue === 'testing' &&
      emailValue === 'testing@gmail.com'
    ) {
      // Redirect to the homepage if login is successful
      console.log('Redirecting to the homepage...');
      navigate('/main'); // Assuming the path for the homepage is '/'
    } else {
      window.alert('Wrong username or password or gmail. Check it again');
    }
  };

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