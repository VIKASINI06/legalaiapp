function Hero({ onSelectPersona, persona }) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <span className="hero-pill">Crew AI Multi-Agent Legal Companion</span>
        <h1>Legal guidance, structured by agentic AI governance.</h1>
        <p>
          Specialized legal agents collaborate on research, compliance checks,
          document drafting, and summaries to bridge complex law and everyday
          needs.
        </p>
        <div className="persona-grid">
          <button
            className={`persona-card ${persona === "public" ? "active" : ""}`}
            onClick={() => onSelectPersona("public")}
          >
            <div className="persona-title">No Legal Background</div>
            <div className="persona-subtitle">
              Guided workflows, plain-language answers, and templates.
            </div>
            <span className="persona-cta">Explore assisted tools</span>
          </button>
          <button
            className={`persona-card ${persona === "legal" ? "active" : ""}`}
            onClick={() => onSelectPersona("legal")}
          >
            <div className="persona-title">Legal Background</div>
            <div className="persona-subtitle">
              Advanced search, structured citations, and compliance checks.
            </div>
            <span className="persona-cta">Explore professional tools</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
