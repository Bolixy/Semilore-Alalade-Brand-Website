import "./App.css";
import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { inView, motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import semilorelogo from "./assets/semilorelogo.jpg";
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
import ilesanmimichael from "./assets/ilesanmimichael.jpg";
import justHim from "./assets/justHim.png";
import oluwakamiye from "./assets/oluwakamiye.jpg";
import samayomide from "./assets/samayomide.jpg";
import samuelNyalogwue from "./assets/samuelNyalogwue.jpg";

import { BrowserRouter } from "react-router-dom";

const stats = [
  { value: "3+", label: "Years of Impact" },
  { value: "50+", label: "Speaking Events" },
  { value: "10K", label: "Lives Touched" },
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
      "Tonight was a power-packed session. You dished out value after value. Mindset is not fixed, It can learn, unlearn, and relearn. If you cannot change the internal you , you cannot change your result",
    name: "Samuel Nyalongwe",
    role: "Participant",
    image: samuelNyalogwue,
  },
  {
    quote:
      "Today's class was amazing, inspiring, and wonderful. I learned a lot and discovered questions to reflect on. From mindset to growth, awareness, and consistency.",
    name: "Irradatullahi",
    role: "Participant",
    image: justHim,
  },
  {
    quote:
      "It was a really impactful enlightenment session that brings clarity and the reality of life. I learned what defines mindset is something we build intentionally",
    name: "Samuel Ayomide",
    role: "Participant",
    image: samayomide,
  },
  {
    quote:
      "It was an amazing one. So much knowledge was shared on finding problems your skills can solve. positioning those skills, knowing your target audience, and creating an offer ",
    name: "Odubote Sola",
    role: "Participant",
    image: test4,
  },
  {
    quote:
      "Purpose discovery is the bedrock of wealth creation. I learnt that mindset is the lens through which we see the world — if you limit yourself in your mind, you've limited yourself in life. Your mindset is a mirror of who you are, and purpose isn't discovered suddenly, it's found through reflection and experience.",
    name: "Oluwakamiye",
    role: "Participant",
    image: oluwakamiye,
  },
  {
    quote:
      "Thank you so much for tonight's session, it was nothing short of premium value. The basis of what I learnt is that a person's mindset basically determines their life — their actions, thoughts, results, relationships, and environment. A person's beliefs are the building block of their mindset. ",
    name: "Ilesanmi Michael",
    role: "Participant",
    image: ilesanmimichael,
  },
];

const conferences = [
  {
    title: "Game Changer Conference, Osun State University - Media 1",
    date: "January 2026",
    location: "Osun, Nigeria",
    image: conference1,
  },
  {
    title: "Game Changer Conference, Osun State University - Media 2",
    date: "January 2026",
    location: "Osun, Nigeria",
    image: conference3,
  },
  {
    title: "Game Changer Conference, Osun State University - Media 3",
    date: "January 2026",
    location: "Osun, Nigeria",
    image: conference2,
  },
  {
    title: "Game Changer Conference, Osun State University - Award",
    date: "January 2026",
    location: "Osun, Nigeria",
    image: award2,
  },
  {
    title: "Game Changer Conference, Osun State University - Award",
    date: "January 2026",
    location: "Osun, Nigeria",
    image: award1,
  },
  {
    title: "Game Changer Conference, Osun State University - Red Carpet",
    date: "January 2026",
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
          src={semilorelogo}
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
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const HomePage = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [contactStatus, setContactStatus] = useState("");

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
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setContactStatus("sending");

    try {
      await emailjs.send(
        "service_gyn2xju",
        "template_fedcxqc", // ← your real template ID goes here
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
        },
        "gxQo3kj2x1cP5glF4",
      );

      setContactStatus("success");
      setContactForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        setContactStatus("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setContactStatus("error");
    }
  };
  return (
    <main>
      <section className="hero" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
        >
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
            <motion.a
              className="button primary"
              href="#contact"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Speak with Semilore
            </motion.a>
            <motion.a
              className="button secondary"
              href="#testimonials"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Hear What Others Say
            </motion.a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/semilore-alalade-the-wealth-alchemist-39a643278?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/alaladesemilore?igsh=MXhhdjM0enhnbmJodw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.link/bae2ra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            className="hero-image"
            src={SemiloreHeadshot}
            alt="Semilore"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
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
        </motion.div>
      </section>

      <section className="stats-strip">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <motion.section
        className="about"
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-image">
          <img src={background1} alt="Semilore speaking with an audience" />
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
      </motion.section>

      <motion.section
        className="impact"
        id="impact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.section>

      <motion.section
        className="conferences"
        id="conferences"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-heading">
          <span className="eyebrow">Past Conferences</span>
          <h2>Moments of impact, reflection, and transformation.</h2>
        </div>
        <div className="conference-grid">
          {conferences.map((item) => (
            <article
              className="conference-card"
              key={item.title}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
            >
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
      </motion.section>
      <motion.section
        className="testimonials"
        id="testimonials"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>What audiences and partners say.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <p>"{item.quote}"</p>
              <footer>
                <div className="testimonial-avatar">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="testimonial-meta">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="newsletter"
        id="subscribe"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
            ✓ Thank you for subscribing to semilore alalade!
          </div>
        )}
        {subscribeStatus === "error" && (
          <div className="status-message error">
            Error. Please try again later.
          </div>
        )}
      </motion.section>

      <motion.section
        className="contact"
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={handleContactChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={handleContactChange}
              required
            />
            <textarea
              rows="4"
              placeholder="Tell us about your event or organization"
            ></textarea>
            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </motion.section>
    </main>
  );
};

const AboutPage = () => (
  <main className="page-content">
    <motion.section
      className="page-hero"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
      <div>
        <span className="eyebrow">About</span>
        <h1>Purpose is not a destination — it is a way of living.</h1>
      </div>
      <img src={background2} alt="Semilore speaking to an audience" />
    </motion.section>

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

    <motion.section
      className="page-section social-proof"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
      <div className="section-heading">
        <span className="eyebrow">Recognition & Impact</span>
        <h2>Speaking proof and certifications</h2>
      </div>
      <img
        className="cert-image"
        src={cert}
        alt="Certificate of Appreciation from Osun State University"
      />
    </motion.section>

    <motion.section
      className="page-section testimonials-showcase"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
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
    </motion.section>
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
    <motion.section
      className="page-hero page-hero-small"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
      <div>
        <span className="eyebrow">Conferences & Speaking</span>
        <h1>Speaking engagements that challenge, equip, and transform.</h1>
      </div>
    </motion.section>

    <motion.section
      className="page-section conference-page-grid"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
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
    </motion.section>

    <motion.section
      className="page-section booking-info"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
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
    </motion.section>

    <motion.section
      className="page-section speaking-topics"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
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
    </motion.section>

    <motion.section
      className="page-section brand-statement"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
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
    </motion.section>

    <motion.section className="contact-cta">
      <h2>Ready to Book?</h2>
      <p>
        For all enquiries and formal invitations, kindly reach out through the
        official contact channels.
      </p>
      <a href="/#contact" className="button primary">
        Send Speaking Inquiry
      </a>
    </motion.section>
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
