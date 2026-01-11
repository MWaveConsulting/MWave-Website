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
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  CheckCircle,
  Send,
  X,
} from "lucide-react";
import { sendEmailViaMailto } from "@/integrations/Core";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectDetails: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    setSubmitError("");
  };

  // Client-side validation
  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    // Validate form before submission
    if (!validateForm()) {
      console.log("Form validation failed:", errors);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", formData);

      // Prepare data for Google Apps Script
      const submissionData = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || "",
        company: formData.company.trim() || "",
        service: formData.service || "",
        projectDetails: formData.projectDetails.trim(),
      };

      // Send POST request to Google Apps Script
      // Using no-cors mode to bypass CORS restrictions
      const response = await fetch(
        "https://script.google.com/a/macros/mwave-news.com/s/AKfycbzJ8wd3Tj-mXont0RjCag48VsYcaqqeLi3-39nj7aixh9cFLwC9w1QaoqlUxx3hG9eetg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      // With no-cors mode, we can't read the response status
      // If no error is thrown, assume success
      console.log("Form submitted (no-cors mode)");

      // Success
      setShowSuccess(true);
      setIsSubmitted(true);

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        projectDetails: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        "Failed to submit form. Please check your connection and try again, or use the alternative method below."
      );

      // Keep form data on error so user doesn't lose their input
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
              setShowSuccess(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                projectDetails: "",
              });
              setErrors({});
              setSubmitError("");
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
                  {/* Success Message */}
                  {showSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          <p className="text-green-800 font-medium">
                            Message sent successfully! We'll get back to you
                            within 24 hours.
                          </p>
                        </div>
                        <button
                          onClick={() => setShowSuccess(false)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          className={`h-12 ${
                            errors.fullName
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.fullName}
                          </p>
                        )}
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
                          className={`h-12 ${
                            errors.email
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
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
                      <Label htmlFor="projectDetails">Project Details *</Label>
                      <Textarea
                        id="projectDetails"
                        placeholder="Tell us about your business needs, current challenges, and goals for AI implementation..."
                        value={formData.projectDetails}
                        onChange={(e) =>
                          handleInputChange("projectDetails", e.target.value)
                        }
                        className={`h-32 resize-none ${
                          errors.projectDetails
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                      />
                      {errors.projectDetails && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.projectDetails}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-lg shadow-lg hover:shadow-xl smooth-transition text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: "var(--primary-dark)" }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center text-white">
                          <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center text-white">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>

                  {/* Error Message */}
                  {submitError && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex items-start">
                        <X className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-red-700 text-sm">{submitError}</p>
                      </div>
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
