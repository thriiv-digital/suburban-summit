// page-events.jsx — All events listing
const { PageNav, PageHero, PageFooter, Reveal, Icon } = window.SubParts;
const HUMANITIX_URL = "https://events.humanitix.com/suburban-business-summit-northern-beaches/tickets";

function EventsListing() {
  const goToHumanitix = () => window.open(HUMANITIX_URL, "_blank", "noopener,noreferrer");
  return (
    <section className="section" id="events">
      <div className="container">
        <Reveal as="div" className="eyebrow" style={{marginBottom:40}}>2026 NSW season</Reveal>
        <div className="events-list">
          {SUB.locations.map((loc, i) => {
            const isNext = i === 0;
            const pct = Math.round((loc.sold / loc.capacity) * 100);
            return (
              <Reveal key={loc.id} className={`event-card${isNext ? " event-card-next" : ""}`}>
                <div className="event-card-header">
                  <div>
                    <div className="eyebrow" style={{marginBottom:6}}>{loc.tag}</div>
                    <h2 className="display event-card-city">{loc.city}</h2>
                    <div className="small" style={{color:"var(--ink-2)"}}>{loc.region}</div>
                  </div>
                  <div className="event-card-date">
                    <div className="event-card-date-v">{loc.dateShort}</div>
                    <div className="small" style={{color:"var(--muted)"}}>2026</div>
                  </div>
                </div>
                <div className="event-card-facts" style={{marginBottom:16}}>
                  <div className="event-fact"><Icon name="pin" size={15}/>{loc.venue}</div>
                  <div className="event-fact"><Icon name="clock" size={15}/>{loc.hours}</div>
                </div>
                <p style={{color:"var(--ink-2)",margin:"0 0 20px",lineHeight:1.6}}>{loc.blurb}</p>
                {isNext && (
                  <div style={{marginBottom:20}}>
                    <div className="spotlight-progress"><div className="spotlight-progress-bar" style={{width:`${pct}%`}}/></div>
                    <div className="small" style={{color:"var(--muted)",marginTop:6}}>{loc.sold} of {loc.capacity} seats filled</div>
                  </div>
                )}
                <div className="event-card-foot">
                  {isNext ? (
                    <>
                      <button onClick={goToHumanitix} className="btn btn-primary">Book now <span className="btn-arrow"></span></button>
                      <a href="events-northern-beaches.html" className="btn btn-ghost">Full program</a>
                    </>
                  ) : (
                    <span className="eyebrow" style={{opacity:0.5}}>Registration opening soon</span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FutureEvents() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">On the radar</span>
          <h2 className="display" style={{fontSize:"clamp(36px,4.5vw,60px)"}}>2027 and beyond.</h2>
          <p className="lede">The model is built to replicate. These communities are next in line.</p>
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

function EventsPage() {
  React.useEffect(() => {
    document.documentElement.setAttribute("data-mode", "mono");
    document.documentElement.setAttribute("data-brand-green", "off");
  }, []);
  return (
    <div>
      <PageNav active="events" />
      <PageHero
        eyebrow="2026 season"
        title="Four cities. One summer."
        sub="The inaugural Suburban Business Summit season brings big-conference energy to four NSW locations."
      />
      <EventsListing />
      <FutureEvents />
      <PageFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<EventsPage />);
