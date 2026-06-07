// page-community.jsx — Community & charity
const { PageNav, PageHero, PageFooter, Reveal } = window.SubParts;
const { CharityImpact } = window.SubSections;

function HowGivingWorks() {
  const steps = [
    { n: "01", title: "You buy a ticket", line: "A portion of your ticket price — 40% — is set aside for local charity from the moment you book." },
    { n: "02", title: "We partner locally", line: "Before each event, we identify and partner with charities operating in that specific suburb or region." },
    { n: "03", title: "Funds go post-event", line: "Within 30 days of each event, the charity portion is transferred directly to the partner organisations." },
    { n: "04", title: "We publish the result", line: "We share the totals from each event so the community knows exactly where the money went." },
  ];
  return (
    <section className="section section-alt" id="how-it-works">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="display" style={{fontSize:"clamp(36px,4.5vw,60px)"}}>Simple, transparent giving.</h2>
          <p className="lede">No complexity. No overhead. Your ticket helps build the community you came to connect with.</p>
        </Reveal>
        <div className="difference-grid">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="difference-card">
              <div className="difference-num">{s.n}</div>
              <h3 className="difference-title">{s.title}</h3>
              <p className="difference-line">{s.line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityPage() {
  React.useEffect(() => {
    document.documentElement.setAttribute("data-mode", "mono");
    document.documentElement.setAttribute("data-brand-green", "off");
  }, []);
  return (
    <div>
      <PageNav active="community" />
      <PageHero
        eyebrow="Community & giving"
        title="Every SUB event is a fundraiser in disguise."
        sub="Forty percent of every ticket goes to a local charity. Community isn't a feature — it's the business model."
      />
      <CharityImpact />
      <HowGivingWorks />
      <PageFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CommunityPage />);
