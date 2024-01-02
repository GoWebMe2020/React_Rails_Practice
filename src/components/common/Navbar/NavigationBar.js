import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './NavigationBar.css';

function Navigation() {
  const isUserLoggedIn = !!localStorage.getItem('authToken');
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const token = localStorage.getItem('authToken');
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/users/sign_out`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      localStorage.removeItem('authToken');
      navigate('/signin');
      toast.success("You have successfully signed out. Hope to see you again soon.");
    } catch (error) {
      toast.error("Oops. Something went wrong. Please try again.");
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        {!isUserLoggedIn && <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>}
        {!isUserLoggedIn && <li className="nav-item"><Link to="/signin" className="nav-link">SignIn</Link></li>}
        {isUserLoggedIn && <li className="nav-item"><Link to="/protected_page" className="nav-link">Protected Page</Link></li>}
        {isUserLoggedIn && <li className="nav-item"><button className="sign-out-btn" onClick={handleSignOut} aria-label="Sign Out">Sign Out</button></li>}
      </ul>
    </nav>
  );
}

export default Navigation;
