// app.jsx — Sub Summit main app, theme switcher, tweaks
const { Nav, SpeakerModal } = window.SubParts;
const { Hero, About, Features, Locations, Speakers, Schedule, Supporters, Testimonials, Exhibitors, Tickets, Gallery, FAQ, Sponsor, NewsletterFooter, Founders, Framework, Panels, Journey, CharityImpact, SubDifference, AfterParty } = window.SubSections;

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
  const [openSpeaker, setOpenSpeaker] = React.useState(null);

  // External 3rd-party ticketing — Humanitix
  const HUMANITIX_URL = "https://events.humanitix.com/suburban-business-summit-northern-beaches/tickets";

  // Apply direction theme to the document
  React.useEffect(() => {
    document.documentElement.setAttribute("data-mode", t.direction);
  }, [t.direction]);

  // Optional uppercase override
  React.useEffect(() => {
    document.documentElement.style.setProperty("--hero-case", t.uppercaseHeadlines ? "uppercase" : "none");
  }, [t.uppercaseHeadlines]);

  // Brand-green headings toggle — paints display headings in the logo's dark green
  React.useEffect(() => {
    document.documentElement.setAttribute("data-brand-green", t.brandGreenHeadings ? "on" : "off");
  }, [t.brandGreenHeadings]);

  // Accent hue shift — only applied in heritage/mono (bold keeps its punch)
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.accentHue === 0) {
      root.style.removeProperty("--accent");
      return;
    }
    // For each mode, compute a shifted accent
    const map = {
      heritage: ["#1f4a36", "#6a1f4a", "#1f3a6a", "#6a4a1f", "#b04a1f"],
      bold:     ["#ff6b2c", "#ffd23f", "#2ecc71", "#3aa0ff", "#ff3a78"],
      mono:     ["#d63a2e", "#0a0a0a", "#ff6b2c", "#1f4a36", "#3aa0ff"]
    };
    const arr = map[t.direction] || map.heritage;
    const c = arr[Math.max(0, Math.min(arr.length - 1, t.accentHue))];
    root.style.setProperty("--accent", c);
  }, [t.accentHue, t.direction]);

  const goToHumanitix = () => window.open(HUMANITIX_URL, "_blank", "noopener,noreferrer");

  const scrollToTickets = () => {
    document.getElementById("tickets")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Title swap helper based on direction
  const titleStyle = { textTransform: t.uppercaseHeadlines ? "uppercase" : "none" };

  return (
    <div style={titleStyle}>
      <Nav onTicketsClick={goToHumanitix} />
      <Hero onTickets={goToHumanitix} />
      <About />
      <Founders />
      <Framework />
      <Panels />
      <Journey />
      <Features />
      <Locations />
      <SubDifference />
      <Speakers onOpen={setOpenSpeaker} />
      <Schedule />
      <CharityImpact />
      <AfterParty />
      <Tickets />
      <Supporters onTickets={goToHumanitix} />
      <Testimonials />
      <Exhibitors />
      <Gallery />
      <FAQ />
      <Sponsor />
      <NewsletterFooter />
      <SpeakerModal speaker={openSpeaker} onClose={() => setOpenSpeaker(null)} />

      <TweaksPanel>
        <TweakSection label="Design direction" />
        <TweakSelect
          label="Visual system"
          value={t.direction}
          options={[
            { value: "heritage", label: "A · Heritage Civic — cream / green / gold" },
            { value: "bold",     label: "B · Bold Local — navy / cream / orange" },
            { value: "mono",     label: "C · Modern Editorial — off-white / red" }
          ]}
          onChange={(v) => setTweak("direction", v)}
        />
        <TweakSlider
          label="Accent hue"
          value={t.accentHue}
          min={0} max={4} step={1}
          onChange={(v) => setTweak("accentHue", v)}
        />
        <TweakSection label="Treatment" />
        <TweakToggle
          label="Brand green headings"
          value={t.brandGreenHeadings}
          onChange={(v) => setTweak("brandGreenHeadings", v)}
        />
        <TweakToggle
          label="Uppercase all headlines"
          value={t.uppercaseHeadlines}
          onChange={(v) => setTweak("uppercaseHeadlines", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
