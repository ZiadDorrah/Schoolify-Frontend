import React from 'react';
import { Navigate } from "react-router-dom";
import { getAuthToken } from './getAuthToken'; 

const ProtectedRoute = ({ children }) => {

    const token = getAuthToken();
    if (!token) {
        return <Navigate to="/login" replace />;
        // replace : deletes the intended route from the history stack
  }
  return children;
};

export default ProtectedRoute;
