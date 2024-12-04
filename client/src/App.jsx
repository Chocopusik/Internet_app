import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Market from './Market/Market'
import Chat from './components/Chat/Chat';
import HomePage from './HomePage';
import { Login, Register } from './components/AuthForm';
import Logout from './components/Logout/Logout';
import ProtectedRoute from './components/ProtectedRoute';
//import LogoutConfirm from './components/Logout/LogoutConfirm'; 
function App() {
  const handleLogout = () => {
    
    // Подтверждение выхода
    const confirmed = window.confirm("Вы действительно хотите выйти?");
    if (confirmed) {
        localStorage.removeItem('token'); // Удаляем токен
        window.location.href = '/login'; // Перенаправляем на страницу входа
    }
};
  return(
    <>
    <div className="item-container">
    <nav>
                    
        <button onClick={handleLogout}>Выйти</button> {/* Кнопка выхода */}
    </nav>
    <Routes>
      <Route path='/items' element={<ProtectedRoute component={Market} />} />
      <Route path='/chat' element={<ProtectedRoute component={Chat} />} />
      <Route path="/" element={<ProtectedRoute component={HomePage} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
    </div>
    </>
)

}

export default App;
