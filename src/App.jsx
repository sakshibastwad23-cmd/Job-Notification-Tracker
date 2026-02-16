import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import DataEntry from './pages/DataEntry'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <Router>
      <div className="app">
        {isAuthenticated && <NavBar user={user} onLogout={handleLogout} />}
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/signup" 
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Signup onSignup={handleLogin} />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? <Dashboard user={user} /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/data-entry" 
            element={
              isAuthenticated ? <DataEntry /> : <Navigate to="/login" />
            } 
          />
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
