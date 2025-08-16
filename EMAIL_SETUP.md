# Email Setup Guide for MWave Contact Form

## Overview

The contact form is currently set up with EmailJS integration but needs your credentials to work properly. Here's how to set it up:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (or your preferred email provider)
4. Connect your email account (mwave.consulting@protonmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name:** `mwave_contact_form`

**Subject:** `🌊 New Contact Form Submission from {{from_name}}`

**HTML Content:**

```html
<div
  style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 24px;"
>
  <div
    style="background: linear-gradient(135deg, #1f2428 0%, #37404a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; margin: -24px -24px 24px -24px;"
  >
    <h1 style="margin: 0; font-size: 24px; font-weight: bold;">
      🌊 New MWave Website Inquiry
    </h1>
    <p style="margin: 8px 0 0 0; opacity: 0.9;">
      You have received a new contact form submission
    </p>
  </div>

  <div
    style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;"
  >
    <h2
      style="color: #1f2428; margin: 0 0 16px 0; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;"
    >
      📋 Contact Information
    </h2>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td
          style="padding: 12px 8px; font-weight: 600; width: 140px; color: #37404a;"
        >
          👤 Name:
        </td>
        <td style="padding: 12px 8px; color: #1f2428;">{{from_name}}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px 8px; font-weight: 600; color: #37404a;">
          📧 Email:
        </td>
        <td style="padding: 12px 8px; color: #1f2428;">{{reply_to}}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px 8px; font-weight: 600; color: #37404a;">
          📞 Phone:
        </td>
        <td style="padding: 12px 8px; color: #1f2428;">{{phone}}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px 8px; font-weight: 600; color: #37404a;">
          🏢 Company:
        </td>
        <td style="padding: 12px 8px; color: #1f2428;">{{company}}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px 8px; font-weight: 600; color: #37404a;">
          🎯 Service Interest:
        </td>
        <td style="padding: 12px 8px; color: #1f2428;">{{service}}</td>
      </tr>
    </table>
  </div>

  <div
    style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px;"
  >
    <h3
      style="color: #1f2428; margin: 0 0 16px 0; font-size: 16px; display: flex; align-items: center;"
    >
      💬 Message
    </h3>
    <div
      style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #2563eb; font-size: 14px; line-height: 1.6; color: #1f2428;"
    >
      {{message}}
    </div>
  </div>

  <div
    style="margin-top: 24px; padding: 16px; background-color: #f0f9ff; border-radius: 6px; border-left: 4px solid #2563eb;"
  >
    <p style="margin: 0; font-size: 12px; color: #1f2428; opacity: 0.8;">
      📅 Submitted on: {{submission_date}}<br />
      🌐 Source: MWave Consulting Website Contact Form
    </p>
  </div>
</div>
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Code

1. Open `src/integrations/Core.js`
2. Replace the placeholder values with your actual credentials:

```javascript
const EMAILJS_SERVICE_ID = "your_service_id_here";
const EMAILJS_TEMPLATE_ID = "your_template_id_here";
const EMAILJS_PUBLIC_KEY = "your_public_key_here";
```

3. Uncomment the EmailJS implementation code (remove the `/*` and `*/` around the email sending code)

## Step 6: Test

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email (mwave.consulting@protonmail.com) for the formatted message

## Alternative: Mailto Fallback

If EmailJS setup is complex, the form also includes a "Send Email via Mail App" button that opens the user's default email client with pre-filled information.

## Troubleshooting

- **Free Plan Limits:** EmailJS free plan allows 200 emails/month
- **CORS Issues:** Make sure your domain is whitelisted in EmailJS
- **Template Variables:** Ensure template variable names match the form field names

## Security Notes

- Never commit your EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to expose in client-side code
