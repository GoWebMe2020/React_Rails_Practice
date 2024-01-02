import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AuthForm.css';

function SignIn() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/sign_in`, {
        user: credentials
      });
      localStorage.setItem('authToken', response.data.user.token);
      navigate('/protected_page');
      toast.success("Signed in successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Either your username or password is incorrect. Please try again");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
