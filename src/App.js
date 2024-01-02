import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Register from './components/Auth/Register';
import SignIn from './components/Auth/SignIn';
import Home from './components/specific/Home';
import Navigation from './components/common/Navbar/NavigationBar';
import ProtectedPage from './components/specific/ProtectedPage';
import { AuthProvider } from './utils/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='landing-container'>
          <Navigation />
          <ToastContainer position="top-right" style={{ width: "40%", top: '60px' }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/protected_page" element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
