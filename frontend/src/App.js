import { BrowserRouter, Routes, Route } from "react-router-dom"; // Added BrowserRouter here
import Savings from "./pages/Savings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword";
import Dashboard from "./pages/Dashboard";
import Loan from "./pages/Loan";
import PayLoan from "./pages/PayLoan";
import ApplyLoan from "./pages/ApplyLoan";

function App() {
  return (
    // The basename must match your GitHub repository name exactly
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;