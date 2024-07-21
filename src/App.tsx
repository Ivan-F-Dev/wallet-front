import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './features/auth/Register';
import Login from './features/auth/Login';
import Dashboard from './features/dashboard/Dashboard';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;