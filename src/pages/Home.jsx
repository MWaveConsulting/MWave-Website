import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Phone, Zap, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundNetwork from "@/components/BackgroundNetwork";

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const integrationsRef = useRef(null);

  const services = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description:
        "Intelligent conversational agents that understand context, handle complex queries, and provide instant customer support 24/7.",
      features: [
        "Natural Language Processing",
        "Multi-platform Integration",
        "Real-time Analytics",
      ],
    },
    {
      icon: Phone,
      title: "Phone AI Agents",
      description:
        "Voice-enabled booking systems that handle calls professionally, schedule appointments, and manage customer inquiries.",
      features: ["Voice Recognition", "Appointment Scheduling", "Call Routing"],
    },
    {
      icon: Zap,
      title: "System Integrations",
      description:
        "Seamless connections to your existing CRM, calendar systems, and business tools for automated workflows.",
      features: [
        "CRM Synchronization",
        "Calendar Management",
        "Data Automation",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Automation",
      description:
        "Round-the-clock customer service that never sleeps, ensuring your business is always available to customers.",
      features: [
        "Always Available",
        "Instant Responses",
        "Escalation Management",
      ],
    },
  ];

  const integrations = [
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

  const stats = [
    { number: "90%", label: "Reduction in Response Time" },
    { number: "10x", label: "More Inquiries Handled" },
    { number: "40%", label: "Increase in Bookings" },
    { number: "500+", label: "Business Tools Integration" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ background: "#00167a" }}
      >
        <BackgroundNetwork />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Intelligent AI Agents</span>
                <br />
                <span className="text-white">That Transform</span>
                <br />
                <span className="text-white">Your Venue</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed px-4"
            >
              We build advanced chatbots and phone agents that handle bookings,
              integrate with your favorite tools, and provide 24/7 customer
              support
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 px-4"
            >
              <Button
                asChild
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-lg hover:shadow-xl smooth-transition bg-white text-blue-900 hover:bg-gray-100"
              >
                <Link
                  to={createPageUrl("Contact")}
                  className="flex items-center"
                >
                  Ride the MWave <span className="ml-2">🏄</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 smooth-transition"
                style={{
                  borderColor: "white",
                  color: "white",
                }}
              >
                <Link
                  to={createPageUrl("OurSolutions")}
                  className="hover:bg-white/10"
                >
                  View Solutions
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "var(--primary-dark)" }}
            >
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI solutions designed to automate your business
              processes and enhance customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-lift smooth-transition border-0 shadow-lg"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: "var(--primary-dark)" }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Showcase */}
      <section
        ref={integrationsRef}
        className="py-20"
        style={{ backgroundColor: "var(--bg-light)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "var(--primary-dark)" }}
            >
              Connects to Your Favorite Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless integration with over 500+ business applications and
              services
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="hover-lift smooth-transition bg-white rounded-xl p-4 sm:p-6 shadow-md group"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 smooth-transition"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 smooth-transition"
              style={{
                borderColor: "var(--primary-dark)",
                color: "var(--primary-dark)",
              }}
            >
              <Link to={createPageUrl("OurSolutions")}>
                View All Integrations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "var(--primary-dark)" }}
          >
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading companies who trust MWave Consulting to deliver
            intelligent AI solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-lg hover:shadow-xl smooth-transition text-white"
              style={{ backgroundColor: "var(--primary-dark)" }}
            >
              <Link
                to={createPageUrl("Contact")}
                className="flex items-center text-white"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 text-white" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 smooth-transition"
              style={{
                borderColor: "var(--primary-dark)",
                color: "var(--primary-dark)",
              }}
            >
              <Link to={createPageUrl("WhoWeAre")}>Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
