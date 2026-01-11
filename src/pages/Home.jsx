import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundNetwork from "@/components/BackgroundNetwork";

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const integrationsRef = useRef(null);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ background: "var(--primary)" }}
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
                <span className="text-white">Your Business</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed px-4"
            >
              We build intelligent workflows that automate business processes,
              integrate with your existing tools, and save time and operational
              costs.
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
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-lg hover:shadow-xl smooth-transition bg-white hover:bg-gray-100"
                style={{ color: "var(--primary)" }}
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
        </div>
      </section>

      {/* The Thinking AI Buildout */}
      <section
        ref={servicesRef}
        className="py-20"
        style={{
          background: "linear-gradient(to bottom, white, var(--background))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg sm:text-xl font-semibold mb-4 text-gray-500 uppercase tracking-wide">
                Introducing
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ color: "var(--primary-dark)" }}
              >
                The MWave AI Buildout
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                A high-touch, done-with-you AI implementation where I personally
                architect and build custom Thinking AI systems across your
                sales, content, and operations.
              </p>
            </motion.div>
          </div>

          {/* Timeline Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              From Bottlenecks To MWave AI
            </h3>
          </motion.div>

          {/* Timeline Cards - Left to Right */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
              {/* Week 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full hover-lift smooth-transition border-2 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        1
                      </div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Phase 1
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-6"
                      style={{ color: "var(--primary-dark)" }}
                    >
                      Discovery
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We learn your business inside out. What's stuck in your
                      head. Where the friction lives. What's actually costing
                      you time and money.
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm italic leading-relaxed">
                        Most consultants skip this. They show up with templates.
                        We show up with questions—because your business isn't a
                        template.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Weeks 2-3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card
                  className="h-full hover-lift smooth-transition border-2 shadow-xl"
                  style={{
                    background:
                      "linear-gradient(to bottom right, white, rgba(8, 145, 178, 0.05))",
                  }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        2
                      </div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Phase 2
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-6"
                      style={{ color: "var(--primary-dark)" }}
                    >
                      Build
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      I create your Thinking AI solutions. Your AI Clone. Your
                      Command Center. Your problem-specific tools.
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Each one trained on your data. Your voice. Your way of
                        thinking. Built to handle the unexpected.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Week 4 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="h-full hover-lift smooth-transition border-2 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                        style={{ backgroundColor: "var(--primary-dark)" }}
                      >
                        3
                      </div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Phase 3
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-6"
                      style={{ color: "var(--primary-dark)" }}
                    >
                      Deploy & Train
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Everything goes live. Your team learns the systems. We
                      optimize until it runs smooth.
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        You walk away with Thinking AI that works - and a team
                        that knows how to use it.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Flex Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 italic max-w-2xl mx-auto">
                If needed, we flex to 5-6 weeks. Same investment. The objective
                matters more than the calendar.
              </p>
            </motion.div>
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
