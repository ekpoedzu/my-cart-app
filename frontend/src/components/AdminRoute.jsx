// src/components/AdminRoute.jsx
// src/components/AdminRoute.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


/*const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in
    console.log("Checking admin access:", user);
    return <Navigate to="/login" />;
  }

  if (!user.isAdmin) {
    // Logged in but not admin
    console.log('⛔ Not admin, redirecting to home');
    return <Navigate to="/" />;
    
  }*/

    const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user || !user.isAdmin) {
    return <Navigate to="/unauthorized" />;
  }




  return children;
};

export default AdminRoute;
