// page-exhibit.jsx — Exhibit & sponsor
const { PageNav, PageHero, PageFooter, Reveal } = window.SubParts;
const { Sponsor, Exhibitors } = window.SubSections;

function ExhibitCTA() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal style={{textAlign:"center",maxWidth:600,margin:"0 auto"}}>
          <span className="eyebrow">Get in touch</span>
          <h2 className="display" style={{fontSize:"clamp(32px,4vw,52px)",margin:"16px 0 16px"}}>Ready to be part of it?</h2>
          <p style={{color:"var(--ink-2)",marginBottom:28,lineHeight:1.6}}>
            Reach out and we'll come back to you within two business days with a package that fits your goals and your suburb.
          </p>
          <a href="mailto:hello@suburbanbusinesssummit.com.au" className="btn btn-primary btn-lg">
            Contact us <span className="btn-arrow"></span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ExhibitPage() {
  React.useEffect(() => {
    document.documentElement.setAttribute("data-mode", "mono");
    document.documentElement.setAttribute("data-brand-green", "off");
  }, []);
  return (
    <div>
      <PageNav active="exhibit" />
      <PageHero
        eyebrow="Exhibit & sponsor"
        title="Put your brand in the room."
        sub="SUB brings together business owners, professionals and community leaders — all in one suburb, all in one day. This is where your customers actually are."
      />
      <Sponsor />
      <Exhibitors />
      <ExhibitCTA />
      <PageFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ExhibitPage />);
