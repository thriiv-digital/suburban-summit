// page-event-illawarra.jsx — Illawarra event page
const { PageNav, PageFooter, PageHero, Reveal, Icon, SpeakerModal } = window.SubParts;
const { Panels, Speakers, Schedule, Journey, AfterParty, Tickets, FAQ } = window.SubSections;
const ILLAWARRA_TICKETS_URL = "https://events.humanitix.com/suburban-business-summit-illawarra/tickets";

// Countdown for the Illawarra event
function EventCountdown({ target }) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const cells = [{ v: d, l: "Days" }, { v: h, l: "Hours" }, { v: m, l: "Mins" }, { v: s, l: "Secs" }];
  const live = diff > 0;
  return (
    <div className="hero-cd" style={{marginTop:28}}>
      <div className="hero-cd-head" style={{color:"rgba(255,255,255,0.5)"}}>
        <span className="dot"/>
        <span>{live ? "Doors open in" : "Doors are open"}</span>
        <span className="sep">·</span>
        <span>Illawarra</span>
        <span className="sep">·</span>
        <span>17 Sep 2026</span>
      </div>
      <div className="hero-cd-grid">
        {cells.map(c => (
          <div key={c.l} className="hero-cd-cell" style={{borderLeftColor:"rgba(255,255,255,0.12)"}}>
            <div className="hero-cd-v" style={{color:"#fff"}}>{String(c.v).padStart(2,"0")}</div>
            <div className="hero-cd-l" style={{color:"rgba(255,255,255,0.4)"}}>{c.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventIllawarraHero() {
  const loc = SUB.locations.find(l => l.id === "illawarra");
  const goToTickets = () => window.open(ILLAWARRA_TICKETS_URL, "_blank", "noopener,noreferrer");
  return (
    <section className="page-hero page-hero-event">
      <div className="container">
        <div className="eyebrow page-hero-eyebrow" style={{marginBottom:16}}>{loc.tag}</div>
        <h1 className="display page-hero-title">{loc.headline}</h1>
        <p className="page-hero-sub" style={{marginBottom:24}}>{loc.blurb}</p>
        <div className="event-hero-facts">
          <div className="event-hero-fact"><Icon name="cal" size={18}/>{loc.date}</div>
          <div className="event-hero-fact"><Icon name="pin" size={18}/>{loc.venue}, {loc.address}</div>
          <div className="event-hero-fact"><Icon name="clock" size={18}/>{loc.hours}</div>
        </div>
        <EventCountdown target={new Date("2026-09-17T08:30:00+10:00").getTime()} />
        <div style={{marginTop:28}}>
          <button onClick={goToTickets} className="btn btn-primary btn-lg">
            Register your interest <span className="btn-arrow"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* Getting here — Ribbonwood Community Centre, Dapto */
function GettingHereIllawarra() {
  return (
    <section className="section section-alt getting-here-section" id="getting-here">
      <div className="container">
        <Reveal as="div" className="section-head" style={{textAlign:"left"}}>
          <span className="eyebrow">Getting there</span>
          <h2 className="display" style={{fontSize:"clamp(32px,4vw,52px)"}}>Ribbonwood Community Centre</h2>
          <p className="lede">Dapto NSW 2530</p>
        </Reveal>
        <div className="getting-here-grid">
          <Reveal className="getting-here-map">
            <iframe
              title="Ribbonwood Community Centre map"
              src="https://www.google.com/maps?q=Ribbonwood+Community+Centre,+Dapto+NSW+2530&output=embed"
              width="100%"
              height="380"
              style={{border:0,borderRadius:"var(--radius-lg)"}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="getting-here-options">
              <div className="transport-item">
                <div className="transport-icon">🚗</div>
                <div>
                  <div className="transport-head">By car</div>
                  <div className="transport-body">Free on-site parking available. Dapto is located off the Princes Motorway (M1), approximately 20 minutes south of Wollongong CBD. GPS: Ribbonwood Community Centre, Dapto NSW 2530.</div>
                </div>
              </div>
              <div className="transport-item">
                <div className="transport-icon">🚂</div>
                <div>
                  <div className="transport-head">By train</div>
                  <div className="transport-body">Dapto Station is on the South Coast Line. Direct trains from Sydney Central take approximately 90 minutes. From the station it is a short taxi or rideshare to the venue.</div>
                </div>
              </div>
              <div className="transport-item">
                <div className="transport-icon">🚌</div>
                <div>
                  <div className="transport-body">Local bus services connect Dapto to Wollongong. Check <a href="https://transportnsw.info" target="_blank" rel="noopener noreferrer" className="text-link">transportnsw.info</a> for current timetables and routes.</div>
                </div>
              </div>
              <div className="transport-item">
                <div className="transport-icon">🚕</div>
                <div>
                  <div className="transport-head">Rideshare / taxi</div>
                  <div className="transport-body">Uber and local taxis are available in Dapto. Drop-off directly at the Ribbonwood Community Centre. Allow extra time during morning peak.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function EventIllawarraPage() {
  const [openSpeaker, setOpenSpeaker] = React.useState(null);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-mode", "mono");
    document.documentElement.setAttribute("data-brand-green", "off");
  }, []);
  return (
    <div>
      <PageNav active="events" />
      <EventIllawarraHero />
      <Panels />
      <Speakers onOpen={setOpenSpeaker} />
      <Schedule />
      <Journey />
      <AfterParty />
      <GettingHereIllawarra />
      <Tickets />
      <FAQ />
      <SpeakerModal speaker={openSpeaker} onClose={() => setOpenSpeaker(null)} />
      <PageFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<EventIllawarraPage />);
