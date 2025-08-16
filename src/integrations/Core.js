import emailjs from "@emailjs/browser";

// Initialize EmailJS with your service ID
// You'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key

export const SendEmail = async ({ to, from_name, subject, body }) => {
  try {
    // For now, we'll use a fallback approach that logs the email
    // In production, you would configure EmailJS with your actual credentials
    console.log("Email would be sent with EmailJS:", {
      to,
      from_name,
      subject,
      body,
    });

    // EmailJS implementation (commented out until credentials are provided)
    /*
    const templateParams = {
      to_email: to,
      from_name: from_name,
      subject: subject,
      message: body,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return { success: true, data: response };
    */

    // Simulate successful email sending for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email");
  }
};

// Alternative: Simple email using mailto link (fallback)
export const sendEmailViaMailto = (formData) => {
  const subject = `New Contact Form Submission from ${formData.name}`;
  const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Service Interest: ${formData.service || "Not specified"}

Message:
${formData.message}
  `;

  const mailtoLink = `mailto:mwave.consulting@protonmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};
