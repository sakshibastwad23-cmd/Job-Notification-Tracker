import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    // Simulate authentication
    onLogin({
      email: formData.email,
      name: formData.email.split('@')[0]
    })
  }

  return (
    <div className="kn-auth-page">
      <div className="kn-auth-container">
        <div className="kn-auth-header">
          <h1 className="kn-heading-1">Welcome back</h1>
          <p className="kn-body-text">Sign in to continue to your account</p>
        </div>

        <form className="kn-auth-form" onSubmit={handleSubmit}>
          {error && (
            <div className="kn-error-state">
              <div className="kn-error-title">Authentication failed</div>
              <div className="kn-error-message">{error}</div>
            </div>
          )}

          <div className="kn-form-group">
            <label htmlFor="email" className="kn-caption">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="kn-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="kn-form-group">
            <label htmlFor="password" className="kn-caption">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="kn-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="kn-button kn-button-primary kn-auth-submit">
            Sign In
          </button>

          <div className="kn-auth-footer">
            <span className="kn-caption">Don't have an account?</span>
            <Link to="/signup" className="kn-auth-link">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
