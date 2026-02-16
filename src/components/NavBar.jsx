import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

function NavBar({ user, onLogout }) {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'kn-nav-link-active' : ''
  }

  return (
    <nav className="kn-nav-bar">
      <div className="kn-nav-container">
        <div className="kn-nav-left">
          <Link to="/dashboard" className="kn-nav-logo">
            KodNest Premium
          </Link>
        </div>
        
        <div className="kn-nav-center">
          <Link 
            to="/dashboard" 
            className={`kn-nav-link ${isActive('/dashboard')}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/data-entry" 
            className={`kn-nav-link ${isActive('/data-entry')}`}
          >
            Data Entry
          </Link>
        </div>

        <div className="kn-nav-right">
          <span className="kn-nav-user">{user?.name || user?.email || 'User'}</span>
          <button 
            className="kn-button kn-button-secondary kn-nav-logout"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
