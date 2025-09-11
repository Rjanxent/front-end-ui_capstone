import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from './pages/AdminDashboard';
import AdminPreventiveMaint from './pages/AdminPreventiveMaint';
import RegisterService from './pages/RegisterService';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register_service" element={<RegisterService />} />  
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/preventive" element={<AdminPreventiveMaint />} />  
      </Routes>
    </Router>
    </div>
  );
}

export default App
