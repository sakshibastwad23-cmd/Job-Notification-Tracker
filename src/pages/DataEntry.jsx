import { useState } from 'react'
import './DataEntry.css'

function DataEntry() {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    category: '',
    priority: 'medium',
    status: 'pending',
    startDate: '',
    endDate: '',
    budget: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    setError('')
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.projectName || !formData.description || !formData.category) {
      setError('Please fill in all required fields')
      return
    }

    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setError('')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        projectName: '',
        description: '',
        category: '',
        priority: 'medium',
        status: 'pending',
        startDate: '',
        endDate: '',
        budget: '',
        notes: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="kn-page-container">
      <div className="kn-context-header">
        <h1 className="kn-context-header-title">Data Entry</h1>
        <p className="kn-context-header-subtext">
          Create and manage project entries with detailed information
        </p>
      </div>

      <div className="kn-workspace">
        <div className="kn-workspace-primary">
          <form className="kn-data-entry-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="kn-success-state">
                <div className="kn-success-title">Data submitted successfully</div>
                <div className="kn-success-message">Your project entry has been saved.</div>
              </div>
            )}

            {error && (
              <div className="kn-error-state">
                <div className="kn-error-title">Submission failed</div>
                <div className="kn-error-message">{error}</div>
              </div>
            )}

            <div className="kn-card-white">
              <h3 className="kn-card-title">Project Information</h3>
              <p className="kn-card-description">Basic details about your project</p>

              <div className="kn-form-row">
                <div className="kn-form-group">
                  <label htmlFor="projectName" className="kn-caption">
                    Project Name <span className="kn-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    className="kn-input"
                    placeholder="Enter project name"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="kn-form-group">
                  <label htmlFor="category" className="kn-caption">
                    Category <span className="kn-required">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="kn-input"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="kn-form-group">
                <label htmlFor="description" className="kn-caption">
                  Description <span className="kn-required">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="kn-textarea"
                  placeholder="Describe your project"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="kn-card-white">
              <h3 className="kn-card-title">Project Details</h3>
              <p className="kn-card-description">Additional project configuration</p>

              <div className="kn-form-row">
                <div className="kn-form-group">
                  <label htmlFor="priority" className="kn-caption">Priority</label>
                  <select
                    id="priority"
                    name="priority"
                    className="kn-input"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div className="kn-form-group">
                  <label htmlFor="status" className="kn-caption">Status</label>
                  <select
                    id="status"
                    name="status"
                    className="kn-input"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="kn-form-row">
                <div className="kn-form-group">
                  <label htmlFor="startDate" className="kn-caption">Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    className="kn-input"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="kn-form-group">
                  <label htmlFor="endDate" className="kn-caption">End Date</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    className="kn-input"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="kn-form-group">
                <label htmlFor="budget" className="kn-caption">Budget</label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  className="kn-input"
                  placeholder="Enter budget amount"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="kn-card-white">
              <h3 className="kn-card-title">Additional Notes</h3>
              <p className="kn-card-description">Any additional information or comments</p>

              <div className="kn-form-group">
                <label htmlFor="notes" className="kn-caption">Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  className="kn-textarea"
                  placeholder="Add any additional notes or comments"
                  rows="4"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="kn-form-actions">
              <button type="button" className="kn-button kn-button-secondary">
                Cancel
              </button>
              <button type="submit" className="kn-button kn-button-primary">
                Submit Entry
              </button>
            </div>
          </form>
        </div>

        <div className="kn-workspace-secondary">
          <div className="kn-card">
            <h3 className="kn-secondary-panel-title">Form Guidelines</h3>
            <p className="kn-secondary-panel-description">
              Fill in all required fields marked with an asterisk (*). 
              Provide accurate information to ensure proper project tracking.
            </p>

            <div className="kn-guidelines-list">
              <div className="kn-guideline-item">
                <strong>Project Name:</strong> Use a clear, descriptive name
              </div>
              <div className="kn-guideline-item">
                <strong>Category:</strong> Select the most appropriate category
              </div>
              <div className="kn-guideline-item">
                <strong>Priority:</strong> Set based on business impact
              </div>
              <div className="kn-guideline-item">
                <strong>Dates:</strong> Ensure end date is after start date
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataEntry
