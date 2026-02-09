const CAPABILITIES = [
  {
    key: "keyword",
    title: "Keyword Search",
    description: "Search statutes, cases, and contracts with structured filters.",
    icon: "KS",
  },
  {
    key: "qa",
    title: "Legal Q&A",
    description: "Ask questions and receive agent-collated legal explanations.",
    icon: "QA",
  },
  {
    key: "upload",
    title: "Document Upload",
    description: "Upload agreements and pleadings for analysis.",
    icon: "DU",
  },
  {
    key: "summary",
    title: "Summarization",
    description: "Generate executive summaries with risk flags.",
    icon: "SM",
  },
  {
    key: "govt",
    title: "Indian Govt Document Formats",
    description: "Access standard government forms and guided formatting.",
    icon: "IN",
  },
];

const PERSONA_COPY = {
  public: {
    title: "Assisted Tools for Everyone",
    subtitle:
      "Crew AI agents guide each step with simplified explanations and safe defaults.",
  },
  legal: {
    title: "Professional Legal Workspace",
    subtitle:
      "Crew AI agents orchestrate advanced research, compliance checks, and drafting support.",
  },
  empty: {
    title: "Choose a Path to Reveal Capabilities",
    subtitle:
      "Select your background above to tailor the Legal Companion experience.",
  },
};

function Services({ persona }) {
  const content = persona ? PERSONA_COPY[persona] : PERSONA_COPY.empty;

  return (
    <section className="services" id="services">
      <div className="services-header">
        <span className="section-tag">Agentic AI Workspace</span>
        <h2>{content.title}</h2>
        <p>{content.subtitle}</p>
      </div>

      <div className="cards">
        {CAPABILITIES.map((item) => (
          <div className="card" key={item.key}>
            <div className="card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="crew-strip">
        <div>
          <strong>Crew AI Orchestration</strong>
          <span>
            Multi-agent governance coordinates research, compliance, and drafting
            in real time.
          </span>
        </div>
        <button className="ghost-button">View agent roster</button>
      </div>
    </section>
  );
}

export default Services;
