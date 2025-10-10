import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Bot, Calendar, Phone, Mail, Menu, X } from "lucide-react";
import BackgroundNetwork from "@/components/BackgroundNetwork";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", path: "Home" },
    { name: "Who We Are", path: "WhoWeAre" },
    { name: "Our Solutions", path: "OurSolutions" },
    { name: "Contact Us", path: "Contact" },
  ];

  const isActivePage = (pagePath) => {
    const pageUrl = createPageUrl(pagePath);
    return location.pathname === pageUrl;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-rustic)" }}>
      <style>
        {`
          :root {
            --primary-dark: #1f2428;
            --cta-blue:rgb(74, 127, 0);
            --primary-light: #37404a;
            --text-gray: #6b7280;
            --border-gray: #e5e7eb;
            --bg-light: #f8fafc;
          }
          
          .smooth-transition {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s ease-out forwards;
          }
          
          .fade-in-delay-1 { animation-delay: 0.1s; }
          .fade-in-delay-2 { animation-delay: 0.2s; }
          .fade-in-delay-3 { animation-delay: 0.3s; }
          
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .glass-card {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        `}
      </style>

      {/* Background Animation Layer */}
      <BackgroundNetwork />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo */}
            <div className="flex-none">
              <Link
                to={createPageUrl("Home")}
                className="flex items-center space-x-2 sm:space-x-3 group"
              >
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center smooth-transition group-hover:scale-105"
                  style={{ backgroundColor: "var(--primary-dark)" }}
                >
                  <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <div
                    className="font-bold text-lg sm:text-xl"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    MWave
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "var(--text-gray)" }}
                  >
                    Consulting
                  </div>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  className={`px-3 lg:px-4 py-2 rounded-lg font-medium smooth-transition text-sm lg:text-base ${
                    isActivePage(item.path)
                      ? "text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={
                    isActivePage(item.path)
                      ? { backgroundColor: "var(--primary-dark)" }
                      : {}
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right: CTA & Mobile Menu */}
            <div className="flex-none flex items-center">
              <Button
                asChild
                className="hidden md:flex shadow-md hover:shadow-lg smooth-transition text-white"
                style={{ backgroundColor: "var(--cta-blue)" }}
              >
                <Link to={createPageUrl("Contact")} className="text-white">
                  Get Started
                </Link>
              </Button>
              <button
                className="md:hidden p-2 rounded-lg smooth-transition hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 glass-card">
            <div className="px-4 py-3 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  className={`block px-4 py-3 rounded-lg font-medium smooth-transition ${
                    isActivePage(item.path)
                      ? "text-white shadow-md"
                      : "text-gray-600"
                  }`}
                  style={
                    isActivePage(item.path)
                      ? { backgroundColor: "var(--primary-dark)" }
                      : {}
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full mt-3 text-white"
                style={{ backgroundColor: "var(--cta-blue)" }}
              >
                <Link
                  to={createPageUrl("Contact")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white"
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16 relative z-10">{children}</main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-gray)] mt-20 relative z-10" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary-dark)" }}
                >
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div
                    className="font-bold text-xl"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    MWave Consulting
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--text-gray)" }}
                  >
                    Intelligent AI Agents for Venues
                  </div>
                </div>
              </div>
              <p className="text-gray-600 max-w-md">
                We build advanced chatbots and phone agents that handle
                bookings, integrate with your favorite tools, and provide 24/7
                customer support.
              </p>
            </div>

            <div>
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--primary-dark)" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={createPageUrl(item.path)}
                      className="text-gray-600 hover:text-gray-900 smooth-transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="font-semibold mb-4"
                style={{ color: "var(--primary-dark)" }}
              >
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>mwave.consulting@protonmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>Schedule a consultation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>&copy; 2025 MWave Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
