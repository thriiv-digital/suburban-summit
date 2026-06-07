// page-events.jsx — All events listing
const { PageNav, PageHero, PageFooter, Reveal, Icon, Photo } = window.SubParts;
const HUMANITIX_URL = "https://events.humanitix.com/suburban-business-summit-northern-beaches/tickets";

const EVENT_LINKS = {
  "northern-beaches": "events-northern-beaches.html",
  "illawarra": "events-illawarra.html"
};

const VENUE_MAP_LINKS = {
  "northern-beaches": "https://thriiv.s.gy/RXWYoe"
};

function EventsListing() {
  const goToHumanitix = () => window.open(HUMANITIX_URL, "_blank", "noopener,noreferrer");
  const isUpcoming = (loc) => !loc.date.includes("TBC") && !loc.date.includes("2027");
  return (
    <section className="section" id="events">
      <div className="container">
        <Reveal as="div" className="eyebrow" style={{marginBottom:40}}>2026 NSW season</Reveal>
        <div className="events-list">
          {SUB.locations.map((loc, i) => {
            const isNext = i === 0;
            const is2026 = isUpcoming(loc);
            const mapLink = VENUE_MAP_LINKS[loc.id];
            const eventLink = EVENT_LINKS[loc.id];
            return (
              <Reveal key={loc.id} className={`event-card event-card-with-img${isNext ? " event-card-next" : ""}`}>
                <div className="event-card-img">
                  <Photo src={loc.img} alt={`${loc.city} venue`} glyph="venue" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                </div>
                <div className="event-card-content">
                  <div className="event-card-header">
                    <div>
                      <div className="eyebrow" style={{marginBottom:6}}>{loc.tag}</div>
                      <h2 className="display event-card-city">{loc.city}</h2>
                      <div className="small" style={{color:"var(--ink-2)"}}>{loc.region}</div>
                    </div>
                    <div className="event-card-date">
                      <div className="event-card-date-v">{loc.dateShort}</div>
                      <div className="small" style={{color:"var(--muted)"}}>{is2026 ? "2026" : ""}</div>
                    </div>
                  </div>
                  <div className="event-card-facts" style={{marginBottom:16}}>
                    <div className="event-fact">
                      <Icon name="pin" size={15}/>
                      {mapLink
                        ? <a href={mapLink} target="_blank" rel="noopener noreferrer" className="subtle-link">{loc.venue}</a>
                        : loc.venue
                      }
                    </div>
                    <div className="event-fact"><Icon name="cal" size={15}/>{loc.date}</div>
                  </div>
                  <p style={{color:"var(--ink-2)",margin:"0 0 20px",lineHeight:1.6}}>{loc.blurb}</p>
                  <div className="event-card-foot">
                    {isNext ? (
                      <>
                        <button onClick={goToHumanitix} className="btn btn-primary">Book now <span className="btn-arrow"></span></button>
                        {eventLink && <a href={eventLink} className="btn btn-ghost">Full program</a>}
                      </>
                    ) : is2026 ? (
                      <>
                        {eventLink && <a href={eventLink} className="btn btn-ghost">Full program</a>}
                        <span className="eyebrow" style={{opacity:0.5}}>Tickets opening soon</span>
                      </>
                    ) : (
                      <span className="eyebrow" style={{opacity:0.5}}>Coming in 2027 — stay in touch</span>
                    )}
                  </div>
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
