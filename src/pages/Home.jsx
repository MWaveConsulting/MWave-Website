import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Phone, Zap, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const integrationsRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      logo: "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Logo.png",
    },
    {
      name: "Oracle",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
    },
    {
      name: "Google Calendar",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Calendar-Logo.png",
    },
    {
      name: "Google Sheets",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Google-Sheets-Logo.png",
    },
    {
      name: "Notion",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Notion-Logo.png",
    },
    {
      name: "HubSpot",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/HubSpot-Logo.png",
    },
    {
      name: "Microsoft 365",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-365-Logo.png",
    },
    {
      name: "Slack",
      logo: "https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png",
    },
    {
      name: "Zoom",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Zoom-Logo.png",
    },
    {
      name: "Stripe",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png",
    },
    {
      name: "Zapier",
      logo: "https://logos-world.net/wp-content/uploads/2021/10/Zapier-Logo.png",
    },
    {
      name: "Monday.com",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Monday-Logo.png",
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
        style={{
          background:
            "linear-gradient(135deg, var(--bg-light) 0%, #ffffff 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center animate-on-scroll">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Intelligent AI Agents
                </span>
                <br />
                <span style={{ color: "var(--primary-dark)" }}>
                  That Transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Your Business
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              We build advanced chatbots and phone agents that handle bookings,
              integrate with your favorite tools, and provide 24/7 customer
              support
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl smooth-transition"
                style={{ backgroundColor: "var(--primary-dark)" }}
              >
                <Link
                  to={createPageUrl("Contact")}
                  className="flex items-center"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 smooth-transition"
                style={{
                  borderColor: "var(--primary-dark)",
                  color: "var(--primary-dark)",
                }}
              >
                <Link to={createPageUrl("OurSolutions")}>View Solutions</Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll fade-in-delay-1"
              >
                <div
                  className="text-3xl lg:text-4xl font-bold mb-2"
                  style={{ color: "var(--primary-dark)" }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`animate-on-scroll fade-in-delay-${
                  index + 1
                } hover-lift smooth-transition border-0 shadow-lg`}
              >
                <CardContent className="p-8 text-center">
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
          <div className="text-center mb-16 animate-on-scroll">
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="animate-on-scroll hover-lift smooth-transition bg-white rounded-xl p-6 shadow-md group"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 smooth-transition"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl smooth-transition"
              style={{ backgroundColor: "var(--primary-dark)" }}
            >
              <Link to={createPageUrl("Contact")} className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 smooth-transition"
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
