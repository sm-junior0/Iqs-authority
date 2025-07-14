import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './pages/Public/Home';

// Auth Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import VerifyCode from './pages/Auth/VerifyCode';
import ResetPassword from './pages/Auth/ResetPassword';

// Dashboard
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            
            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/verify-code" element={<VerifyCode />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />

          <Route path="/dashboard/trainer" element={<Dashboard />} />
          <Route path="/dashboard/admin" element={<Dashboard />} />
          <Route path="/dashboard/evaluator" element={<Dashboard />}/>
          <Route path="/dashboard/school" element={<Dashboard />}/>
            
            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;