import "./App.css";
import logo from "./assets/mwave-logo.png";
import pwcLogo from "./assets/Pwc.png";
import rosemaryLogo from "./assets/Rosemery-CRM.png";
import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";

function Home({ aboutRef, servicesRef, contactRef, scrollToSection }) {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-subtitle">YOUR CERTIFIED GUIDE TO</div>
          <h1 className="hero-title">
            BOOKING MANAGEMENT
            <br />
            AS A WAY OF LIFE
          </h1>
          <div className="hero-catchphrase">
            Built by developers who know the
            <br />
            industry, for venues who live it.
          </div>
        </div>
      </section>
      <section className="admin-overload-section">
        <h2 className="admin-overload-title">
          Admin overload is costing you time —<br />
          and customers.
        </h2>
        <div className="admin-overload-text">
          Most venues are stuck jumping between spreadsheets, calendars,
          messages, and paperwork — just to stay afloat.
          <br />
          Important enquiries are missed, admin becomes overwhelming, and time
          gets lost in the chaos.
          <br />
          <br />
          <b>We think there's a better way.</b>
        </div>
      </section>
      <section className="solutions-section">
        <div className="solutions-content">
          <div className="solutions-left">
            <h2 className="solutions-title">Our Solutions</h2>
            <div className="solutions-subtitle">
              A SIMPLER WAY TO MANAGE EVERYTHING
            </div>
            <ul className="solutions-list">
              <li>A clear view of all your bookings and availability</li>
              <li>Client details and event notes in one place</li>
              <li>Easy tracking of payments and documents</li>
              <li>
                Schedule viewings and follow-ups without the back and forth
              </li>
              <li>Less admin, more control</li>
            </ul>
          </div>
          <div className="solutions-right">
            <img
              src={rosemaryLogo}
              alt="Rosemary CRM Logo"
              className="solutions-image"
            />
          </div>
        </div>
      </section>
      <section ref={servicesRef} className="section services-section">
        <h2 className="section-title">WORK WITH MWave</h2>
        <div className="service-columns">
          <div className="service-col">
            <h3>1:1 CONSULTING</h3>
            <p>
              A free 30 min call to discuss where we can improve your booking
              management system.
            </p>
            <a
              href="https://calendly.com/mwave-consulting/30min"
              className="learn-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
          <div className="service-col">
            <h3>ONLINE TRAINING</h3>
            <p>Self-paced lessons and resources for your team.</p>
            <a href="#" className="learn-link">
              Learn more
            </a>
          </div>
          <div className="service-col">
            <h3>LIVE EVENTS</h3>
            <p>Interactive webinars and workshops for ongoing success.</p>
            <a href="#" className="learn-link">
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section ref={contactRef} className="section contact-section">
        <div className="contact-card">
          <h2 className="section-title">CONTACT</h2>
          <form
            className="contact-form"
            action="https://formsubmit.co/mwave.consulting@protonmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="https://mwaveconsulting.com"
            />
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="How can we help you?"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
}

function WhoAreWe() {
  return (
    <main>
      <section className="section who-section">
        <h2 className="section-title">Who We Are</h2>
        <div className="who-intro">
          <p>
            We are the co-founders of MWave Consulting—experienced corporate
            technology professionals with a proven track record at leading
            global firms. With backgrounds in technology consulting and software
            development, we leverage our expertise and industry insight to
            deliver innovative, high-impact solutions for clients in the wedding
            venue industry.
          </p>
        </div>
        <div className="who-cards">
          <div className="who-card">
            <img src={pwcLogo} alt="PwC Logo" className="who-logo" />
            <h3>
              Tech Consultant
              <br />
              <span className="cofounder-label">Co-Founder of MWave</span>
            </h3>
            <p>
              Currently at PwC, specializing in technology consulting and
              digital transformation for leading organizations.
            </p>
          </div>
          <div className="who-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
              alt="IBM Logo"
              className="who-logo"
            />
            <h3>
              Software Developer
              <br />
              <span className="cofounder-label">Co-Founder of MWave</span>
            </h3>
            <p>
              Currently at IBM, building robust software solutions and driving
              innovation in the tech industry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Calendly badge widget CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Calendly badge widget JS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Init badge widget after script loads
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/mwave-consulting/30min",
          text: "Book Now",
          color: "#b6a99a",
          textColor: "#0f4c49",
          branding: true,
        });
      }
    };

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header className="main-header">
        <div className="header-row">
          <div className="header-logo-col">
            <img
              src={logo}
              alt="MWave Consulting Logo"
              className="header-logo large"
            />
          </div>
          <nav className="main-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/who-are-we" className="nav-link">
              Who We Are
            </Link>
            <button onClick={() => scrollToSection(servicesRef)}>
              Services
            </button>
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
          </nav>
          <div className="header-actions">
            <button
              className="cta-btn"
              onClick={() => scrollToSection(servicesRef)}
            >
              Work with Us
            </button>
          </div>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              aboutRef={aboutRef}
              servicesRef={servicesRef}
              contactRef={contactRef}
              scrollToSection={scrollToSection}
            />
          }
        />
        <Route path="/who-are-we" element={<WhoAreWe />} />
      </Routes>
      <footer className="footer minimal-footer">
        &copy; {new Date().getFullYear()} MWave Consulting. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
