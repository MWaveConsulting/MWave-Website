import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

  // Tree diagram data based on PDF
  const treeData = {
    aiAutomation: {
      title: "AI & Automation",
      description:
        "We remove bottlenecks by turning repetitive workflows into intelligent systems.",
      waves: [
        {
          number: 1,
          title: "Discovery",
          description:
            "We deeply understand your business to identify what's really slowing you down and costing you money & time.",
        },
        {
          number: 2,
          title: "Build",
          description:
            "We build custom AI systems trained on your data, business, voice, and way of thinking to solve your specific problems.",
        },
        {
          number: 3,
          title: "Deploy & Train",
          description:
            "We launch, train your team, and optimise until the AI works smoothly in real-world use.",
        },
      ],
    },
    leadGeneration: {
      title: "AI Lead Generation",
      description:
        "We build end-to-end lead engines that qualify and book clients automatically.",
      steps: [
        { number: 1, title: "Social Media Ads & Website" },
        { number: 2, title: "Calendar Booking" },
        { number: 3, title: "AI Caller" },
        { number: 4, title: "Onboarding" },
      ],
      benefits: [
        "Faster response times",
        "Only qualified leads reach your calendar",
        "Scales without hiring",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Tree Diagram Section */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #f1f2fa 0%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "#070813" }}
            >
              Solutions Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two comprehensive approaches to transform your business
            </p>
          </div>

          {/* Tree Structure */}
          <div className="relative max-w-6xl mx-auto">
            {/* Root Node */}
            <div className="flex justify-center mb-12">
              <div
                className="text-white px-12 py-6 rounded-2xl shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #00167a 0%, #0891b2 100%)",
                }}
              >
                <h3 className="text-3xl font-bold text-center">Solutions</h3>
              </div>
            </div>

            {/* Connecting Lines from Root */}
            <div className="relative h-16 mb-8">
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ overflow: "visible" }}
              >
                <line
                  x1="50%"
                  y1="0"
                  x2="25%"
                  y2="100%"
                  stroke="#00167a"
                  strokeWidth="3"
                />
                <line
                  x1="50%"
                  y1="0"
                  x2="75%"
                  y2="100%"
                  stroke="#00167a"
                  strokeWidth="3"
                />
              </svg>
            </div>

            {/* Main Branches */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* AI & Automation Branch */}
              <div className="flex flex-col items-center h-full">
                <Card
                  className="w-full border-2 shadow-xl hover:shadow-2xl transition-shadow h-full flex flex-col"
                  style={{
                    borderColor: "#00167a",
                    background:
                      "linear-gradient(135deg, rgba(0, 22, 122, 0.05) 0%, rgba(8, 145, 178, 0.05) 100%)",
                  }}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #00167a 0%, #0891b2 100%)",
                      }}
                    >
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle
                      className="text-2xl font-bold"
                      style={{ color: "#070813" }}
                    >
                      {treeData.aiAutomation.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-center">
                    <p className="text-center text-gray-700 text-sm leading-relaxed">
                      {treeData.aiAutomation.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Sub-branches for AI Automation */}
                <div className="relative h-12 w-full">
                  <svg className="absolute inset-0 w-full h-full">
                    <line
                      x1="50%"
                      y1="0"
                      x2="16%"
                      y2="100%"
                      stroke="#00167a"
                      strokeWidth="2"
                    />
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="100%"
                      stroke="#00167a"
                      strokeWidth="2"
                    />
                    <line
                      x1="50%"
                      y1="0"
                      x2="84%"
                      y2="100%"
                      stroke="#00167a"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full mt-4">
                  {treeData.aiAutomation.waves.map((wave) => (
                    <Card
                      key={wave.number}
                      className="border shadow-md hover:shadow-lg transition-shadow bg-white"
                      style={{ borderColor: "#0891b2" }}
                    >
                      <CardContent className="p-4 text-center">
                        <div
                          className="w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: "#00167a" }}
                        >
                          {wave.number}
                        </div>
                        <h4
                          className="font-bold mb-2 text-sm"
                          style={{ color: "#070813" }}
                        >
                          {wave.title}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {wave.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* AI Lead Generation Branch */}
              <div className="flex flex-col items-center h-full">
                <Card
                  className="w-full border-2 shadow-xl hover:shadow-2xl transition-shadow h-full flex flex-col"
                  style={{
                    borderColor: "#0891b2",
                    background:
                      "linear-gradient(135deg, rgba(8, 145, 178, 0.05) 0%, rgba(239, 68, 68, 0.05) 100%)",
                  }}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #0891b2 0%, #ef4444 100%)",
                      }}
                    >
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle
                      className="text-2xl font-bold"
                      style={{ color: "#070813" }}
                    >
                      {treeData.leadGeneration.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-center">
                    <p className="text-center text-gray-700 text-sm leading-relaxed">
                      {treeData.leadGeneration.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Sub-branches for Lead Generation */}
                <div className="relative h-12 w-full">
                  <svg className="absolute inset-0 w-full h-full">
                    <line
                      x1="50%"
                      y1="0"
                      x2="12.5%"
                      y2="100%"
                      stroke="#0891b2"
                      strokeWidth="2"
                    />
                    <line
                      x1="50%"
                      y1="0"
                      x2="37.5%"
                      y2="100%"
                      stroke="#0891b2"
                      strokeWidth="2"
                    />
                    <line
                      x1="50%"
                      y1="0"
                      x2="62.5%"
                      y2="100%"
                      stroke="#0891b2"
                      strokeWidth="2"
                    />
                    <line
                      x1="50%"
                      y1="0"
                      x2="87.5%"
                      y2="100%"
                      stroke="#0891b2"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="space-y-4 w-full mt-4">
                  <div className="grid grid-cols-4 gap-3">
                    {treeData.leadGeneration.steps.map((step) => (
                      <Card
                        key={step.number}
                        className="border shadow-md hover:shadow-lg transition-shadow bg-white"
                        style={{ borderColor: "#0891b2" }}
                      >
                        <CardContent className="p-3 text-center">
                          <div
                            className="w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center text-white font-bold text-xs"
                            style={{ backgroundColor: "#0891b2" }}
                          >
                            {step.number}
                          </div>
                          <h4
                            className="font-semibold text-xs leading-tight"
                            style={{ color: "#070813" }}
                          >
                            {step.title}
                          </h4>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card
                    className="border-2 shadow-md"
                    style={{
                      borderColor: "#ef4444",
                      background:
                        "linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(8, 145, 178, 0.05) 100%)",
                    }}
                  >
                    <CardContent className="p-4">
                      <h4
                        className="font-bold mb-3 text-center text-sm"
                        style={{ color: "#070813" }}
                      >
                        Benefits
                      </h4>
                      <div className="space-y-2">
                        {treeData.leadGeneration.benefits.map(
                          (benefit, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle
                                className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                                style={{ color: "#0891b2" }}
                              />
                              <span className="text-xs text-gray-700">
                                {benefit}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "#070813" }}
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
                className="hover:shadow-xl transition-shadow bg-white rounded-xl p-6 shadow-lg group"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Plus 500+ more integrations available through APIs and webhooks
            </p>
            <Button
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow text-white"
              style={{
                background: "linear-gradient(135deg, #00167a 0%, #0891b2 100%)",
              }}
            >
              Start Your Integration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
