# Work In Theatre - Careers Toolkit Website

A responsive, modern web application for distributing the Work In Theatre Careers Toolkit to educators and students in grades 9-12.

## 🎭 Features

- **Animated Landing Page**: Motion-based geometric transitions with triangles and shapes
- **Smart Form**: Collects non-personal data (role and organisation) with conditional inputs
- **Google Sheets Integration**: Automatically logs form submissions to a connected Google Sheet
- **Download Portal**: Smooth transition from form to PDF download after submission
- **Fully Responsive**: Beautiful on all devices from mobile to desktop
- **Modern Tech Stack**: Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Google account (for the Google Sheets integration)

### Installation

1. **Clone or download this repository**

```bash
cd work-in-theatre-site
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Add your PDF file**

Place your PDF file at `/public/work-in-theatre.pdf`

4. **Add partner logos (optional)**

- Extract logos from your PDF
- Save them in `/public/logos/`
- Update `/components/PartnerLogos.tsx` with the logo filenames

5. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Google Sheets Setup

To connect the form to Google Sheets:

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Work In Theatre - Form Responses" (or your preferred name)
4. Add these column headers in Row 1:
   - Column A: `Timestamp`
   - Column B: `Role`
   - Column C: `Organisation`

### Step 2: Create Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Paste the following script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the data
    sheet.appendRow([
      data.timestamp,
      data.role,
      data.organisation
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Save the project (name it "Form Handler" or similar)

### Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ and select **Web app**
3. Configure:
   - **Description**: "Form submission handler"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Important**: Copy the Web App URL (it will look like: `https://script.google.com/macros/s/ABCD.../exec`)
6. Authorize the app when prompted

### Step 4: Update the Website Code

1. Open `/pages/index.tsx`
2. Find line ~27 where it says:
   ```typescript
   const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual Web App URL
4. Save the file

### Testing the Integration

1. Run your dev server: `npm run dev`
2. Fill out and submit the form
3. Check your Google Sheet - you should see a new row with the data!

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Deploy**

```bash
vercel
```

Follow the prompts to deploy your site.

### Post-Deployment Checklist

- ✅ Verify the PDF downloads correctly
- ✅ Test form submission
- ✅ Check Google Sheet receives data
- ✅ Test on mobile devices
- ✅ Verify all animations work smoothly
- ✅ Check partner logos display correctly

## 📁 Project Structure

```
work-in-theatre-site/
├── components/
│   ├── AnimatedBackground.tsx  # Geometric triangle animations
│   ├── TheatreForm.tsx         # Form with conditional logic
│   ├── DownloadButton.tsx      # Post-submit download interface
│   └── PartnerLogos.tsx        # Partner logo display
├── pages/
│   ├── _app.tsx                # App wrapper
│   ├── _document.tsx           # Document structure
│   └── index.tsx               # Main landing page
├── public/
│   ├── work-in-theatre.pdf     # YOUR PDF FILE GOES HERE
│   └── logos/                  # Partner logos go here
├── styles/
│   └── globals.css             # Global styles and Tailwind
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit `/tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'theatre-blue': '#1E3A8A',
  'theatre-purple': '#7C3AED',
  'theatre-teal': '#0D9488',
  'theatre-pink': '#EC4899',
}
```

### Typography

The site uses the Inter font by default. To change it:

1. Update the Google Fonts import in `/styles/globals.css`
2. Update the `fontFamily` in `/tailwind.config.js`

### Animations

Adjust animation timings in `/tailwind.config.js` under the `animation` and `keyframes` sections.

## 🔒 Privacy & Data Collection

This application is designed with privacy in mind:

- ✅ No personal data (names, emails, phone numbers) collected
- ✅ Only role and organisation name are recorded
- ✅ Data stored securely in your Google Sheet
- ✅ No third-party analytics by default
- ✅ Transparent privacy notice shown to users

## 🛠 Troubleshooting

### PDF Not Downloading

- Ensure the PDF file is named exactly `work-in-theatre.pdf`
- Check it's in the `/public` folder
- Verify file permissions allow reading

### Form Not Submitting to Google Sheets

- Verify the Apps Script URL is correctly pasted in `/pages/index.tsx`
- Ensure the deployment is set to "Anyone" can access
- Check the Apps Script is deployed and authorized
- Look in browser console for error messages

### Logos Not Showing

- Verify logo files are in `/public/logos/`
- Check filenames match those in `/components/PartnerLogos.tsx`
- Ensure files are valid image formats (PNG, SVG, JPG)

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is designed for Work In Theatre educational purposes.

## 🤝 Support

For technical issues or questions:
1. Check the troubleshooting section above
2. Review error messages in the browser console
3. Verify all setup steps were completed

## 🎯 Next Steps After Setup

1. ✅ Add your PDF to `/public/work-in-theatre.pdf`
2. ✅ Extract and add partner logos to `/public/logos/`
3. ✅ Set up Google Sheets integration
4. ✅ Update the Google Apps Script URL in the code
5. ✅ Test locally with `npm run dev`
6. ✅ Deploy to Vercel
7. ✅ Test the live site thoroughly
8. ✅ Share the URL with your audience!

---

**Built with ❤️ for theatre education**

