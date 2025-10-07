# Make.com Webhook Setup Guide

## 🎉 Your Webhook is Ready!

Your contact form is now configured to send data to your Make.com webhook:
**Webhook URL**: `https://hook.eu2.make.com/ymamnv1bax2u8897otykny1w3d3pffem`

## Step 1: Configure Make.com Scenario

1. **Go to [Make.com](https://www.make.com/) and log in**
2. **Find your scenario** (or create a new one)
3. **Add the webhook trigger**:
   - Search for "Webhooks" → "Custom webhook"
   - Set the webhook URL to: `https://hook.eu2.make.com/ymamnv1bax2u8897otykny1w3d3pffem`
   - Set **Data structure** to: **"No"** (unstructured)

## Step 2: Add Google Sheets Module

1. **Add Google Sheets module**:

   - Search for "Google Sheets" → "Add a row to a spreadsheet"
   - Connect your Google account
   - Select your spreadsheet

2. **Configure the row data**:
   ```json
   {
     "Name": "{{1.name}}",
     "Email": "{{1.email}}",
     "Phone": "{{1.phone}}",
     "Company": "{{1.company}}",
     "Service Interest": "{{1.service}}",
     "Message": "{{1.message}}",
     "Submission Date": "{{1.submission_date}}"
   }
   ```

## Step 3: Prepare Your Google Sheet

Create a spreadsheet with these column headers in row 1:

```
A1: Name
B1: Email
C1: Phone
D1: Company
E1: Service Interest
F1: Message
G1: Submission Date
```

## Step 4: Test the Integration

1. **Activate your Make.com scenario**
2. **Test your contact form** on the website
3. **Check your Google Sheet** - you should see a new row appear!

## What Happens Now

When someone submits your contact form:

1. ✅ **Form data is sent** to your Make.com webhook
2. ✅ **Make.com processes** the data
3. ✅ **New row is added** to your Google Sheet
4. ✅ **User sees success message** on the website

## Data Structure

Your webhook receives this data structure:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-123-4567",
  "company": "Acme Corp",
  "service": "AI Chatbots",
  "message": "I'm interested in your services...",
  "submission_date": "2024-01-15T10:30:00.000Z"
}
```

## Optional Enhancements

You can add more modules to your Make.com scenario:

1. **Email Notification**: Send yourself an email when form is submitted
2. **Auto-Response**: Send confirmation email to the user
3. **CRM Integration**: Add lead to your CRM system
4. **Slack Notification**: Get notified in Slack
5. **Data Validation**: Validate email format before saving

## Troubleshooting

- **No data in sheet?** Check that your Make.com scenario is activated
- **Wrong data format?** Verify the column mapping in Google Sheets module
- **Webhook not receiving data?** Check the webhook URL in your scenario

## Benefits

✅ **Real-time data collection**  
✅ **No email parsing needed**  
✅ **Automatic spreadsheet updates**  
✅ **Easy to track submissions**  
✅ **Can trigger multiple actions**  
✅ **Free tier available**

Your contact form is now fully integrated with Make.com! 🚀
