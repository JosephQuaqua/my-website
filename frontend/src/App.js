import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword";
import Dashboard from "./pages/Dashboard";
import Savings from "./pages/Savings";
import Loan from "./pages/Loan";
import Investment from "./pages/Investment";
import Exchange from "./pages/Exchange";
import Monitors from "./pages/Monitors";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter basename="/my-website">
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/savings" element={
          <ProtectedRoute>
            <Savings />
          </ProtectedRoute>
        } />

        <Route path="/loan" element={
          <ProtectedRoute>
            <Loan />
          </ProtectedRoute>
        } />

        <Route path="/investment" element={
          <ProtectedRoute>
            <Investment />
          </ProtectedRoute>
        } />

        <Route path="/exchange" element={
          <ProtectedRoute>
            <Exchange />
          </ProtectedRoute>
        } />

        <Route path="/monitors" element={
          <ProtectedRoute>
            <Monitors />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
