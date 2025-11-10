# Getting Started - Quick Setup

Welcome! Follow these steps to get your Work In Theatre website up and running.

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (1 minute)

```bash
cd work-in-theatre-site
npm install
```

Wait for all packages to install.

### Step 2: Add Your PDF (30 seconds)

1. Find your PDF: `Work in Theatre (draft1) USA.pdf`
2. Rename it to: `work-in-theatre.pdf`
3. Place it in the `/public` folder
4. Delete the `PLACE-PDF-HERE.txt` file

### Step 3: Test Locally (30 seconds)

```bash
npm run dev
```

Open http://localhost:3000 in your browser. You should see the animated landing page!

### Step 4: Set Up Google Sheets (2 minutes)

Follow the detailed guide in `GOOGLE-APPS-SCRIPT.md`:

1. Create a Google Sheet
2. Add Apps Script (copy/paste provided code)
3. Deploy as Web App
4. Copy the URL
5. Paste URL in `/pages/index.tsx` at line 27

### Step 5: Test Form Submission (30 seconds)

1. Fill out the form on http://localhost:3000
2. Submit it
3. Check your Google Sheet - data should appear!
4. Download button should appear
5. Click to download the PDF

### Step 6: Deploy to Vercel (1 minute)

#### Option A: Via GitHub (Recommended)

```bash
git init
git add .
git commit -m "Initial deployment"
# Push to your GitHub repository
```

Then go to vercel.com and import your repo.

#### Option B: Via CLI

```bash
npm install -g vercel
vercel
```

## ✅ Verification Checklist

Before going live, verify:

- [ ] ✅ Site loads at localhost:3000
- [ ] ✅ Animations play smoothly
- [ ] ✅ Form can be submitted
- [ ] ✅ Data appears in Google Sheet
- [ ] ✅ Download button appears after submit
- [ ] ✅ PDF downloads correctly
- [ ] ✅ Site is responsive on mobile
- [ ] ✅ All partner logos display (if added)

## 📱 Test on Multiple Devices

After deployment, test on:
- Desktop computer (Chrome, Firefox, Safari)
- Mobile phone (iOS Safari, Chrome)
- Tablet

## 🎨 Optional Customizations

### Add Partner Logos

1. Extract logos from your PDF
2. Save as PNG or SVG in `/public/logos/`
3. Edit `/components/PartnerLogos.tsx`
4. Update the `logoImages` array with your filenames

### Change Colors

Edit `/tailwind.config.js`:

```javascript
colors: {
  'theatre-blue': '#YOUR_COLOR',
  'theatre-purple': '#YOUR_COLOR',
  // etc.
}
```

### Change Fonts

Edit `/styles/globals.css` to import a different Google Font.

## 🆘 Need Help?

- **Detailed setup**: See `README.md`
- **Google Sheets**: See `GOOGLE-APPS-SCRIPT.md`
- **Deployment**: See `DEPLOYMENT-GUIDE.md`

## 🎉 You're Done!

Once deployed, share your Vercel URL with educators and students!

Example: `https://work-in-theatre.vercel.app`

---

**Questions?** Review the detailed README.md for troubleshooting.

