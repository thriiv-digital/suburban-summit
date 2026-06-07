// page-about.jsx — About the Suburban Business Summit
const { PageNav, PageHero, PageFooter, Reveal, Icon } = window.SubParts;
const { Founders, Framework, SubDifference } = window.SubSections;
const HUMANITIX_URL = "https://events.humanitix.com/suburban-business-summit-northern-beaches/tickets";

function AboutMission() {
  const stats = [
    { v: "2026", l: "Inaugural season" },
    { v: "4",    l: "NSW locations" },
    { v: "400+", l: "Attendees per event" },
    { v: "40%",  l: "Revenue to charity" },
  ];
  return (
    <section className="section" id="mission">
      <div className="container">
        <div className="about-snippet-grid">
          <Reveal>
            <span className="eyebrow">Why we built it</span>
            <h2 className="display" style={{fontSize:"clamp(36px,4.5vw,60px)",margin:"12px 0 20px"}}>
              Good things happen when business stays local.
            </h2>
            <p className="lede" style={{marginBottom:16}}>
              The big conferences are in the city. The big networking dinners are in the city. But most of the people building real businesses — the ones actually driving their local economy — are in the suburbs.
            </p>
            <p style={{color:"var(--ink-2)",lineHeight:1.65}}>
              SUB brings the experience to them. Not a watered-down version — the real thing. World-class speakers, meaningful panels, genuine community, and a reason to come back next year.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="about-stats-grid">
              {stats.map(s => (
                <div key={s.l} className="about-stat">
                  <div className="about-stat-v">{s.v}</div>
                  <div className="about-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutExpansion() {
  return (
    <section className="section section-alt" id="expansion">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Growing the movement</span>
          <h2 className="display" style={{fontSize:"clamp(36px,4.5vw,60px)"}}>
            Four cities in 2026. More to follow.
          </h2>
          <p className="lede">What starts in NSW stays in NSW — and then grows. The model is built to replicate into any suburban community with an engaged local business base.</p>
        </Reveal>
        <div className="loc-future-grid">
          {SUB.futureRegions.map(r => (
            <div key={r.city} className="loc-future-card">
              <div className="loc-future-city">{r.city}</div>
              <div className="loc-future-region">{r.region}</div>
              <div className="loc-future-note">{r.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal style={{textAlign:"center",maxWidth:600,margin:"0 auto"}}>
          <span className="eyebrow">Come to the next one</span>
          <h2 className="display" style={{fontSize:"clamp(32px,4vw,52px)",margin:"16px 0 16px"}}>
            Join us in Northern Beaches, June 30.
          </h2>
          <p style={{color:"var(--ink-2)",marginBottom:28,lineHeight:1.6}}>
            The 2026 season kicks off on the Northern Beaches. Seats are filling fast.
          </p>
          <div className="hero-ctas" style={{justifyContent:"center"}}>
            <button onClick={() => window.open(HUMANITIX_URL,"_blank","noopener,noreferrer")} className="btn btn-primary btn-lg">
              Book a ticket <span className="btn-arrow"></span>
            </button>
            <a href="events-northern-beaches.html" className="btn btn-ghost btn-lg">Full program</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutPage() {
  React.useEffect(() => {
    document.documentElement.setAttribute("data-mode", "mono");
    document.documentElement.setAttribute("data-brand-green", "off");
  }, []);
  return (
    <div>
      <PageNav active="about" />
      <PageHero
        eyebrow="About the summit"
        title="A new kind of local business event."
        sub="We bring the energy of a big conference to the suburbs — closer to where you work, live, and belong."
      />
      <AboutMission />
      <Founders />
      <Framework />
      <SubDifference />
      <AboutExpansion />
      <AboutCTA />
      <PageFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AboutPage />);
