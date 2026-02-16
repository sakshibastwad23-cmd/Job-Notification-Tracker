import { useState, useEffect } from 'react'
import './Dashboard.css'

function Dashboard({ user }) {
  const [stats, setStats] = useState({
    totalUsers: 1247,
    activeProjects: 89,
    completedTasks: 342,
    revenue: 45678
  })

  // Simulate data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 3),
        activeProjects: prev.activeProjects + (Math.random() > 0.7 ? 1 : 0),
        completedTasks: prev.completedTasks + Math.floor(Math.random() * 2)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const chartData = [
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 78 },
    { label: 'Mar', value: 82 },
    { label: 'Apr', value: 75 },
    { label: 'May', value: 90 },
    { label: 'Jun', value: 88 }
  ]

  const maxValue = Math.max(...chartData.map(d => d.value))

  return (
    <div className="kn-page-container">
      <div className="kn-context-header">
        <h1 className="kn-context-header-title">Dashboard</h1>
        <p className="kn-context-header-subtext">
          Welcome back, {user?.name || 'User'}. Here's an overview of your data.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="kn-stats-grid">
        <div className="kn-stat-card">
          <div className="kn-stat-label">Total Users</div>
          <div className="kn-stat-value">{stats.totalUsers.toLocaleString()}</div>
          <div className="kn-stat-change positive">+12% from last month</div>
        </div>

        <div className="kn-stat-card">
          <div className="kn-stat-label">Active Projects</div>
          <div className="kn-stat-value">{stats.activeProjects}</div>
          <div className="kn-stat-change positive">+5 this week</div>
        </div>

        <div className="kn-stat-card">
          <div className="kn-stat-label">Completed Tasks</div>
          <div className="kn-stat-value">{stats.completedTasks}</div>
          <div className="kn-stat-change positive">+23 today</div>
        </div>

        <div className="kn-stat-card">
          <div className="kn-stat-label">Revenue</div>
          <div className="kn-stat-value">${stats.revenue.toLocaleString()}</div>
          <div className="kn-stat-change positive">+8% from last month</div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="kn-dashboard-section">
        <div className="kn-card-white">
          <h3 className="kn-card-title">Monthly Performance</h3>
          <p className="kn-card-description">User engagement over the past 6 months</p>
          
          <div className="kn-chart-container">
            <div className="kn-chart-bars">
              {chartData.map((item, index) => (
                <div key={index} className="kn-chart-bar-wrapper">
                  <div 
                    className="kn-chart-bar"
                    style={{ 
                      height: `${(item.value / maxValue) * 100}%`,
                      minHeight: '20px'
                    }}
                  >
                    <span className="kn-chart-value">{item.value}</span>
                  </div>
                  <span className="kn-chart-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="kn-dashboard-section">
        <div className="kn-card">
          <h3 className="kn-card-title">Recent Activity</h3>
          <div className="kn-activity-list">
            <div className="kn-activity-item">
              <div className="kn-activity-icon"></div>
              <div className="kn-activity-content">
                <div className="kn-activity-title">New user registered</div>
                <div className="kn-activity-time">2 minutes ago</div>
              </div>
            </div>
            <div className="kn-activity-item">
              <div className="kn-activity-icon"></div>
              <div className="kn-activity-content">
                <div className="kn-activity-title">Project completed</div>
                <div className="kn-activity-time">15 minutes ago</div>
              </div>
            </div>
            <div className="kn-activity-item">
              <div className="kn-activity-icon"></div>
              <div className="kn-activity-content">
                <div className="kn-activity-title">Task assigned</div>
                <div className="kn-activity-time">1 hour ago</div>
              </div>
            </div>
            <div className="kn-activity-item">
              <div className="kn-activity-icon"></div>
              <div className="kn-activity-content">
                <div className="kn-activity-title">Data updated</div>
                <div className="kn-activity-time">2 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
