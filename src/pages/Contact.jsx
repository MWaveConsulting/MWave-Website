import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Calendar, MapPin, CheckCircle, Send } from "lucide-react";
import { SendEmail, sendEmailViaMailto } from "@/integrations/Core";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailError("");

    const emailBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 24px;">
        <div style="background: linear-gradient(135deg, #1f2428 0%, #37404a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; margin: -24px -24px 24px -24px;">
          <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🌊 New MWave Website Inquiry</h1>
          <p style="margin: 8px 0 0 0; opacity: 0.9;">You have received a new contact form submission</p>
        </div>
        
        <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h2 style="color: #1f2428; margin: 0 0 16px 0; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">📋 Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; font-weight: 600; width: 140px; color: #37404a;">👤 Name:</td>
              <td style="padding: 12px 8px; color: #1f2428;">${
                formData.name
              }</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; font-weight: 600; color: #37404a;">📧 Email:</td>
              <td style="padding: 12px 8px; color: #1f2428;">${
                formData.email
              }</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; font-weight: 600; color: #37404a;">📞 Phone:</td>
              <td style="padding: 12px 8px; color: #1f2428;">${
                formData.phone || "Not provided"
              }</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; font-weight: 600; color: #37404a;">🏢 Company:</td>
              <td style="padding: 12px 8px; color: #1f2428;">${
                formData.company || "Not provided"
              }</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 8px; font-weight: 600; color: #37404a;">🎯 Service Interest:</td>
              <td style="padding: 12px 8px; color: #1f2428;">${
                formData.service || "Not specified"
              }</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px;">
          <h3 style="color: #1f2428; margin: 0 0 16px 0; font-size: 16px; display: flex; align-items: center;">
            💬 Message
          </h3>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #2563eb; font-size: 14px; line-height: 1.6; color: #1f2428;">
            ${formData.message.replace(/\n/g, "<br>")}
          </div>
        </div>
        
        <div style="margin-top: 24px; padding: 16px; background-color: #f0f9ff; border-radius: 6px; border-left: 4px solid #2563eb;">
          <p style="margin: 0; font-size: 12px; color: #1f2428; opacity: 0.8;">
            📅 Submitted on: ${new Date().toLocaleString()}<br>
            🌐 Source: MWave Consulting Website Contact Form
          </p>
        </div>
      </div>
    `;

    try {
      await SendEmail({
        to: "mwave.consulting@protonmail.com",
        from_name: "MWave Website Inquiry",
        subject: `🌊 New Contact Form Submission from ${formData.name}`,
        body: emailBody,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      setEmailError(
        "Failed to send email. Please try again or use the alternative method below."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    sendEmailViaMailto(formData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--primary-dark)" }}
          >
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We've received your inquiry and will get back to you within 24
            hours.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                message: "",
              });
            }}
            variant="outline"
            className="border-2"
            style={{
              borderColor: "var(--primary-dark)",
              color: "var(--primary-dark)",
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 sm:py-32"
        style={{
          background:
            "linear-gradient(135deg, var(--bg-light) 0%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              style={{ color: "var(--primary-dark)" }}
            >
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with intelligent AI agents? Let's
              discuss your project and create a custom solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader className="p-8">
                  <CardTitle
                    className="text-2xl font-bold"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    Start Your AI Transformation
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Tell us about your business needs and we'll create a
                    tailored solution
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chatbot">AI Chatbots</SelectItem>
                          <SelectItem value="phone-agent">
                            Phone AI Agents
                          </SelectItem>
                          <SelectItem value="integrations">
                            System Integrations
                          </SelectItem>
                          <SelectItem value="automation">
                            24/7 Automation
                          </SelectItem>
                          <SelectItem value="consultation">
                            General Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your business needs, current challenges, and goals for AI implementation..."
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        required
                        className="h-32 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-lg shadow-lg hover:shadow-xl smooth-transition text-white"
                      style={{ backgroundColor: "var(--primary-dark)" }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <div className="flex items-center text-white">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>

                  {/* Error Message */}
                  {emailError && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{emailError}</p>
                    </div>
                  )}

                  {/* Alternative Email Method */}
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Alternative Contact Method
                    </h4>
                    <p className="text-blue-700 text-sm mb-3">
                      If the form doesn't work, you can also send us an email
                      directly:
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleMailtoFallback}
                      className="text-blue-700 border-blue-300 hover:bg-blue-100"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email via Mail App
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    Get in Touch
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Email Us
                        </h4>
                        <p className="text-gray-600">
                          mwave.consulting@protonmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Schedule a Call
                        </h4>
                        <p className="text-gray-600">
                          Free 30-minute consultation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Response Time
                        </h4>
                        <p className="text-gray-600">Within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Global Service
                        </h4>
                        <p className="text-gray-600">
                          Remote consulting worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    What Happens Next?
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Initial Consultation</h4>
                        <p className="text-gray-600 text-sm">
                          We'll schedule a free 30-minute call to understand
                          your needs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Custom Proposal</h4>
                        <p className="text-gray-600 text-sm">
                          Receive a tailored solution proposal within 48 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Project Kickoff</h4>
                        <p className="text-gray-600 text-sm">
                          Start building your AI solution within 1 week
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "var(--primary-dark)" }}
          >
            Trusted by Businesses Worldwide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-3">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--primary-dark)" }}
              >
                100%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="space-y-3">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--primary-dark)" }}
              >
                2-4 Weeks
              </div>
              <div className="text-gray-600">Average Implementation</div>
            </div>
            <div className="space-y-3">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--primary-dark)" }}
              >
                24/7
              </div>
              <div className="text-gray-600">Ongoing Support</div>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            Join the growing number of businesses that have transformed their
            operations with MWave Consulting's intelligent AI solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
