import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword"; 
import Dashboard from "./pages/Dashboard";
import Savings from "./pages/Savings";
import Loan from "./pages/Loan";
import PayLoan from "./pages/PayLoan";
import ApplyLoan from "./pages/ApplyLoan";
import SavingPayment from "./pages/SavingPayment";
import LoanApplication from "./pages/LoanApplication";
import Investment from "./pages/Investment";
import Exchange from "./pages/Exchange";
 

function App() {
  return (
   
    <BrowserRouter basename="/my-website">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/pay-loan" element={<PayLoan />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/saving-payment" element={<SavingPayment />} />
        <Route path="/loan-application" element={<LoanApplication />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/exchange" element={<Exchange />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;