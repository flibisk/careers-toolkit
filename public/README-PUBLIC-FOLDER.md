# Public Folder

## Required Files

### 1. PDF File
Place your PDF file in this directory:
- **Filename**: `work-in-theatre.pdf`
- **Location**: `/public/work-in-theatre.pdf`

This is the PDF that users will download after completing the form.

### 2. Partner Logos (Optional)
If you have partner logos from the PDF:
1. Extract the logos as separate image files (PNG or SVG recommended)
2. Place them in `/public/logos/`
3. Update the `logoImages` array in `/components/PartnerLogos.tsx` with the filenames

Example:
```
/public/logos/partner1.png
/public/logos/partner2.png
/public/logos/partner3.svg
```

### 3. Favicon (Optional)
Add a `favicon.ico` file to this directory for your browser tab icon.

