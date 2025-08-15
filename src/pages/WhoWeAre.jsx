import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Lightbulb } from "lucide-react";

export default function WhoWeAre() {
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

  const values = [
    {
      icon: Target,
      title: "Innovation-Driven",
      description:
        "We leverage cutting-edge AI technologies to solve real business challenges with practical, scalable solutions.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Every solution is tailored to your specific business needs, ensuring maximum ROI and seamless integration.",
    },
    {
      icon: Award,
      title: "Enterprise Quality",
      description:
        "Our corporate backgrounds ensure we deliver solutions that meet the highest standards of reliability and security.",
    },
    {
      icon: Lightbulb,
      title: "Future-Ready",
      description:
        "We build AI agents that evolve with your business, providing long-term value and competitive advantage.",
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
          <div className="text-center animate-on-scroll">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              style={{ color: "var(--primary-dark)" }}
            >
              Who We Are
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are the co-founders of MWave Consulting—experienced corporate
              technology professionals with a proven track record at leading
              global firms.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-8"
              style={{ color: "var(--primary-dark)" }}
            >
              Our Story
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                With backgrounds in technology consulting and software
                development, we leverage our expertise and industry insight to
                deliver innovative, high-impact solutions for clients across
                industries.
              </p>
              <p>
                Our experience at top-tier consulting firms and technology
                companies has given us unique insights into what businesses
                really need: AI solutions that work seamlessly, integrate
                effortlessly, and deliver measurable results from day one.
              </p>
              <p>
                We founded MWave Consulting to bridge the gap between
                cutting-edge AI capabilities and practical business
                applications, ensuring our clients stay ahead in an increasingly
                automated world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "var(--primary-dark)" }}
            >
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600">
              Corporate professionals bringing enterprise-grade expertise to AI
              consulting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Co-Founder 1 */}
            <Card className="animate-on-scroll fade-in-delay-1 hover-lift smooth-transition border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Users className="w-16 h-16 text-blue-600" />
                  </div>
                  <Badge
                    className="mb-4 px-3 py-1"
                    style={{ backgroundColor: "var(--primary-dark)" }}
                  >
                    Co-Founder
                  </Badge>
                </div>

                <h3
                  className="text-2xl font-bold text-center mb-2"
                  style={{ color: "var(--primary-dark)" }}
                >
                  Tech Consultant Co-Founder
                </h3>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/09/PwC-Logo.png"
                      alt="PwC"
                      className="h-8 object-contain"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    Currently at PwC
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Specializing in technology consulting and digital
                    transformation for leading organizations. Expert in
                    enterprise AI implementation, process automation, and
                    strategic technology planning.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Target className="w-5 h-5 mr-3 text-blue-500" />
                    <span>Digital Transformation Strategy</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="w-5 h-5 mr-3 text-blue-500" />
                    <span>Enterprise AI Implementation</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-3 text-blue-500" />
                    <span>Client Relationship Management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Co-Founder 2 */}
            <Card className="animate-on-scroll fade-in-delay-2 hover-lift smooth-transition border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <Lightbulb className="w-16 h-16 text-purple-600" />
                  </div>
                  <Badge
                    className="mb-4 px-3 py-1"
                    style={{ backgroundColor: "var(--primary-dark)" }}
                  >
                    Co-Founder
                  </Badge>
                </div>

                <h3
                  className="text-2xl font-bold text-center mb-2"
                  style={{ color: "var(--primary-dark)" }}
                >
                  Software Developer Co-Founder
                </h3>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png"
                      alt="IBM"
                      className="h-8 object-contain"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    Currently at IBM
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Building robust software solutions and driving innovation in
                    the tech industry. Expert in AI/ML development, system
                    architecture, and scalable software engineering.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Lightbulb className="w-5 h-5 mr-3 text-purple-500" />
                    <span>AI & Machine Learning Development</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Target className="w-5 h-5 mr-3 text-purple-500" />
                    <span>System Architecture & Design</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="w-5 h-5 mr-3 text-purple-500" />
                    <span>Software Engineering Excellence</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "var(--primary-dark)" }}
            >
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to AI consulting and client
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`animate-on-scroll fade-in-delay-${
                  index + 1
                } hover-lift smooth-transition border-0 shadow-lg`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: "var(--primary-dark)" }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "var(--primary-dark)" }}
          >
            Why Choose MWave Consulting?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-3">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--primary-dark)" }}
              >
                10+
              </div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div className="space-y-3">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--primary-dark)" }}
              >
                100+
              </div>
              <div className="text-gray-600">Enterprise Projects Delivered</div>
            </div>
            <div className="space-y-3">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--primary-dark)" }}
              >
                99%
              </div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            When you choose MWave Consulting, you're not just getting an AI
            solution—you're partnering with seasoned professionals who
            understand both the technical capabilities of AI and the strategic
            needs of modern businesses.
          </p>
        </div>
      </section>
    </div>
  );
}
