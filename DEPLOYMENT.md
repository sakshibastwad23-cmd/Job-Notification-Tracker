# Deployment Guide - Vercel

This guide explains how to deploy the KodNest Premium Build System to Vercel.

## Method 1: Connect GitHub Repository (Recommended)

This is the easiest and best method for continuous deployment:

### Steps:

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account (or create an account)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Find and select: `sakshibastwad23-cmd/Job-Notification-Tracker`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Select "Other" or "Static Site"
   - **Root Directory**: Leave as `.` (root)
   - **Build Command**: Leave empty (no build needed for static HTML)
   - **Output Directory**: Leave as `.` (root)
   - **Install Command**: Leave empty

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 30-60 seconds)
   - Your site will be live at: `https://your-project-name.vercel.app`

5. **Automatic Updates**
   - Every time you push to GitHub, Vercel will automatically redeploy
   - You'll get a new deployment URL for each push

---

## Method 2: Vercel CLI (Command Line)

If you prefer using the command line:

### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd "d:\new project"
   vercel
   ```
   - Follow the prompts
   - First time: Link to existing project or create new
   - Confirm settings (all defaults are fine)

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

---

## Method 3: Drag and Drop (Quick Test)

For a quick test without GitHub connection:

1. **Zip your project**
   - Create a zip file of all project files
   - Make sure `index.html` is in the root

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Click "Deploy" tab
   - Drag and drop your zip file

3. **Deploy**
   - Wait for upload and deployment
   - Get your live URL

**Note**: This method doesn't auto-update. Use Method 1 for production.

---

## Project Configuration

The project includes `vercel.json` with the correct settings:
- No build command needed (static HTML/CSS)
- Root directory is `.`
- All files served from root

---

## Troubleshooting

### If CSS files don't load:
- Make sure all paths in `index.html` are relative (they already are)
- Check that `design-system/` folder is included in deployment

### If you see 404 errors:
- Verify `vercel.json` is in the root directory
- Check that `index.html` exists in root

### If deployment fails:
- Make sure you're deploying from the repository root
- Check that all files are committed to git
- Verify `vercel.json` syntax is correct

---

## Custom Domain (Optional)

After deployment:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
