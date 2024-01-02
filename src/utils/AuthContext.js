import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const authToken = localStorage.getItem('authToken');
    console.log('authToken', authToken);
    setIsUserLoggedIn(!!authToken);
  };

  // Method to update the auth status (can be called after login/logout)
  const updateAuthStatus = (status) => {
    setIsUserLoggedIn(status);
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, updateAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
