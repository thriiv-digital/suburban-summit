// parts.jsx — shared bits: icons, placeholder photo, modal, nav
const { useState, useEffect, useRef, useLayoutEffect, useMemo } = React;

/* ── Icons (line, no fills) ──────────────────────────────── */
function Icon({ name, size = 22 }) {
  const s = size;
  const sw = 1.6;
  const common = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "mic":   return <svg {...common}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>;
    case "tool":  return <svg {...common}><path d="M14 4l6 6-4 4-6-6 4-4z"/><path d="M3 21l8-8"/><path d="M14 14l3 3"/></svg>;
    case "watch": return <svg {...common}><circle cx="12" cy="12" r="7"/><path d="M12 9v3l2 2"/><path d="M10 2h4M10 22h4"/></svg>;
    case "spot":  return <svg {...common}><path d="M12 3v3M5 7l2 2M2 14h3M19 7l-2 2M22 14h-3"/><circle cx="12" cy="15" r="5"/></svg>;
    case "grid":  return <svg {...common}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
    case "moon":  return <svg {...common}><path d="M21 13.5A8.5 8.5 0 0 1 10.5 3 8.5 8.5 0 1 0 21 13.5z"/></svg>;
    case "arrow": return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "x":     return <svg {...common}><path d="M6 6l12 12M18 6l-12 12"/></svg>;
    case "plus":  return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case "pin":   return <svg {...common}><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case "cal":   return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>;
    case "clock": return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "build": return <svg {...common}><path d="M3 21V9l9-5 9 5v12"/><path d="M9 21V12h6v9"/></svg>;
    default: return null;
  }
}

/* ── Placeholder photo ───────────────────────────────────── */
// Renders either a real <img> (when src is given) or a labelled stock placeholder.
function Photo({ src, alt, label, glyph = "person", className = "", style = {}, hue, children, imgStyle }) {
  if (src) {
    return (
      <div className={`ph has-img ${className}`} style={style}>
        <img src={src} alt={alt || label || ""} loading="lazy" style={imgStyle} />
        {children}
      </div>
    );
  }
  // hue lets us subtly vary the wash; 0..1
  const h = typeof hue === "number" ? hue : 0;
  const tone = { filter: `hue-rotate(${h * 24 - 12}deg)` };
  return (
    <div className={`ph ${className}`} style={{ ...style, ...tone }}>
      <div className="ph-glyph">{renderGlyph(glyph)}</div>
      {label ? <div className="ph-label">[ {label} ]</div> : null}
      {children}
    </div>
  );
}

/* ── Rotating cross-fade photo ────────────────────────────── */
// Cross-fades through an `imgs` array on a timer. Pauses on hover.
function RotatingPhoto({ imgs = [], alt, intervalMs = 3000, className = "", style = {}, children }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || imgs.length < 2) return;
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % imgs.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, imgs.length, intervalMs]);
  // Reset to first frame when the imgs array changes (e.g. location changes)
  useEffect(() => { setI(0); }, [imgs.join("|")]);
  if (!imgs.length) return null;
  return (
    <div
      className={`ph has-img rot-photo ${className}`}
      style={style}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {imgs.map((src, n) => (
        <img
          key={src + n}
          src={src}
          alt={alt || ""}
          loading={n === 0 ? "eager" : "lazy"}
          className={`rot-photo-layer ${n === i ? "on" : ""}`}
        />
      ))}
      {children}
    </div>
  );
}

function renderGlyph(kind) {
  // soft silhouettes — strictly placeholder vibe
  const props = { width: "44%", height: "44%", viewBox: "0 0 100 100", fill: "none", stroke: "currentColor", strokeWidth: 1.5, opacity: 0.55 };
  switch (kind) {
    case "person":  return <svg {...props}><circle cx="50" cy="36" r="14"/><path d="M22 86c4-16 14-24 28-24s24 8 28 24"/></svg>;
    case "people":  return <svg {...props}><circle cx="36" cy="40" r="11"/><circle cx="68" cy="40" r="11"/><path d="M14 84c2-12 10-18 22-18s20 6 22 18M48 84c2-12 10-18 22-18s20 6 22 18"/></svg>;
    case "stage":   return <svg {...props}><path d="M10 70h80M14 70l8-40h56l8 40"/><circle cx="50" cy="46" r="6"/></svg>;
    case "crowd":   return <svg {...props}><circle cx="30" cy="42" r="8"/><circle cx="50" cy="38" r="8"/><circle cx="70" cy="42" r="8"/><path d="M12 80c4-12 12-18 18-18s14 6 18 18M48 80c4-12 12-18 18-18s14 6 18 18"/></svg>;
    case "workshop":return <svg {...props}><rect x="20" y="40" width="60" height="32" rx="2"/><path d="M30 40v-8M70 40v-8M20 56h60"/></svg>;
    case "build":   return <svg {...props}><path d="M16 80V44l34-22 34 22v36"/><path d="M40 80V60h20v20"/></svg>;
    case "coast":   return <svg {...props}><path d="M6 70c14-4 18-30 30-30s14 14 24 12 16-12 30-8v26z"/><circle cx="74" cy="28" r="6"/></svg>;
    case "city":    return <svg {...props}><path d="M10 84V46l10-6v44M30 84V32l14-8v60M52 84V40l16 6v38M76 84V52l10 4v28"/></svg>;
    default:        return null;
  }
}

/* ── Nav ─────────────────────────────────────────────────── */
function Nav({ onTicketsClick }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="nav-logo">
        <img src="images/logo-suburban-business-summit.png" alt="Suburban Business Summit" className="nav-logo-img" />
      </a>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#framework">The Model</a>
        <a href="#locations">Locations</a>
        <a href="#speakers">Speakers</a>
        <a href="#schedule">Schedule</a>
        <a href="#charity">Community</a>
        <a href="#tickets">Tickets</a>
      </nav>
      <div className="nav-actions">
        <a href="#sponsors" className="btn btn-ghost btn-sm">Exhibit</a>
        <button onClick={onTicketsClick} className="btn btn-primary btn-sm">Book a ticket <span className="btn-arrow"></span></button>
      </div>
    </header>
  );
}

/* ── Reveal-on-scroll wrapper ────────────────────────────── */
function Reveal({ children, delay = 0, as: As = "div", ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As ref={ref} className={`reveal ${seen ? "in" : ""}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </As>
  );
}

/* ── Speaker Modal ───────────────────────────────────────── */
function SpeakerModal({ speaker, onClose }) {
  useEffect(() => {
    if (!speaker) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [speaker]);
  if (!speaker) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <Photo src={speaker.img} alt={speaker.name} label={`speaker — ${speaker.name}`} glyph="person" className="modal-photo" />
        <div className="modal-body">
          <button className="modal-close" onClick={onClose} aria-label="Close"><Icon name="x" size={18}/></button>
          <div className="eyebrow">{speaker.tag} · 2026 Season</div>
          <h3 className="modal-name">{speaker.name}</h3>
          <p style={{margin:0, fontSize:15, color:"var(--ink-2)"}}>{speaker.role}, <b>{speaker.company}</b></p>
          <div className="modal-section">
            <div className="eyebrow">Speaking on</div>
            <p style={{fontSize:18, lineHeight:1.4, margin:"4px 0 0", textWrap:"pretty"}}>{speaker.topic}</p>
          </div>
          <div className="modal-section">
            <div className="eyebrow">Bio</div>
            <p style={{margin:0, fontSize:14, lineHeight:1.55, color:"var(--ink-2)"}}>
              {speaker.name.split(" ")[0]} has spent {6 + (speaker.name.length % 8)} years building {speaker.company} from a {speaker.tag === "Keynote" ? "side project" : "single-person operation"} into one of the most respected names in their patch. They've quietly mentored dozens of operators across the {speaker.tag === "Masterclass" ? "Sub Summit" : "suburban business"} community and rarely speak publicly — which is what makes their session at SUB 2026 unmissable.
            </p>
          </div>
          <div className="row" style={{marginTop:8}}>
            <a href="#tickets" className="btn btn-primary btn-sm" onClick={onClose}>Book to see this session <span className="btn-arrow"></span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

window.SubParts = { Icon, Photo, RotatingPhoto, Nav, Reveal, SpeakerModal, renderGlyph };
