# Google Apps Script Setup

## Complete Script Code

Copy and paste this entire script into your Google Apps Script editor:

```javascript
/**
 * Work In Theatre - Form Handler
 * This script receives form submissions and adds them to a Google Sheet
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Format the timestamp nicely
    const timestamp = new Date(data.timestamp);
    const formattedTimestamp = Utilities.formatDate(
      timestamp, 
      Session.getScriptTimeZone(), 
      "yyyy-MM-dd HH:mm:ss"
    );
    
    // Add a new row with the data
    sheet.appendRow([
      formattedTimestamp,
      data.role,
      data.organisation
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success',
        message: 'Data recorded successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function to verify the script works
 * Run this from the Apps Script editor to test
 */
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        role: "Teacher",
        organisation: "Test School"
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

## Setup Instructions

### 1. Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Work In Theatre - Form Responses"
4. In Row 1, add these headers:
   - A1: `Timestamp`
   - B1: `Role`
   - C1: `Organisation`

### 2. Open Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code in the editor
3. Paste the complete script from above
4. Click the save icon (💾) or press Ctrl+S / Cmd+S
5. Name your project "Work In Theatre Form Handler"

### 3. Test the Script (Optional but Recommended)

1. In the Apps Script editor, select `testDoPost` from the function dropdown
2. Click the Run button (▶)
3. If prompted, click "Review permissions" and authorize the script
4. Check your Google Sheet - you should see a test row appear!

### 4. Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the settings gear icon ⚙️
3. Select type: **Web app**
4. Fill in the settings:
   - **Description**: "Form submission handler v1"
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (important!)
5. Click **Deploy**
6. **Important**: Click "Authorize access" if prompted
7. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

### 5. Add URL to Your Website

1. Open `/pages/index.tsx` in your project
2. Find line ~27:
   ```typescript
   const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace with your actual URL:
   ```typescript
   const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec'
   ```
4. Save the file

### 6. Test the Integration

1. Run your website: `npm run dev`
2. Go to http://localhost:3000
3. Fill out and submit the form
4. Check your Google Sheet - a new row should appear!

## Troubleshooting

### "Authorization required" error

- Make sure you authorized the script when testing
- Verify deployment is set to "Anyone" can access

### Data not appearing in sheet

- Check the Web App URL is correct
- Verify the sheet has the right column headers
- Look at the Apps Script logs: View → Logs

### "Permission denied" error

- Re-deploy the script with "Execute as: Me"
- Make sure "Who has access" is set to "Anyone"

### Testing the endpoint directly

Use this curl command to test:

```bash
curl -L -X POST 'YOUR_WEB_APP_URL' \
  -H 'Content-Type: application/json' \
  -d '{"timestamp":"2025-01-01T12:00:00Z","role":"Teacher","organisation":"Test School"}'
```

## Updating the Script

If you need to make changes:

1. Edit the script in Apps Script editor
2. Save your changes
3. Click **Deploy** → **Manage deployments**
4. Click the edit icon (pencil) on your deployment
5. Update the version or description
6. Click **Deploy**
7. The URL stays the same - no need to update your website!

## Privacy & Security

This script:
- ✅ Only collects role and organisation (no personal data)
- ✅ Runs under your Google account
- ✅ Data stored in your private Google Sheet
- ✅ Only you can access the sheet by default
- ✅ No data leaves Google's infrastructure

To share data with team members:
1. Share the Google Sheet with specific people
2. Set appropriate permissions (View/Edit)

## Advanced: Add Data Validation

Add this function to validate incoming data:

```javascript
function isValidData(data) {
  const validRoles = [
    'Teacher',
    'Careers Leader', 
    'Guidance Counsellor',
    'Student',
    'School Administrator',
    'Employer'
  ];
  
  // Check role is valid or is a custom role
  if (!data.role || typeof data.role !== 'string') {
    return false;
  }
  
  // Check organisation is provided
  if (!data.organisation || typeof data.organisation !== 'string') {
    return false;
  }
  
  return true;
}
```

Then add this check in `doPost`:

```javascript
// After parsing data
if (!isValidData(data)) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'error',
      message: 'Invalid data format'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

Need more help? Check the main README.md or Google's [Apps Script documentation](https://developers.google.com/apps-script).

