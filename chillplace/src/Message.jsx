// Message.jsx
import React, { useState } from 'react';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    const usernameValue = formData.username;
    const passwordValue = formData.password;
    const emailValue = formData.email;

    if (usernameValue === 'Phat' && passwordValue === '1' && emailValue === 'p@gmail.com') {

      window.location.href = '/home';
    }
    else {
      window.alert("Wrong username or password or gmail. Check it again");
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit} className='center-container'>
        <h1>Log in</h1>
        <div className='gap-head'></div>
        <div>
          <label htmlFor="username" className='bold-inp-text'>Username: </label>
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
          <label htmlFor="password" className='bold-inp-text'>Password: </label>
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
          <label htmlFor="email" className='bold-inp-text'>Email: </label>
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
    </div>
  );
};

export default FormComponent;
