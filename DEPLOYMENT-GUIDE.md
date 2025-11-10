# Quick Deployment Guide

## Pre-Deployment Checklist

### 1. Add Required Files

- [ ] Place PDF at `/public/work-in-theatre.pdf`
- [ ] Add partner logos to `/public/logos/` (optional)
- [ ] Update logo references in `/components/PartnerLogos.tsx` if using real logos

### 2. Set Up Google Sheets

- [ ] Create Google Sheet with columns: Timestamp, Role, Organisation
- [ ] Add Apps Script (see README.md for code)
- [ ] Deploy Apps Script as Web App
- [ ] Copy Web App URL
- [ ] Paste URL in `/pages/index.tsx` line ~27

### 3. Test Locally

```bash
npm install
npm run dev
```

- [ ] Visit http://localhost:3000
- [ ] Fill out the form
- [ ] Verify data appears in Google Sheet
- [ ] Test PDF download
- [ ] Check mobile responsiveness

### 4. Deploy to Vercel

#### Via GitHub (Recommended)

```bash
git init
git add .
git commit -m "Initial deployment"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

Then:
1. Go to vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

#### Via Vercel CLI

```bash
npm install -g vercel
vercel
```

### 5. Post-Deployment Testing

- [ ] Test form submission on live site
- [ ] Verify Google Sheet receives data
- [ ] Test PDF download
- [ ] Check on mobile devices
- [ ] Test in different browsers

### 6. Share Your Site

Your Vercel URL will be: `https://your-project-name.vercel.app`

You can also add a custom domain in Vercel settings.

## Common Issues

**Issue**: PDF doesn't download
**Solution**: Ensure file is named `work-in-theatre.pdf` in `/public` folder

**Issue**: Form doesn't submit
**Solution**: Double-check Google Apps Script URL is correct

**Issue**: Data not appearing in Google Sheet
**Solution**: Verify Apps Script deployment is set to "Anyone" can access

## Need Help?

Refer to the main README.md for detailed troubleshooting and setup instructions.

