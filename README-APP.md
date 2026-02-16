# Modern Web Application - KodNest Premium Build System

A complete modern web application built with React and the KodNest Premium Build System design system.

## Features

✅ **Responsive Navigation Bar**
- Sticky navigation with mobile-responsive design
- Active route highlighting
- User profile display and logout functionality

✅ **User Authentication System**
- Login page with email/password
- Signup page with validation
- Protected routes
- Session management

✅ **Dashboard with Data Visualization**
- Real-time statistics cards
- Interactive bar chart visualization
- Recent activity feed
- Auto-updating data

✅ **Form Components for Data Entry**
- Comprehensive project entry form
- Multi-section form layout
- Form validation
- Success/error states
- Side panel with guidelines

## Tech Stack

- **React 18** - UI framework
- **React Router** - Routing and navigation
- **Vite** - Build tool and dev server
- **KodNest Design System** - Custom CSS design system

## Project Structure

```
src/
├── components/
│   ├── NavBar.jsx          # Responsive navigation component
│   └── NavBar.css
├── pages/
│   ├── Login.jsx           # Login page
│   ├── Signup.jsx          # Signup page
│   ├── Dashboard.jsx       # Dashboard with charts
│   ├── DataEntry.jsx       # Data entry form
│   ├── Auth.css            # Auth page styles
│   ├── Dashboard.css       # Dashboard styles
│   └── DataEntry.css       # Form styles
├── App.jsx                 # Main app component with routing
├── App.css                 # App-level styles
└── main.jsx               # Entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

### Authentication

1. **Sign Up**: Create a new account with name, email, and password
2. **Login**: Sign in with your email and password
3. **Protected Routes**: All pages except login/signup require authentication

### Dashboard

- View real-time statistics
- See monthly performance chart
- Check recent activity feed
- Data updates automatically every 5 seconds

### Data Entry

- Fill in project information
- Add project details (dates, budget, priority)
- Include additional notes
- Submit form with validation

## Design System Integration

All components use the KodNest Premium Build System classes:

- `.kn-button-primary` - Primary actions
- `.kn-button-secondary` - Secondary actions
- `.kn-input` - Form inputs
- `.kn-card` - Content cards
- `.kn-heading-1`, `.kn-heading-2`, `.kn-heading-3` - Typography
- `.kn-page-container` - Page layout
- `.kn-workspace` - Content workspace

## Responsive Design

The application is fully responsive:

- **Desktop**: Full layout with sidebar
- **Tablet**: Stacked layout, optimized spacing
- **Mobile**: Single column, touch-friendly

## Browser Support

Modern browsers with ES6+ support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Authentication is simulated (no backend)
- Data visualization uses mock data
- Form submissions are logged to console
- All styling follows KodNest Premium Build System guidelines
