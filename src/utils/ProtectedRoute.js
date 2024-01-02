import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../utils/AuthContext'; // Ensure correct import

const ProtectedRoute = ({ children }) => {
  const { isUserLoggedIn } = useContext(AuthContext);

  if (!isUserLoggedIn) {
    toast.info("Please sign in to access this page.");
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
