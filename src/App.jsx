import { useState, useEffect, useCallback } from "react";
import "./App.css";

const LOGO = "/logo.png";

const stars = Array.from({ length: 38 }, (_, i) => ({
  x: `${(i * 37 + 11) % 97}%`,
  y: `${(i * 53 + 7) % 95}%`,
  delay: `${(i % 7) * 0.35}s`,
  size: i % 5 === 0 ? "3px" : "2px",
}));

const STAGES = [
  {
    number: "01",
    tag: "15 HOURS",
    title: "Core ERP",
    description:
      "Build a foundation in ERP systems and integrated business processes.",
    icon: "◇",
    color: "violet",
  },
  {
    number: "02",
    tag: "ASSESSMENT 01",
    title: "First Assessment",
    description: "Evaluate your understanding of the core ERP module.",
    icon: "☷",
    color: "pink",
  },
  {
    number: "03",
    tag: "15 HOURS",
    title: "Specialisation",
    description: "Explore manufacturing or trading enterprise systems.",
    icon: "◎",
    color: "lime",
  },
  {
    number: "04",
    tag: "ASSESSMENT 02",
    title: "Final Assessment",
    description:
      "Demonstrate your understanding of your chosen specialisation.",
    icon: "☷",
    color: "pink",
  },
  {
    number: "05",
    tag: "COMPLETION",
    title: "Certification",
    description:
      "Complete the programme requirements to earn your certificate.",
    icon: "✳",
    color: "orange",
  },
];

const MAJORS = ["Finance", "Marketing", "Operations", "HRM", "FB"];

const MINORS = ["Finance", "Marketing", "Operations", "D&A"];

const SPECIALISATIONS = [
  {
    code: "ESM",
    name: "Enterprise System for Manufacturing",
    description:
      "Explore manufacturing workflows, production planning, and integrated enterprise processes.",
  },
  {
    code: "EST",
    name: "Enterprise System for Trading",
    description:
      "Explore trading workflows, inventory, procurement, and distribution processes.",
  },
];

const INITIAL_FORM = {
  fullName: "",
  rollNumber: "",
  email: "",
  phone: "",
  major: "",
  minor: "",
  domain: "",
  consent: false,
};

function Background() {
  return (
    <div className="background-art" aria-hidden="true">
      <div className="background-grid" />
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />
      <div className="background-glow glow-three" />
      <div className="ambient-orbit ambient-one" />
      <div className="ambient-orbit ambient-two" />

      {stars.map((star, i) => (
        <span
          key={i}
          className="background-star"
          style={{
            "--x": star.x,
            "--y": star.y,
            "--delay": star.delay,
          }}
        />
      ))}
    </div>
  );
}

function SplashScreen({ onExitStart, onFinish }) {
  const [exiting, setExiting] = useState(false);

  const exitIntro = useCallback(() => {
    if (exiting) return;

    setExiting(true);
    onExitStart();

    window.setTimeout(() => {
      onFinish();
    }, 760);
  }, [exiting, onExitStart, onFinish]);

  useEffect(() => {
    const timer = window.setTimeout(exitIntro, 2800);

    return () => window.clearTimeout(timer);
  }, [exitIntro]);

  return (
    <div className={`splash-screen ${exiting ? "splash-exit" : ""}`}>
      <div className="splash-grid" aria-hidden="true" />

      <div className="splash-stars" aria-hidden="true">
        {stars.map((star, i) => (
          <span
            key={i}
            className="particle"
            style={{
              "--x": star.x,
              "--y": star.y,
              "--delay": star.delay,
              "--size": star.size,
            }}
          />
        ))}
      </div>

      <div className="splash-content">
        <div className="splash-emblem">
          <span className="logo-orbit logo-orbit-one" />
          <span className="logo-orbit logo-orbit-two" />
          <span className="logo-orbit logo-orbit-three" />

          <span className="logo-circle splash-logo">
            <img src={LOGO} alt="Optimus Operations Club logo" />
          </span>
        </div>

        <h1 className="splash-wordmark">OPTIMUS</h1>

        <p className="splash-subtitle">THE OPERATIONS CLUB · IMNU</p>

        <div className="splash-progress">
          <span />
        </div>

        <p className="splash-caption">ENGINEER YOUR EDGE</p>
      </div>

      <button
        type="button"
        className="skip-intro"
        onClick={exitIntro}
        disabled={exiting}
      >
        SKIP INTRO ↗
      </button>
    </div>
  );
}

function Brand({ compact = false }) {
  return (
    <a href="#home" className={`brand ${compact ? "brand-compact" : ""}`}>
      <span className="logo-circle brand-mark">
        <img src={LOGO} alt="" />
      </span>

      <span className="brand-copy">
        <strong>
          OPTIMUS<span>.</span>
        </strong>
        <small>THE OPERATIONS CLUB · IMNU</small>
      </span>
    </a>
  );
}

function HeroOrbit() {
  return (
    <div
      className="hero-art"
      aria-label="Animated enterprise systems illustration"
    >
      <div className="orbit-scene">
        <div className="orbit orbit-horizontal">
          <span />
        </div>
        <div className="orbit orbit-diagonal-one">
          <span />
        </div>
        <div className="orbit orbit-diagonal-two">
          <span />
        </div>
        <div className="orbit orbit-diagonal-three">
          <span />
        </div>
        <div className="orbit orbit-vertical">
          <span />
        </div>
        <div className="orbit orbit-dashed" />

        <div className="orbit-core">
          <span className="core-glow" />
          <span className="core-dot" />
        </div>

        <span className="network-line line-one" />
        <span className="network-line line-two" />
        <span className="network-line line-three" />

        <div className="network-card card-top">
          <span className="network-icon">◇</span>
          <span className="network-copy">
            <small>01 / SYSTEMS</small>
            <strong>Resource planning</strong>
          </span>
          <span className="card-status" />
        </div>

        <div className="network-card card-right">
          <span className="network-icon">↗</span>
          <span className="network-copy">
            <small>02 / PROCESS</small>
            <strong>Workflow design</strong>
          </span>
          <span className="card-status" />
        </div>

        <div className="network-card card-bottom">
          <span className="network-icon">✳</span>
          <span className="network-copy">
            <small>03 / OUTCOME</small>
            <strong>Optimisation</strong>
          </span>
          <span className="card-status" />
        </div>

        <span className="orbit-label orbit-label-top">ERP / 2026</span>
        <span className="orbit-label orbit-label-bottom">
          CONNECT · INTEGRATE · GROW
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <header className="site-header">
        <Brand />

        <div className="header-meta">
          <span className="status-dot" />
          IMNU · AHMEDABAD
        </div>

        <a className="header-register" href="#registration">
          REGISTER <span>↗</span>
        </a>
      </header>

      <div className="hero-main">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            THE OPERATIONS CLUB PRESENTS
          </div>

          <h1>
            MAKE SYSTEMS
            <br />
            <span className="headline-accent">WORK SMARTER.</span>
          </h1>

          <p className="hero-description">
            Go beyond the basics of Enterprise Resource Planning. Build your
            foundation, choose your specialisation, complete the assessments and
            take the next step towards ERP proficiency.
          </p>

          <div className="hero-buttons">
            <a className="action-button" href="#programme">
              Explore the programme <span className="button-arrow">↗</span>
            </a>

            <a className="action-button action-secondary" href="#registration">
              Register now <span className="button-arrow">↗</span>
            </a>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>
                30<span>H</span>
              </strong>
              <small>LEARNING HOURS</small>
            </div>

            <i />

            <div>
              <strong>05</strong>
              <small>PROGRAMME STAGES</small>
            </div>

            <i />

            <div>
              <strong>02</strong>
              <small>DOMAIN OPTIONS</small>
            </div>
          </div>
        </div>

        <HeroOrbit />
      </div>

      <div className="hero-bottom">
        <span>
          <i /> ENTERPRISE RESOURCE PLANNING
        </span>
        <a href="#programme">DISCOVER THE JOURNEY ↓</a>
      </div>
    </section>
  );
}

function Programme() {
  return (
    <section className="section-wrap" id="programme">
      <div className="section-topline">
        <span>01 — THE LEARNING JOURNEY</span>
        <span>CORE ERP → SPECIALISATION → CERTIFICATION</span>
      </div>

      <div className="section-title">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          YOUR PATHWAY
        </div>

        <h2>
          Learn the system.
          <br />
          <span>Master the process.</span>
        </h2>

        <p>
          Follow a structured learning journey from core ERP concepts to
          specialisation and certification.
        </p>
      </div>

      <div className="flowchart">
        {STAGES.map((stage, index) => (
          <div className="flow-group" key={stage.number}>
            <article className={`flow-card flow-${stage.color}`}>
              <div className="flow-card-top">
                <span className="flow-number">{stage.number}</span>
                <span className="flow-icon">{stage.icon}</span>
              </div>

              <div className="flow-card-content">
                <span className="flow-tag">{stage.tag}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            </article>

            {index < STAGES.length - 1 && (
              <div className="flow-arrow" aria-hidden="true">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="domain-explainer">
        <span className="explainer-mark">i</span>

        <div>
          <strong>Two ERP specialisations</strong>
          <p>
            <b>ESM</b> — Enterprise System for Manufacturing. <b>EST</b> —
            Enterprise System for Trading. Operations majors must select ESM.
          </p>
        </div>
      </div>

      <div className="programme-cta">
        <div>
          <span className="mini-label">READY TO BEGIN?</span>
          <h3>Build your ERP skill set.</h3>
        </div>

        <a className="action-button" href="#registration">
          Continue to registration <span className="button-arrow">↗</span>
        </a>
      </div>
    </section>
  );
}

function Registration() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const isOperations = form.major === "Operations";

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    const nextValue = type === "checkbox" ? checked : value;

    setForm((previous) => {
      const updated = { ...previous, [name]: nextValue };

      if (name === "major") {
        if (value === "Operations") {
          updated.domain = "ESM";
        } else if (previous.major === "Operations") {
          updated.domain = "";
        }
      }

      return updated;
    });

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      ...(name === "major" ? { domain: "" } : {}),
    }));
  }

  function validateForm() {
    const nextErrors = {};
    const name = form.fullName.trim();
    const roll = form.rollNumber.trim();
    const email = form.email.trim();
    const phone = form.phone.replace(/\D/g, "");

    if (!name) {
      nextErrors.fullName = "Please enter your full name.";
    } else if (!/^[\p{L}][\p{L}\s.'-]*$/u.test(name)) {
      nextErrors.fullName = "Enter a valid name.";
    }

    if (!roll) {
      nextErrors.rollNumber = "Please enter your roll number.";
    }

    if (!email) {
      nextErrors.email = "Please enter your Nirma University email.";
    } else if (
      !/^[^\s@]+@nirmauni\.ac\.in$/i.test(email) &&
      !/^[^\s@]+@nirma\.uni\.ac\.in$/i.test(email) &&
      !/^[^\s@]+@nirmauniversity\.ac\.in$/i.test(email)
    ) {
      nextErrors.email = "Use your official Nirma University email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your WhatsApp number.";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      nextErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!form.major) {
      nextErrors.major = "Please select your major specialisation.";
    }

    if (!form.minor) {
      nextErrors.minor = "Please select your minor specialisation.";
    }

    if (isOperations && form.domain !== "ESM") {
      nextErrors.domain = "Operations majors must select ESM.";
    } else if (!isOperations && !form.domain) {
      nextErrors.domain = "Please select an ERP domain.";
    }

    if (!form.consent) {
      nextErrors.consent =
        "Please accept the attendance and programme commitment.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      const firstError = document.querySelector(".field-error");

      firstError?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    // Frontend validation only. Connect a backend or form service
    // before collecting or storing actual event registrations.
    setSubmitted(true);
  }

  function resetForm() {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <section className="section-wrap" id="registration">
      <div className="section-topline">
        <span>02 — STUDENT REGISTRATION</span>
        <span>COMPLETE ALL REQUIRED FIELDS</span>
      </div>

      <div className="section-title">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          SECURE YOUR PLACE
        </div>

        <h2>
          Start your
          <br />
          <span>ERP journey.</span>
        </h2>

        <p>
          Enter your details exactly as recorded in your approved resume and
          university records. All fields are required.
        </p>
      </div>

      {submitted ? (
        <div className="success-card" role="status">
          <div className="success-symbol">✓</div>

          <div className="eyebrow">REGISTRATION DETAILS VALIDATED</div>

          <h2>
            You're ready to <span>begin.</span>
          </h2>

          <p>
            Your form passed the browser validation checks. No registration has
            been sent or saved yet.
          </p>

          <div className="success-details">
            <div>
              <small>STUDENT</small>
              <strong>{form.fullName}</strong>
            </div>

            <div>
              <small>MAJOR</small>
              <strong>{form.major}</strong>
            </div>

            <div>
              <small>MINOR</small>
              <strong>{form.minor}</strong>
            </div>

            <div>
              <small>ERP DOMAIN</small>
              <strong>{form.domain}</strong>
            </div>
          </div>

          <button type="button" className="action-button" onClick={resetForm}>
            Edit details ↗
          </button>
        </div>
      ) : (
        <form className="registration-form" onSubmit={handleSubmit} noValidate>
          <div className="form-section-heading">
            <span>01</span>
            <div>
              <h3>Student details</h3>
              <p>Provide your official academic and contact information.</p>
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label className="field-label" htmlFor="fullName">
                Full name <span>*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={updateField}
                placeholder="As per approved resume"
                autoComplete="name"
                required
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? "fullName-error" : undefined
                }
              />
              {errors.fullName && (
                <p className="field-error" id="fullName-error">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="field">
              <label className="field-label" htmlFor="rollNumber">
                Roll number <span>*</span>
              </label>
              <input
                id="rollNumber"
                name="rollNumber"
                value={form.rollNumber}
                onChange={updateField}
                placeholder="Enter your university roll number"
                autoComplete="off"
                required
                aria-invalid={Boolean(errors.rollNumber)}
              />
              {errors.rollNumber && (
                <p className="field-error">{errors.rollNumber}</p>
              )}
            </div>

            <div className="field">
              <label className="field-label" htmlFor="email">
                Nirma University email ID <span>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="yourname@university-domain"
                autoComplete="email"
                required
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="field-error">{errors.email}</p>}
            </div>

            <div className="field">
              <label className="field-label" htmlFor="phone">
                WhatsApp contact number <span>*</span>
              </label>

              <div className="phone-control">
                <span>+91</span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  value={form.phone}
                  onChange={(event) => {
                    const value = event.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                    setForm((previous) => ({
                      ...previous,
                      phone: value,
                    }));

                    setErrors((previous) => ({
                      ...previous,
                      phone: "",
                    }));
                  }}
                  placeholder="10-digit mobile number"
                  required
                  aria-invalid={Boolean(errors.phone)}
                />
              </div>

              {errors.phone && <p className="field-error">{errors.phone}</p>}
            </div>
          </div>

          <div className="form-separator" />

          <div className="form-section-heading">
            <span>02</span>
            <div>
              <h3>Specialisation details</h3>
              <p>Select your major and minor, then choose your ERP domain.</p>
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label className="field-label" htmlFor="major">
                Major specialisation <span>*</span>
              </label>

              <select
                id="major"
                name="major"
                value={form.major}
                onChange={updateField}
                required
                aria-invalid={Boolean(errors.major)}
              >
                <option value="">Select your major</option>
                {MAJORS.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>

              {errors.major && <p className="field-error">{errors.major}</p>}
            </div>

            <div className="field">
              <label className="field-label" htmlFor="minor">
                Minor specialisation <span>*</span>
              </label>

              <select
                id="minor"
                name="minor"
                value={form.minor}
                onChange={updateField}
                required
                aria-invalid={Boolean(errors.minor)}
              >
                <option value="">Select your minor</option>
                {MINORS.map((minor) => (
                  <option key={minor} value={minor}>
                    {minor}
                  </option>
                ))}
              </select>

              {errors.minor && <p className="field-error">{errors.minor}</p>}
            </div>
          </div>

          <div className="allocation-note">
            <span>✳</span>
            <div>
              <strong>ERP domain selection</strong>
              <p>
                {isOperations
                  ? "Operations majors are automatically assigned ESM, which cannot be changed."
                  : "Select ESM for Manufacturing or EST for Trading."}
              </p>
            </div>
          </div>

          <div className="domain-grid">
            {SPECIALISATIONS.map((domain) => {
              const selected = form.domain === domain.code;
              const disabled = isOperations && domain.code !== "ESM";

              return (
                <label
                  key={domain.code}
                  className={`domain-card ${
                    selected ? "domain-selected" : ""
                  } ${disabled ? "domain-disabled" : ""}`}
                >
                  <input
                    type="radio"
                    name="domain"
                    value={domain.code}
                    checked={selected}
                    onChange={updateField}
                    disabled={disabled}
                    required={!isOperations}
                  />

                  <span className="domain-check">{selected ? "✓" : ""}</span>

                  <span className="domain-code">{domain.code}</span>

                  <strong>{domain.name}</strong>

                  <p>{domain.description}</p>

                  {isOperations && domain.code === "ESM" && (
                    <span className="auto-assigned">
                      ✓ AUTOMATICALLY ASSIGNED
                    </span>
                  )}

                  {disabled && (
                    <span className="auto-assigned">
                      NOT AVAILABLE FOR OPERATIONS
                    </span>
                  )}
                </label>
              );
            })}
          </div>

          {errors.domain && (
            <p className="field-error domain-error">{errors.domain}</p>
          )}

          <div className="form-separator" />

          <div className="form-section-heading">
            <span>03</span>
            <div>
              <h3>Consent and attendance commitment</h3>
              <p>Confirm your commitment before submitting.</p>
            </div>
          </div>

          <label
            className={`consent-card ${form.consent ? "consent-active" : ""}`}
          >
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={updateField}
              required
              aria-invalid={Boolean(errors.consent)}
            />

            <span className="consent-check">{form.consent ? "✓" : ""}</span>

            <span>
              I agree to attend all ERP sessions, complete the required
              assessments, and comply with the programme guidelines. I
              understand that absence without a valid reason may result in
              discontinuation from the programme.
              <span className="required-star"> *</span>
            </span>
          </label>

          {errors.consent && (
            <p className="field-error consent-error">{errors.consent}</p>
          )}

          <div className="form-submit-row">
            <p>
              <span className="required-star">*</span> All fields are mandatory.
            </p>

            <button className="action-button submit-button" type="submit">
              Submit <span className="button-arrow">↗</span>
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Brand />

          <p>
            Better systems. Stronger processes. Smarter operations. Learn,
            connect and build your enterprise systems knowledge with Optimus.
          </p>

          <span className="footer-tagline">ENGINEER YOUR EDGE ✳</span>
        </div>

        <div className="footer-coordinators">
          <span className="footer-eyebrow">PROGRAMME COORDINATORS</span>
          <h3>Need assistance?</h3>

          <div className="coordinator">
            <span className="coordinator-avatar">RJ</span>

            <div className="coordinator-info">
              <strong>Ritik Jagwani</strong>
              <a href="tel:+917879018640">+91 7879018640</a>
            </div>

            <a
              className="contact-arrow"
              href="https://wa.me/917879018640"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Ritik Jagwani on WhatsApp"
            >
              ↗
            </a>
          </div>

          <div className="coordinator">
            <span className="coordinator-avatar">GA</span>

            <div className="coordinator-info">
              <strong>Garima Agarwal</strong>
              <a href="tel:+917908615879">+91 7908615879</a>
            </div>

            <a
              className="contact-arrow"
              href="https://wa.me/917908615879"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Garima Agarwal on WhatsApp"
            >
              ↗
            </a>
          </div>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <span className="footer-eyebrow">EXPLORE</span>
          <a href="#home">Home ↑</a>
          <a href="#programme">Programme ↗</a>
          <a href="#registration">Registration ↗</a>
          <a href="#contact">Contact ↗</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>OPTIMUS · THE OPERATIONS CLUB</span>
        <span>INSTITUTE OF MANAGEMENT, NIRMA UNIVERSITY</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [introState, setIntroState] = useState("visible");

  const startExit = useCallback(() => {
    setIntroState("exiting");
  }, []);

  const finishExit = useCallback(() => {
    setIntroState("done");
  }, []);

  return (
    <div className="app-shell">
      <Background />

      {introState !== "done" && (
        <SplashScreen onExitStart={startExit} onFinish={finishExit} />
      )}

      <main
        className={`main-site ${
          introState === "visible" ? "main-site-hidden" : "main-site-visible"
        }`}
      >
        <Hero />
        <Programme />
        <Registration />
        <Footer />
      </main>
    </div>
  );
}
