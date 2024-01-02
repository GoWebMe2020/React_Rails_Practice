import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AuthForm.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const { email, password, passwordConfirmation } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + '/users', {
        user: { ...formData }
      });
      localStorage.setItem('authToken', response.data.user.token);
      navigate('/protected_page');
      toast.success("You have successfully created an account!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="passwordConfirmation">Password Confirmation:</label>
        <input
          id="passwordConfirmation"
          type="password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
