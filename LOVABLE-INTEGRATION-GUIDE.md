# How to Use KodNest Premium Build System in Lovable

This guide shows you how to integrate the KodNest Premium Build System into your Lovable project.

## Step 1: Copy the CSS File

1. Open the file `lovable-integration.css` in this repository
2. **Select ALL** the content (Ctrl+A / Cmd+A)
3. **Copy** it (Ctrl+C / Cmd+C)

## Step 2: Paste into Lovable

### Option A: Global CSS (Recommended)

1. In Lovable, go to your project settings
2. Find **"Global CSS"** or **"Styles"** section
3. Open the global CSS file (usually `globals.css` or `index.css`)
4. **Paste** the entire CSS content at the top of the file
5. Save

### Option B: Component-Level CSS

If Lovable uses component-scoped CSS:
1. Create a new CSS file called `kodnest-design-system.css`
2. Paste the entire CSS content
3. Import it in your main component or layout:
   ```javascript
   import './kodnest-design-system.css'
   ```

## Step 3: Use the Design System Classes

Now you can use all the KodNest classes in your Lovable components!

### Example: Top Bar Component

```jsx
function TopBar() {
  return (
    <div className="kn-top-bar">
      <div className="kn-top-bar-left">KodNest Premium Build System</div>
      <div className="kn-top-bar-center">Step 2 / 5</div>
      <div className="kn-top-bar-right">
        <span className="kn-status-badge kn-status-badge-in-progress">
          In Progress
        </span>
      </div>
    </div>
  )
}
```

### Example: Button Component

```jsx
function MyButton() {
  return (
    <>
      <button className="kn-button kn-button-primary">
        Primary Button
      </button>
      <button className="kn-button kn-button-secondary">
        Secondary Button
      </button>
    </>
  )
}
```

### Example: Card Component

```jsx
function MyCard() {
  return (
    <div className="kn-card-white">
      <h3 className="kn-card-title">Card Title</h3>
      <p className="kn-card-description">
        This is a card description using the design system.
      </p>
      <input 
        type="text" 
        className="kn-input" 
        placeholder="Enter text"
      />
    </div>
  )
}
```

### Example: Full Page Layout

```jsx
function MyPage() {
  return (
    <>
      {/* Top Bar */}
      <div className="kn-top-bar">
        <div className="kn-top-bar-left">My Project</div>
        <div className="kn-top-bar-center">Step 1 / 3</div>
        <div className="kn-top-bar-right">
          <span className="kn-status-badge kn-status-badge-in-progress">
            In Progress
          </span>
        </div>
      </div>

      {/* Page Container */}
      <div className="kn-page-container">
        {/* Context Header */}
        <div className="kn-context-header">
          <h1 className="kn-context-header-title">
            Define your build surface
          </h1>
          <p className="kn-context-header-subtext">
            Specify the core components and structure.
          </p>
        </div>

        {/* Workspace */}
        <div className="kn-workspace">
          {/* Primary Workspace (70%) */}
          <div className="kn-workspace-primary">
            <div className="kn-card-white">
              <h3 className="kn-card-title">Main Content</h3>
              <p className="kn-card-description">Your main content here.</p>
            </div>
          </div>

          {/* Secondary Panel (30%) */}
          <div className="kn-workspace-secondary">
            <div className="kn-card">
              <h3 className="kn-secondary-panel-title">Side Panel</h3>
              <p className="kn-secondary-panel-description">
                Additional information or actions.
              </p>
              <div className="kn-secondary-panel-actions">
                <button className="kn-button kn-button-primary">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Proof Footer */}
        <div className="kn-proof-footer">
          <div className="kn-proof-checklist">
            <div className="kn-proof-item">
              <div className="kn-proof-item-row">
                <input type="checkbox" className="kn-checkbox-input" />
                <label className="kn-checkbox-label">UI Built</label>
              </div>
              <input 
                type="text" 
                className="kn-input kn-proof-input" 
                placeholder="Enter proof"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
```

## Available Classes Reference

### Layout
- `.kn-page-container` - Main page container (max-width 1280px)
- `.kn-top-bar` - Top navigation bar
- `.kn-context-header` - Page header section
- `.kn-workspace` - Main workspace container
- `.kn-workspace-primary` - Primary content area (70%)
- `.kn-workspace-secondary` - Secondary panel (30%)
- `.kn-proof-footer` - Footer with proof checklist

### Buttons
- `.kn-button` - Base button class
- `.kn-button-primary` - Primary button (deep red)
- `.kn-button-secondary` - Secondary button (outlined)
- `.kn-button-error` - Error button style

### Inputs
- `.kn-input` - Text input
- `.kn-textarea` - Textarea input
- `.kn-input-error` - Error state input

### Cards
- `.kn-card` - Card with subtle background
- `.kn-card-white` - Card with white background
- `.kn-card-title` - Card title (serif)
- `.kn-card-description` - Card description text

### Status Badges
- `.kn-status-badge-not-started`
- `.kn-status-badge-in-progress`
- `.kn-status-badge-shipped`

### Typography
- `.kn-heading-1` - H1 (serif, 32px)
- `.kn-heading-2` - H2 (serif, 24px)
- `.kn-heading-3` - H3 (serif, 20px)
- `.kn-body-text` - Body text (max-width 720px)
- `.kn-caption` - Caption text (14px)

### Other Components
- `.kn-prompt-box` - Copyable prompt box (monospace)
- `.kn-checkbox` - Checkbox wrapper
- `.kn-checkbox-input` - Checkbox input
- `.kn-checkbox-label` - Checkbox label

### Utility Classes
- `.kn-spacing-xs` - Margin bottom 8px
- `.kn-spacing-sm` - Margin bottom 16px
- `.kn-spacing-md` - Margin bottom 24px
- `.kn-spacing-lg` - Margin bottom 40px
- `.kn-spacing-xl` - Margin bottom 64px
- `.kn-text-center` - Center align text
- `.kn-text-left` - Left align text
- `.kn-text-right` - Right align text

## CSS Variables Available

You can also use CSS variables directly in your custom styles:

```css
.my-custom-class {
  color: var(--kn-color-accent);
  padding: var(--kn-space-md);
  font-family: var(--kn-font-family-heading);
  border-radius: var(--kn-radius-sm);
}
```

## Color Variables
- `--kn-color-bg` - Background (#F7F6F3)
- `--kn-color-bg-subtle` - Subtle background (#E8E4DC)
- `--kn-color-text` - Text color (#111111)
- `--kn-color-accent` - Accent (#8B0000)
- `--kn-color-success` - Success (#2F6B3C)
- `--kn-color-warning` - Warning (#B67A1D)
- `--kn-color-error` - Error (#7E1C1C)

## Spacing Variables
- `--kn-space-xs` - 8px
- `--kn-space-sm` - 16px
- `--kn-space-md` - 24px
- `--kn-space-lg` - 40px
- `--kn-space-xl` - 64px

## Tips for Lovable

1. **Use className, not class** - React uses `className` instead of `class`
2. **Combine classes** - Use template literals or arrays for multiple classes:
   ```jsx
   <div className={`kn-card ${isActive ? 'kn-card-white' : ''}`}>
   ```
3. **Responsive by default** - The design system includes responsive breakpoints
4. **No conflicts** - All classes are prefixed with `kn-` to avoid conflicts

## Need Help?

If you encounter any issues:
1. Make sure the CSS is pasted correctly (check for any missing closing braces)
2. Verify the CSS is loaded before your components render
3. Check browser console for any CSS errors
4. Ensure you're using `className` not `class` in React/JSX
