// app.jsx — V4 homepage (slimmed: event-focused + org teasers)
const { Nav, SpeakerModal } = window.SubParts;
const { Hero, AboutSnippet, EventSpotlight, ModelTeaser, Locations, CommunitySnippet, Supporters, Testimonials, Tickets, NewsletterFooter } = window.SubSections;

const SUB_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "mono",
  "showCursor": true,
  "showStrip": true,
  "uppercaseHeadlines": false,
  "accentHue": 0,
  "brandGreenHeadings": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(SUB_TWEAK_DEFAULTS);
  const HUMANITIX_URL = "https://events.humanitix.com/suburban-business-summit-northern-beaches/tickets";

  React.useEffect(() => { document.documentElement.setAttribute("data-mode", t.direction); }, [t.direction]);
  React.useEffect(() => { document.documentElement.style.setProperty("--hero-case", t.uppercaseHeadlines ? "uppercase" : "none"); }, [t.uppercaseHeadlines]);
  React.useEffect(() => { document.documentElement.setAttribute("data-brand-green", t.brandGreenHeadings ? "on" : "off"); }, [t.brandGreenHeadings]);
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.accentHue === 0) { root.style.removeProperty("--accent"); return; }
    const map = {
      heritage: ["#1f4a36","#6a1f4a","#1f3a6a","#6a4a1f","#b04a1f"],
      bold:     ["#ff6b2c","#ffd23f","#2ecc71","#3aa0ff","#ff3a78"],
      mono:     ["#d63a2e","#0a0a0a","#ff6b2c","#1f4a36","#3aa0ff"]
    };
    const arr = map[t.direction] || map.heritage;
    root.style.setProperty("--accent", arr[Math.max(0, Math.min(arr.length - 1, t.accentHue))]);
  }, [t.accentHue, t.direction]);

  const goToHumanitix = () => window.open(HUMANITIX_URL, "_blank", "noopener,noreferrer");
  const titleStyle = { textTransform: t.uppercaseHeadlines ? "uppercase" : "none" };

  return (
    <div style={titleStyle}>
      <Nav onTicketsClick={goToHumanitix} />
      <Hero onTickets={goToHumanitix} />
      <AboutSnippet />
      <EventSpotlight />
      <ModelTeaser />
      <Locations />
      <CommunitySnippet />
      <Supporters onTickets={goToHumanitix} />
      <Testimonials />
      <Tickets />
      <NewsletterFooter />

      <TweaksPanel>
        <TweakSection label="Design direction" />
        <TweakSelect label="Visual system" value={t.direction}
          options={[
            { value: "heritage", label: "A · Heritage Civic" },
            { value: "bold",     label: "B · Bold Local" },
            { value: "mono",     label: "C · Modern Editorial" }
          ]}
          onChange={(v) => setTweak("direction", v)}
        />
        <TweakSection label="Treatment" />
        <TweakToggle label="Brand green headings" value={t.brandGreenHeadings} onChange={(v) => setTweak("brandGreenHeadings", v)} />
        <TweakToggle label="Uppercase headlines"  value={t.uppercaseHeadlines}  onChange={(v) => setTweak("uppercaseHeadlines", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
