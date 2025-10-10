import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Bot,
  Phone,
  Settings,
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar,
  MessageSquare,
  CreditCard,
  BarChart3,
  Database,
  Users,
} from "lucide-react";

export default function OurSolutions() {
  const solutions = [
    {
      icon: Bot,
      title: "AI Venue Chatbots",
      description:
        "Automate FAQs, brochure requests, and website chat so only qualified leads reach your team.",
      features: [
        "Advanced Natural Language Processing",
        "Multi-language Support",
        "Context-aware Conversations",
        "Custom Personality & Tone",
        "Real-time Analytics Dashboard",
        "Seamless Escalation to Humans",
      ],
      useCases: [
        "Customer Support",
        "Lead Generation",
        "FAQ Automation",
        "Product Recommendations",
      ],
    },
    {
      icon: Phone,
      title: "Phone AI for Bookings",
      description:
        "Answer and triage calls, check availability, and take deposits—without missing an inquiry.",
      features: [
        "Advanced Voice Recognition",
        "Natural Speech Synthesis",
        "Intelligent Call Routing",
        "Real-time Appointment Booking",
        "Call Recording & Transcription",
        "Multi-line Call Management",
      ],
      useCases: [
        "Appointment Scheduling",
        "Order Taking",
        "Customer Inquiries",
        "Survey Collection",
      ],
    },
    {
      icon: Settings,
      title: "System Integrations",
      description:
        "Connect calendars, CRMs, and payments so your booking workflow runs end-to-end automatically.",
      features: [
        "CRM Integration (Salesforce, HubSpot)",
        "Calendar Management (Google, Outlook)",
        "Payment Processing (Stripe, PayPal)",
        "Database Synchronization",
        "API Development & Management",
        "Real-time Data Sync",
      ],
      useCases: [
        "CRM Updates",
        "Calendar Sync",
        "Payment Processing",
        "Data Analytics",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Automation",
      description:
        "Never miss a lead: 24/7 coverage that filters noise and surfaces only the important conversations.",
      features: [
        "Always Available Service",
        "Instant Response Times",
        "Smart Escalation Rules",
        "After-hours Support",
        "Global Time Zone Coverage",
        "Automated Follow-ups",
      ],
      useCases: [
        "Night Support",
        "Weekend Coverage",
        "Holiday Service",
        "Global Operations",
      ],
    },
  ];

  const weddingVenueSteps = [
    {
      icon: MessageSquare,
      title: "Customer Contact",
      description:
        "Customer calls or chats with AI agent about wedding venue booking",
    },
    {
      icon: Users,
      title: "Information Gathering",
      description:
        "Agent asks about event date, guest count, preferences, and budget",
    },
    {
      icon: Calendar,
      title: "Calendar Check",
      description:
        "Agent checks availability in real-time via Google Calendar integration",
    },
    {
      icon: BarChart3,
      title: "Quote Generation",
      description:
        "Agent provides pricing and package options based on requirements",
    },
    {
      icon: CheckCircle,
      title: "Booking Confirmation",
      description: "Agent books the date and sends confirmation details",
    },
    {
      icon: Database,
      title: "Data Storage",
      description:
        "All customer information automatically saved to Google Sheets for follow-up",
    },
  ];

  const integrationLogos = [
    {
      name: "Salesforce",
      logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
    },
    {
      name: "Google Calendar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1200px-Google_Calendar_icon_%282020%29.svg.png",
    },
    {
      name: "Google Sheets",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Google_Sheets_2020_Logo.svg",
    },
    {
      name: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Notion_app_logo.png/1200px-Notion_app_logo.png",
    },
    {
      name: "Microsoft 365",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
    },
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
    },
    {
      name: "Zoom",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Zoom_Logo_2022.svg/2880px-Zoom_Logo_2022.svg.png",
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
    },
    {
      name: "Hubspot",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2880px-HubSpot_Logo.svg.png",
    },
    {
      name: "Zapier",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg",
    },
    {
      name: "Open AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/OpenAI_logo_2025_%28wordmark%29.svg/2880px-OpenAI_logo_2025_%28wordmark%29.svg.png",
    },
  ];

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
              Our Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI agent solutions designed to transform your
              business operations and enhance customer experience
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "var(--primary-dark)" }}
            >
              Complete AI Agent Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From chatbots to phone agents, we build intelligent automation
              that works seamlessly with your business
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <CardHeader className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mr-4"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle
                        className="text-2xl lg:text-3xl font-bold"
                        style={{ color: "var(--primary-dark)" }}
                      >
                        {solution.title}
                      </CardTitle>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {solution.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: "var(--icon-contrast)" }} />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8 lg:p-12 bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-6 text-lg">
                      Perfect for:
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {solution.useCases.map((useCase, caseIndex) => (
                        <Badge
                          key={caseIndex}
                          variant="secondary"
                          className="px-4 py-2 text-center justify-center"
                          style={{
                            backgroundColor: "var(--primary-dark)",
                            color: "white",
                          }}
                        >
                          {useCase}
                        </Badge>
                      ))}
                    </div>

                      <div className="space-y-4">
                        <div className="text-sm text-gray-600">
                          <strong>Implementation Time:</strong> Project scope
                        </div>
                      <div className="text-sm text-gray-600">
                        <strong>Training Required:</strong> Minimal - we handle
                        everything
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Ongoing Support:</strong> 24/7 monitoring &
                        maintenance
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Venue Use Case */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "var(--primary-dark)" }}
            >
              Real-World Example: Wedding Venue Booking Agent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI agents transform the booking process for wedding
              venues, from initial inquiry to confirmed reservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingVenueSteps.map((step, index) => (
              <Card
                key={index}
                className="hover-lift smooth-transition border-0 shadow-lg bg-white relative"
              >
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: "var(--primary-dark)" }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div
                    className="w-16 h-16 mx-auto mb-4 mt-4 rounded-2xl flex items-center justify-center shadow-md border"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(95,111,82,0.12) 0%, rgba(166,138,100,0.12) 100%)",
                      borderColor: "var(--border-gray)",
                    }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: "var(--icon-contrast)" }} />
                  </div>

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-0 shadow-xl bg-white max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--primary-dark)" }}
                >
                  Integration Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                      <span>
                        <strong>Real-time Availability:</strong> Live calendar
                        checking
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CreditCard className="w-5 h-5 text-green-500 mr-3" />
                      <span>
                        <strong>Payment Processing:</strong> Stripe integration
                        for deposits
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MessageSquare className="w-5 h-5 text-purple-500 mr-3" />
                      <span>
                        <strong>Follow-up Automation:</strong> Email sequences
                        and reminders
                      </span>
                    </div>
                    <div className="flex items-center">
                      <BarChart3 className="w-5 h-5 text-orange-500 mr-3" />
                      <span>
                        <strong>Analytics Dashboard:</strong> Booking metrics
                        and insights
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "var(--primary-dark)" }}
            >
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing business tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-16">
            {integrationLogos.map((integration, index) => (
              <div
                key={index}
                className="hover-lift smooth-transition bg-white rounded-xl p-6 shadow-lg group"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 smooth-transition"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Plus 500+ more integrations available through APIs and webhooks
            </p>
            <Button
              asChild
              size="lg"
              className="shadow-lg hover:shadow-xl smooth-transition"
              style={{ backgroundColor: "var(--primary-dark)" }}
            >
              <Link
                to={createPageUrl("Contact")}
                className="flex items-center text-white"
              >
                Start Your Integration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
