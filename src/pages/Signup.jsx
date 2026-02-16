import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Signup({ onSignup }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Simulate signup
    onSignup({
      name: formData.name,
      email: formData.email
    })
  }

  return (
    <div className="kn-auth-page">
      <div className="kn-auth-container">
        <div className="kn-auth-header">
          <h1 className="kn-heading-1">Create your account</h1>
          <p className="kn-body-text">Get started with your free account today</p>
        </div>

        <form className="kn-auth-form" onSubmit={handleSubmit}>
          {error && (
            <div className="kn-error-state">
              <div className="kn-error-title">Registration failed</div>
              <div className="kn-error-message">{error}</div>
            </div>
          )}

          <div className="kn-form-group">
            <label htmlFor="name" className="kn-caption">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="kn-input"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="kn-form-group">
            <label htmlFor="confirmPassword" className="kn-caption">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="kn-input"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="kn-button kn-button-primary kn-auth-submit">
            Create Account
          </button>

          <div className="kn-auth-footer">
            <span className="kn-caption">Already have an account?</span>
            <Link to="/login" className="kn-auth-link">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
