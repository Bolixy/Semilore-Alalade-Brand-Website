import "./App.css";
import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import wealthachemist from "./assets/wealthachemist.jpg";
import background1 from "./assets/background1.png";
import background2 from "./assets/background2.png";
import SemiloreHeadshot from "./assets/SemiloreHeadshot.png";
import conference1 from "./assets/conference1.png";
import conference2 from "./assets/conference2.png";
import conference3 from "./assets/conference3.png";
import aftercon from "./assets/aftercon.png";
import aftercon2 from "./assets/aftercon2.png";
import award1 from "./assets/award1.png";
import award2 from "./assets/award2.png";
import test1 from "./assets/test1.png";
import test2 from "./assets/test2.png";
import test3 from "./assets/test3.png";
import test4 from "./assets/test4.png";
import test5 from "./assets/test5.png";
import cert from "./assets/cert.png";
import { BrowserRouter } from "react-router-dom";

const stats = [
  { value: "15+", label: "Years of Impact" },
  { value: "300+", label: "Speaking Events" },
  { value: "50K", label: "Lives Touched" },
];

const highlights = [
  {
    title: "Purpose Discovery",
    text: "Helping individuals and teams uncover what truly matters and align action with vision.",
  },
  {
    title: "Leadership Clarity",
    text: "Equipping leaders with practical strategies to communicate, decide, and lead confidently.",
  },
  {
    title: "Transformational Speaking",
    text: "Creating unforgettable experiences that inspire people to step into their next season.",
  },
];

const testimonials = [
  {
    quote:
      "Tonight was a power-packed session. You dished out value after value.",
    name: "Samuel Nyalongwe",
    role: "Participant",
    image: test1,
  },
  {
    quote:
      "Today's class was amazing, inspiring, and wonderful. I learned a lot and discovered questions to reflect on.",
    name: "Irradatullahi",
    role: "Participant",
    image: test2,
  },
  {
    quote:
      "It was a really impactful enlightenment session that brings clarity and the reality of life.",
    name: "Samuel Ayomide",
    role: "Participant",
    image: test3,
  },
  {
    quote:
      "It was an amazing one. So much knowledge was shared on finding problems your skills can solve.",
    name: "Odubote Sola",
    role: "Participant",
    image: test4,
  },
];

const conferences = [
  {
    title: "Game Changer Conference, Osun State University - Media 1",
    date: "November 2024",
    location: "Osun, Nigeria",
    image: conference1,
  },
  {
    title: "Game Changer Conference, Osun State University - Media 2",
    date: "November 2024",
    location: "Osun, Nigeria",
    image: conference3,
  },
  {
    title: "Game Changer Conference, Osun State University - Media 3",
    date: "November 2024",
    location: "Osun, Nigeria",
    image: conference2,
  },
  {
    title: "Game Changer Conference, Osun State University - Award",
    date: "November 2024",
    location: "Osun, Nigeria",
    image: award2,
  },
  {
    title: "Game Changer Conference, Osun State University - Award",
    date: "November 2024",
    location: "Osun, Nigeria",
    image: award1,
  },
  {
    title: "Game Changer Conference, Osun State University - Red Carpet",
    date: "November 2024",
    location: "Osun, Nigeria",
    image: aftercon2,
  },
];

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <img
          className="brand-logo"
          src={wealthachemist}
          alt="Wealthachemist logo"
        />
        <span className="brand-name">Semilore Alalade</span>
      </Link>

      <nav className="nav-con">
        <HashLink smooth to="/about">
          About
        </HashLink>
        <HashLink smooth to="/conferences">
          Conferences
        </HashLink>
        <HashLink smooth to="/#impact">
          Impact
        </HashLink>
        <HashLink smooth to="/#testimonials">
          Testimonials
        </HashLink>
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </nav>

      <a href="#subscribe" className="nav-button">
        Book Speaker
      </a>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      <div className={`mobile-sidebar ${isOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>
        <div className="hashlinks">
          <HashLink smooth to="/about" onClick={() => setIsOpen(false)}>
            About
          </HashLink>

          <HashLink smooth to="/conferences" onClick={() => setIsOpen(false)}>
            Conferences
          </HashLink>

          <HashLink smooth to="/#impact" onClick={() => setIsOpen(false)}>
            Impact
          </HashLink>

          <HashLink smooth to="/#testimonials" onClick={() => setIsOpen(false)}>
            Testimonials
          </HashLink>

          <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>
            Contact
          </HashLink>
          <a href="#subscribe" id="nav-butt">
            Book Speaker
          </a>
        </div>
      </div>
    </header>
  );
};

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    setSubscribeStatus("sending");

    try {
      await emailjs.send(
        "service_nf53csj",
        "template_fedcxqc",
        {
          subscriber_email: email,
        },
        "t8HvykFsioQ0LBT6j",
      );

      setSubscribeStatus("success");
      setEmail("");

      setTimeout(() => {
        setSubscribeStatus("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setSubscribeStatus("error");
    }
  };
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">
            Purpose Discovery & Clarity Strategist
          </span>
          <h1>
            Unlock your next season of <span>purpose</span> and impact.
          </h1>
          <p>
            Semilore Alalade helps individuals, teams, and organizations
            discover clarity, align their mission, and move forward with
            confidence.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Speak With Semilore
            </a>
            <a className="button secondary" href="#testimonials">
              Hear What Others Say
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/semilorealalade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/semilorealalade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-image"
            src={SemiloreHeadshot}
            alt="Semilore Alalade headshot"
          />
          <div className="visual-card main-card">
            <div className="visual-badge">Featured Speaker</div>
            <h3>The Game Changer Conference</h3>
            <p>Where purpose meets transformation.</p>
          </div>
          <div className="visual-card floating-card">
            <span>Available for</span>
            <strong>Corporate Events</strong>
            <strong>Leadership Retreats</strong>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="about" id="about">
        <div className="about-image">
          <img src={background2} alt="Semilore speaking with an audience" />
          <div className="about-quote">
            Your clarity is not a luxury,It is your launchpad.
          </div>
        </div>

        <div className="about-text">
          <span className="eyebrow">About Semilore</span>
          <h2>Helping people move from confusion to conviction.</h2>
          <p>
            Semilore Alalade is a speaker, strategist, and author committed to
            helping people uncover who they are, what they stand for, and how to
            live with intention.
          </p>
          <p>
            Through speaking engagements, mentoring, and transformative
            programs, he equips audiences with the mindset and tools needed to
            lead with clarity and purpose.
          </p>
          <Link className="text-link" to="/about">
            Learn more about him →
          </Link>
        </div>
      </section>

      <section className="impact" id="impact">
        <div className="section-heading">
          <span className="eyebrow">What I Do</span>
          <h2>Purpose-led work that creates lasting change.</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="conferences" id="conferences">
        <div className="section-heading">
          <span className="eyebrow">Past Conferences</span>
          <h2>Moments of impact, reflection, and transformation.</h2>
        </div>
        <div className="conference-grid">
          {conferences.map((item) => (
            <article className="conference-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="section-link-wrap">
          <Link className="button secondary" to="/conferences">
            View all conference highlights
          </Link>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>What audiences and partners say.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.name}>
              <p>“{item.quote}”</p>
              <footer>
                <strong>{item.name}</strong> <br />
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="newsletter" id="subscribe">
        <div>
          <span className="eyebrow">Stay Connected</span>
          <h2>Subscribe for updates, insights, and speaking invitations.</h2>
        </div>
        <form onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={subscribeStatus === "sending"}>
            {subscribeStatus === "sending" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {subscribeStatus === "success" && (
          <div className="status-message success">
            ✓ Thank you for subscribing to semilore alalade newsletter!
          </div>
        )}
        {subscribeStatus === "error" && (
          <div className="status-message error">
            Error. Please try again later.
          </div>
        )}
      </section>

      <section className="contact" id="contact">
        <div className="contact-card">
          <span className="eyebrow">Let's Work Together</span>
          <h2>Book Semilore for your next event.</h2>
          <p>
            Invite Semilore Alalade to speak at your conference, seminar, youth
            gathering, leadership program, or empowerment event. With a clear,
            practical, and transformational message, Semilore helps individuals
            discover their purpose, develop the right mindset, and take
            intentional steps toward growth, influence, and lasting impact.
          </p>
        </div>

        <div className="contact-form-card">
          <div className="contact-details">
            <div>
              <span>Email</span>
              <a href="mailto:hello@semilorealade.com">
                helloalaladesemilore@gmail.com
              </a>
            </div>
            <div>
              <span>Phone</span>
              <a href="tel:+2348000000000">+2349044504735</a>
            </div>
          </div>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea
              rows="4"
              placeholder="Tell us about your event or organization"
            ></textarea>
            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </section>
    </main>
  );
};

const AboutPage = () => (
  <main className="page-content">
    <section className="page-hero">
      <div>
        <span className="eyebrow">About</span>
        <h1>Purpose is not a destination — it is a way of living.</h1>
      </div>
      <img src={background1} alt="Semilore speaking to an audience" />
    </section>

    <section className="page-section">
      <div className="page-text-block">
        <h2>Who Semilore is</h2>
        <p>
          Semilore Alalade is a Purpose Discovery and Clarity Strategist,
          author, speaker, and convener of The Game Changer Conference. He helps
          people and organizations move from confusion to conviction through
          insight, strategy, and intentional action.
        </p>
      </div>
      <div className="page-card-stack">
        <div className="page-card">
          <h3>Mission</h3>
          <p>
            To help people discover clarity, align their values, and live with
            impact.
          </p>
        </div>
        <div className="page-card">
          <h3>Approach</h3>
          <p>
            Practical, transformational, and deeply human — designed for real
            life change.
          </p>
        </div>
      </div>
    </section>

    <section className="page-section social-proof">
      <div className="section-heading">
        <span className="eyebrow">Recognition & Impact</span>
        <h2>Speaking proof and certifications</h2>
      </div>
      <img
        className="cert-image"
        src={cert}
        alt="Certificate of Appreciation from Osun State University"
      />
    </section>

    <section className="page-section testimonials-showcase">
      <div className="section-heading">
        <span className="eyebrow">Student & Participant Feedback</span>
        <h2>Transformational moments from real participants</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div className="testimonial-with-image" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="testimonial-content">
              <p className="testimonial-quote">" {item.quote} "</p>
              <strong className="testimonial-name">{item.name}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

const speakingTopics = [
  "Discovering Your Purpose",
  "Building Clarity and Confidence",
  "Purpose as the Foundation for Lasting Wealth",
  "Becoming a Game Changer in Your Sphere of Influence",
  "Mindset Transformation for Young Leaders",
  "Unlocking Untapped Potential",
  "Living with Passion and Intention",
  "Building Influence with Purpose",
  "Purpose-Driven Prosperity",
  "From Potential to Impact",
  "Mastering Time and Money as a Student",
  "Turning Your Skill into a Solution",
  "Building a Valuable Mindset for Growth",
];

const bookingGuidelines = [
  {
    title: "Strategic Lead Time",
    description:
      "Excellence requires preparation. All virtual invitations must be extended at least 30 days before the proposed event date. Last-minute requests will not be entertained.",
  },
  {
    title: "Depth in Engagement",
    description:
      "Semilore is committed to providing high-density value. Panel and webinar invitations are accepted only where the structure allows for meaningful, depth-filled contributions.",
  },
  {
    title: "Technical Requirements",
    description:
      "A rehearsal or tech-check session must be scheduled at least 48 hours before the event. Preferred platforms include Zoom, Google Meet, or StreamYard.",
  },
  {
    title: "Payment Conditions",
    description:
      "All formal invitations must include a clearly stated honorarium. A minimum of 50% of the agreed fee must be received before the event date.",
  },
  {
    title: "Recognition & Awards",
    description:
      "All awards or certificates must be designed professionally and delivered as high-resolution digital files within 7 days after the event.",
  },
  {
    title: "Speaker's Package",
    description:
      "All formal invitations must include a comprehensive breakdown including honorarium, recognition, event recording, and any additional professional perks.",
  },
];

const ConferencesPage = () => (
  <main className="page-content">
    <section className="page-hero page-hero-small">
      <div>
        <span className="eyebrow">Conferences & Speaking</span>
        <h1>Speaking engagements that challenge, equip, and transform.</h1>
      </div>
    </section>

    <section className="page-section conference-page-grid">
      {conferences.map((item) => (
        <article className="conference-detail-card" key={item.title}>
          <img src={item.image} alt={item.title} />
          <div>
            <span>{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.location}</p>
          </div>
        </article>
      ))}
    </section>

    <section className="page-section booking-info">
      <div className="section-heading">
        <span className="eyebrow">Before You Invite</span>
        <h2>What to Know Before Booking Semilore Alalade</h2>
      </div>
      <p className="intro-text">
        To ensure every engagement delivers maximum impact and fits within a
        high-performance schedule, please review the following operational
        guidelines before extending an invitation.
      </p>
      <div className="guidelines-grid">
        {bookingGuidelines.map((guideline) => (
          <article key={guideline.title} className="guideline-card">
            <h3>{guideline.title}</h3>
            <p>{guideline.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="page-section speaking-topics">
      <div className="section-heading">
        <span className="eyebrow">Book a Speaker</span>
        <h2>Speaking Topics & Engagements</h2>
      </div>
      <p className="intro-text">
        Semilore Alalade is available for speaking engagements, conferences,
        seminars, youth programs, leadership events, church events, empowerment
        programs, and purpose-driven gatherings.
      </p>
      <div className="topics-container">
        <h3>Suggested Speaking Topics</h3>
        <ul className="topics-list">
          {speakingTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="page-section brand-statement">
      <div className="statement-card">
        <span className="eyebrow">Our Mission</span>
        <h2>Final Brand Statement</h2>
        <div className="statement-content">
          <p>
            <strong>
              Semilore Alalade exists to help individuals discover purpose, gain
              clarity, build the right mindset, and pursue their destiny with
              passion and intention.
            </strong>
          </p>
          <p>
            His work is centered on one powerful belief:{" "}
            <em>
              Everyone carries untapped potential, and with the right guidance,
              truth, and mindset, that potential can become a force for lasting
              impact.
            </em>
          </p>
        </div>
      </div>
    </section>

    <section className="contact-cta">
      <h2>Ready to Book?</h2>
      <p>
        For all enquiries and formal invitations, kindly reach out through the
        official contact channels.
      </p>
      <a href="/#contact" className="button primary">
        Send Speaking Inquiry
      </a>
    </section>
  </main>
);

const App = () => {
  return (
    <div className="app-shell">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/conferences" element={<ConferencesPage />} />
      </Routes>
    </div>
  );
};

export default App;
