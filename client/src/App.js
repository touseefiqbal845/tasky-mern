import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MiniDrawer from "./Layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Register from "./Pages/Authentications/Register";
import Login from "./Pages/Authentications/Login";
import ForgotPassword from "./Pages/Authentications/Forgotpassword";
import ResetPassword from "./Pages/Authentications/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
              <MiniDrawer>
                <Dashboard />
              </MiniDrawer>
            // </ProtectedRoute>
          }
        />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;


