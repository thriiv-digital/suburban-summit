// page-event-nb.jsx — Northern Beaches event page
const { PageNav, PageFooter, PageHero, Reveal, Icon, SpeakerModal } = window.SubParts;
const { Panels, Speakers, Schedule, Journey, AfterParty, Tickets, FAQ } = window.SubSections;
const HUMANITIX_URL = "https://events.humanitix.com/suburban-business-summit-northern-beaches/tickets";

function EventNBHero() {
  const loc = SUB.locations[0];
  const pct = Math.round((loc.sold / loc.capacity) * 100);
  const goToHumanitix = () => window.open(HUMANITIX_URL, "_blank", "noopener,noreferrer");
  return (
    <section className="page-hero page-hero-event">
      <div className="container">
        <div className="eyebrow page-hero-eyebrow" style={{marginBottom:16}}>{loc.tag}</div>
        <h1 className="display page-hero-title">{loc.headline}</h1>
        <p className="page-hero-sub" style={{marginBottom:28}}>{loc.blurb}</p>
        <div className="event-hero-facts">
          <div className="event-hero-fact"><Icon name="cal" size={18}/>{loc.date}</div>
          <div className="event-hero-fact"><Icon name="pin" size={18}/>{loc.venue}</div>
          <div className="event-hero-fact"><Icon name="clock" size={18}/>{loc.hours}</div>
        </div>
        <div className="spotlight-progress" style={{margin:"20px 0 8px",background:"rgba(255,255,255,0.15)"}}>
          <div className="spotlight-progress-bar" style={{width:`${pct}%`}}/>
        </div>
        <div className="small" style={{color:"rgba(255,255,255,0.45)",marginBottom:28}}>
          {loc.sold} of {loc.capacity} seats filled
        </div>
        <button onClick={goToHumanitix} className="btn btn-primary btn-lg">
          Book a ticket <span className="btn-arrow"></span>
        </button>
      </div>
    </section>
  );
}

function EventNBPage() {
  const [openSpeaker, setOpenSpeaker] = React.useState(null);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-mode", "mono");
    document.documentElement.setAttribute("data-brand-green", "off");
  }, []);
  return (
    <div>
      <PageNav active="events" />
      <EventNBHero />
      <Panels />
      <Speakers onOpen={setOpenSpeaker} />
      <Schedule />
      <Journey />
      <AfterParty />
      <Tickets />
      <FAQ />
      <SpeakerModal speaker={openSpeaker} onClose={() => setOpenSpeaker(null)} />
      <PageFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<EventNBPage />);
