import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Download,
} from "lucide-react";
import "./styles.css";

const links = {
  github: "https://github.com/pranaychan",
  linkedin: "https://linkedin.com/in/pranaykamath",
  email: "mailto:pranayrkamath@gmail.com",
  portfolio: "https://pranaychan.github.io/",
};

const projects = [
  {
    number: "01",
    title: "RFP Extractor",
    category: "GenAI / Document Intelligence",
    description:
      "An AI-powered pipeline that turns unstructured RFP documents into structured requirements, deliverables, constraints, and evaluation criteria.",
    details:
      "Uses Gemini 3.5 Flash with evidence-based extraction and validation to make the resulting information traceable and machine-readable.",
    tags: ["Python", "Gemini 3.5 Flash", "LLM", "Document AI"],
    github: "https://github.com/pranaychan/Rfp-Extractor",
  },
  {
    number: "02",
    title: "VQue",
    category: "Full-Stack / Live Product",
    description:
      "A deployed virtual queue management platform that lets businesses manage queues while customers join remotely through QR codes.",
    details:
      "Built the frontend, REST API layer, database integration, and queue-management workflows, then deployed the application for a live demo.",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker"],
    demo: "https://vque.onrender.com/",
    github: "https://github.com/pranaychan",
  },
  {
    number: "03",
    title: "BERT Medical Chatbot",
    category: "NLP / Transformers",
    description:
      "A doctor appointment chatbot using a fine-tuned BERT model for multi-class intent classification.",
    details:
      "The NLP pipeline covers intent recognition, entity extraction, slot filling, and dialogue management, exposed through FastAPI REST endpoints.",
    tags: ["BERT", "Python", "FastAPI", "NLP"],
    github: "https://github.com/pranaychan/BERT-based-Medical-Chatbot",
  },
  {
    number: "04",
    title: "Blockchain Network",
    category: "Backend / Distributed Systems",
    description:
      "A reimplementation of an educational blockchain system, rebuilt with FastAPI instead of Flask.",
    details:
      "Implements SHA-256 hashing, proof-of-work mining, transactions, node registration, and longest-chain consensus across nodes.",
    tags: ["Python", "FastAPI", "SHA-256", "Proof of Work"],
    github: "https://github.com/pranaychan/Blockchain",
  },
];

const experience = [
  {
    year: "2026",
    role: "Software / Machine Learning Developer",
    company: "Futurestrive",
    bullets: [
      <>
        Developed and deployed{" "}
        <a href="https://constructintelligence.tech/" target="_blank" rel="noreferrer">
          Construct Intelligence <ArrowUpRight size={13} />
        </a>
        , a full-stack construction analytics platform using React, FastAPI, Python, and PostgreSQL.
      </>,
      <>
        Trained an <strong>XGBoost</strong> regression model on 20,000 synthetic data points, achieving <strong>R² = 0.920</strong>, MAE = 1.333, and RMSE = 1.678 for construction risk prediction; applied SHAP for explainability.
      </>,
      <>
        Building an <strong>LLM-powered invoice automation</strong> workflow for document extraction and invoice generation.
      </>,
    ],
  },
  {
    year: "2026",
    role: "Computer Vision Intern",
    company: "Productizetech",
    bullets: [
      <>
        Benchmarked Re-ID architectures for single-camera person tracking, reducing redundant identity counts by <strong>55.2%</strong> from 38 to 21; built a Gaussian Splatting + COLMAP pipeline for multi-view 3D reconstruction.
      </>,
    ],
  },
  {
    year: "2025",
    role: "Machine Learning Intern",
    company: "Capariazon",
    bullets: [
      <>
        Built a demand forecasting pipeline comparing <strong>ARIMA, Random Forest, and Linear Regression</strong>, engineering lag, temporal, categorical, and holiday features on two years of time-series data.
      </>,
    ],
  },
];

const skillGroups = [
  ["AI / LLM", "LLM Agents · RAG · MCP · BERT · Transformers · Embeddings · LLM Evaluation"],
  ["ML / DL", "XGBoost · scikit-learn · PyTorch · CNNs · ResNet · Transfer Learning · SHAP"],
  ["Computer Vision", "OpenCV · Re-ID · Gaussian Splatting · COLMAP · Grad-CAM"],
  ["Web / Backend", "React · FastAPI · REST APIs · PostgreSQL · Docker"],
  ["Languages", "Python · JavaScript · C · SQL"],
  ["Core CS", "OOP · Data Structures · Algorithms · Databases · Distributed Systems"],
];

function Nav({ open, setOpen }) {
  return (
    <header className="nav">
      <a className="brand" href="#home" aria-label="Pranay home">
        PRK<span>.</span>
      </a>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="nav-github" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={17} />
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">COMPUTER SCIENCE · AI · SOFTWARE</p>
          <h1>
            I build <span>useful</span> things with code.
          </h1>
          <p className="hero-copy">
            I'm Pranay, a Computer Science (AI) student at CHRIST University.
            I work across machine learning, GenAI, backend systems, and full-stack
            product development.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore my work <ArrowUpRight size={16} />
            </a>
            <a className="button ghost" href={links.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="status"><span /> Currently building</div>
          <p>LLM-powered invoice automation at Futurestrive.</p>
          <div className="hero-meta">
            <div><span>Based in</span><strong>Bengaluru, India</strong></div>
            <div><span>Studying</span><strong>B.Tech CSE (AI)</strong></div>
            <div><span>Graduating</span><strong>2027</strong></div>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about">Scroll to explore <span>↓</span></a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionHeading index="01" title="About me" />
      <div className="about-layout">
        <div className="about-lead">
          <p>
            I enjoy taking a problem from <strong>idea → model → API → product</strong>.
            My work spans traditional ML and computer vision as well as modern
            LLM-based applications.
          </p>
        </div>
        <div className="about-copy">
          <p>
            At Futurestrive, I have worked on a deployed construction intelligence
            platform, predictive modelling, explainable ML, and upcoming LLM
            automation.
          </p>
          <p>
            Outside internships, I build products to understand systems end-to-end:
            RFP extraction, a live virtual queue platform, a BERT chatbot, and a
            blockchain network.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ index, title, intro }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{index} / {title.toUpperCase()}</p>
        <h2>{title}</h2>
      </div>
      {intro && <p className="heading-intro">{intro}</p>}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading index="02" title="Experience" />
      <div className="timeline">
        {experience.map((item) => (
          <article className="experience-item" key={`${item.company}-${item.year}`}>
            <div className="experience-year">{item.year}</div>
            <div>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <ul>
                {item.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section id="projects" className="section">
      <SectionHeading
        index="03"
        title="Selected work"
        intro="A mix of deployed products, AI systems, and technical experiments."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project-card ${active === project.number ? "active" : ""}`} key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="details-button" onClick={() => setActive(active === project.number ? null : project.number)}>
              {active === project.number ? "Hide details" : "More about it"} <ArrowUpRight size={14} />
            </button>
            {active === project.number && <p className="project-details">{project.details}</p>}
            <div className="tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="project-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live demo <ExternalLink size={14} />
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub <Github size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading index="04" title="Toolkit" />
      <div className="skills-grid">
        {skillGroups.map(([title, skills]) => (
          <div className="skill-row" key={title}>
            <h3>{title}</h3>
            <p>{skills}</p>
          </div>
        ))}
      </div>
      <div className="education-strip">
        <div>
          <span>EDUCATION</span>
          <strong>CHRIST University, Bengaluru</strong>
        </div>
        <div>
          <span>DEGREE</span>
          <strong>B.Tech Computer Science (Artificial Intelligence)</strong>
        </div>
        <div>
          <span>GPA</span>
          <strong>3.87 / 4.0</strong>
        </div>
      </div>
    </section>
  );
}

function ResearchLeadership() {
  return (
    <section className="section compact-section">
      <div className="two-column">
        <div>
          <p className="eyebrow">05 / RESEARCH</p>
          <h2>Quantum Reservoir Computing</h2>
          <p className="muted">
            Submitted to IEEE. Investigated fixed and adaptive feedback strategies
            for quantum reservoir computing and their effects on predictive
            performance and system stability.
          </p>
        </div>
        <div>
          <p className="eyebrow">LEADERSHIP</p>
          <h2>Student Council</h2>
          <p className="muted">
            Student Council Representative, 2024–2026. Coordinated a team of 11
            students to plan and design the campus stall for DAKSH.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="eyebrow">06 / CONTACT</p>
      <h2>Have an interesting problem?</h2>
      <p>
        I'm interested in AI/ML, GenAI, backend engineering, and building products
        that solve real problems.
      </p>
      <div className="contact-actions">
        <a className="button primary" href={links.email}>
          <Mail size={16} /> Get in touch
        </a>
        <a className="button ghost" href={links.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </section>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ResearchLeadership />
        <Contact />
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Pranay R Kamath</span>
        <div>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.email}>Email</a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
