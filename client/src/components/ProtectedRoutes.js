import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import checkAuthentication from "../services/helpers";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const result = await checkAuthentication();
      setIsAuthenticated(result.isAuthenticated);
    };
    verifyAuth();
  }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>; 
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
