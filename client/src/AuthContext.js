import React, { createContext, useState, useEffect } from "react";
import checkAuthentication from "./services/helpers";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthenticated: null, user: null });

  useEffect(() => {
    const fetchAuth = async () => {
      const result = await checkAuthentication();
      setAuth(result);
    };
    fetchAuth();
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      {auth.isAuthenticated === null ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};
