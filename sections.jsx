// sections.jsx — page sections for Sub Summit
const { Icon, Photo, RotatingPhoto, Reveal } = window.SubParts;
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS, useMemo: useMemoS } = React;

// External 3rd-party ticketing — bookings open in a new window
const HUMANITIX_URL = "https://events.humanitix.com/suburban-business-summit-northern-beaches/tickets";
const openHumanitix = () => window.open(HUMANITIX_URL, "_blank", "noopener,noreferrer");

// Format AUD price — show decimals only when not whole dollars
const fmtPrice = (p) => Number.isInteger(p) ? `$${p}` : `$${p.toFixed(2)}`;

/* ── HERO ───────────────────────────────────────────────── */
function Countdown({ target, eventName, dateLabel }) {
  const [now, setNow] = useStateS(Date.now());
  useEffectS(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const cells = [
    { v: d, l: "Days" },
    { v: h, l: "Hours" },
    { v: m, l: "Mins" },
    { v: s, l: "Secs" }
  ];
  const live = diff > 0;
  return (
    <div className="hero-cd">
      <div className="hero-cd-head">
        <span className="dot"/>
        <span>{live ? "Doors open in" : "Live now"}</span>
        <span className="sep">·</span>
        <span>{eventName}</span>
        <span className="sep">·</span>
        <span>{dateLabel}</span>
      </div>
      <div className="hero-cd-grid">
        {cells.map(c => (
          <div key={c.l} className="hero-cd-cell">
            <div className="hero-cd-v">{String(c.v).padStart(2, "0")}</div>
            <div className="hero-cd-l">{c.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero({ onTickets }) {
  const parallaxRef = useRefS(null);
  // Parallax on hero photo wrapper
  useEffectS(() => {
    const el = parallaxRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 800);
        el.style.transform = `translateY(${y * 0.16}px) scale(${1 + y * 0.0004})`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-tag"><span className="dot"></span>2026 SEASON · NSW · 4 LOCATIONS</div>
          <h1 className="display hero-title">
            Backing<br/>
            business.<br/>
            <span className="accent it">Driving</span> success.
          </h1>
          <p className="hero-sub">
            Suburban Business Summit (SUB) is a one-day event for local business owners, professionals and community leaders who believe strong local businesses build strong communities — brought to your suburb, not Sydney CBD.
          </p>
          <div className="hero-ctas">
            <button onClick={onTickets} className="btn btn-primary btn-lg">Book a ticket <span className="btn-arrow"></span></button>
            <a href="#about" className="btn btn-ghost btn-lg">How it works</a>
          </div>
          <Countdown
            target={new Date("2026-06-30T08:30:00+10:00").getTime()}
            eventName="Northern Beaches"
            dateLabel="30 Jun 2026 · Warriewood"
          />
        </div>
        <div className="hero-photo">
          <div ref={parallaxRef} className="ph-inner" style={{ position: "absolute", inset: "-8% 0 -16%" }}>
            <Photo
              src={SUB.images.hero}
              alt="Sub Summit main stage"
              glyph="stage"
              style={{ position: "absolute", inset: 0 }}
            />
          </div>
          {/* Manual photo overlay element */}
          <div className="ph-cap">
            <span style={{fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)"}}>Next event</span>
            <b>Northern Beaches</b>
            <span style={{fontSize:12, color:"var(--ink-2)"}}>Tue 30 June 2026 · Warriewood Community Centre</span>
          </div>
        </div>
      </div>
      <div className="hero-strip">
        <div className="marquee" aria-hidden="true">
          <span>
            Backing business <span className="sep">●</span> Driving success <span className="sep">●</span> Big ideas, suburban venues <span className="sep">●</span> No buzzword bingo <span className="sep">●</span> Northern Beaches · Illawarra · Hornsby · Central Coast <span className="sep">●</span>
            Backing business <span className="sep">●</span> Driving success <span className="sep">●</span> Big ideas, suburban venues <span className="sep">●</span> No buzzword bingo <span className="sep">●</span> Northern Beaches · Illawarra · Hornsby · Central Coast <span className="sep">●</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── ABOUT ──────────────────────────────────────────────── */
function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">01 — About the summit</span>
          <h2 className="display" style={{fontSize:"clamp(40px, 5.4vw, 72px)"}}>
            Strong local businesses<br/>build strong communities.
          </h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            <p className="about-quote">
              We bring <em>big-conference ideas</em>, speakers and connections into <span className="it">suburban and regional</span> areas — close to where you live and where you actually do the work.
            </p>
            <p style={{fontSize:17, color:"var(--ink-2)", lineHeight:1.55, maxWidth:"56ch", margin:0, textWrap:"pretty"}}>
              SUB has recently been held in Hornsby and the Central Coast, with upcoming 2026 events planned for the Northern Beaches, Illawarra and a return to Hornsby. Our first Summit showed there's real demand for practical, no-hype learning and genuine local connections.
            </p>
            <p style={{fontSize:17, color:"var(--ink-2)", lineHeight:1.55, maxWidth:"56ch", margin:0, textWrap:"pretty"}}>
              We continue to grow into a series of local events across Australia, each with its own community flavour but the same goal: helping local businesses grow, collaborate and lead. You'll find people from trades, charities, finance, professional services, health, retail, hospitality, education and more.
            </p>
            <ul className="about-expect">
              <li><span className="dot"></span>Simple, practical ideas you can use straight away</li>
              <li><span className="dot"></span>Real conversations and relationships that last beyond the day</li>
              <li><span className="dot"></span>A focus on how suburban businesses power Australia's economy and communities</li>
            </ul>
            <div className="about-stats">
              <div className="stat-cell"><div className="stat-v">500+</div><div className="stat-l">Attendees / day</div></div>
              <div className="stat-cell"><div className="stat-v">50</div><div className="stat-l">Exhibitors</div></div>
              <div className="stat-cell"><div className="stat-v">20</div><div className="stat-l">Speakers</div></div>
              <div className="stat-cell"><div className="stat-v">4</div><div className="stat-l">NSW locations</div></div>
            </div>
          </Reveal>
          <Reveal delay={100} className="about-photo-wrap">
            <Photo src={SUB.images.about1} alt="Networking on the floor" className="about-photo" />
            <Photo src={SUB.images.about2} alt="Masterclass — small group" className="about-photo about-photo-2"/>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── FEATURES ───────────────────────────────────────────── */
function Features() {
  return (
    <section className="section" id="features" style={{background:"var(--bg-2)"}}>
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">02 — The day, on the floor</span>
          <h2 className="display">A working day, not a talking shop.</h2>
          <p className="lede">Six formats running in parallel from 8:30am to 9pm. Every session designed so you leave with something you can ship on Monday.</p>
        </Reveal>
        <div className="features-grid">
          {SUB.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70} className="feature">
              <span className="num">F0{i+1}</span>
              <div className="feature-icon"><Icon name={f.icon} size={22}/></div>
              <h4>{f.title}</h4>
              <p>{f.line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── LOCATIONS ──────────────────────────────────────────── */
function Locations() {
  const [active, setActive] = useStateS(SUB.locations[0].id);
  const loc = SUB.locations.find(l => l.id === active);
  const pct = Math.round((loc.sold / loc.capacity) * 100);
  return (
    <section className="section" id="locations">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">03 — The 2026 tour</span>
          <h2 className="display">Four locations. One mission.<br/>All within an hour of home.</h2>
        </Reveal>
        <div className="loc">
          <div className="loc-tabs">
            {SUB.locations.map((l, i) => (
              <button key={l.id} className={`loc-tab ${l.id === active ? "active" : ""}`} onClick={() => setActive(l.id)}>
                <div className="num">0{i+1}</div>
                <div>
                  <div className="city">{l.city}</div>
                  <div className="date">{l.dateShort.toUpperCase()} · {l.region.toUpperCase()}</div>
                </div>
                <div className="chev">→</div>
              </button>
            ))}
          </div>
          <div className="loc-panel">
            {loc.imgs && loc.imgs.length > 1
              ? <RotatingPhoto imgs={loc.imgs} alt={`${loc.venue}, ${loc.city}`} className="loc-photo" intervalMs={3000} key={loc.id}/>
              : <Photo src={loc.img} alt={`${loc.venue}, ${loc.city}`} className="loc-photo" key={loc.id}/>}
            <div className="loc-content">
              <div className="eyebrow">{loc.tag}</div>
              <h3 className="loc-headline">{loc.headline}</h3>
              <p style={{fontSize:16, color:"var(--ink-2)", margin:0, lineHeight:1.55, textWrap:"pretty"}}>{loc.blurb}</p>
              <div className="loc-meta">
                <div className="loc-meta-cell"><span className="eyebrow">Date</span><div className="v">{loc.date}</div></div>
                <div className="loc-meta-cell"><span className="eyebrow">Venue</span><div className="v">{loc.venue}</div></div>
                <div className="loc-meta-cell"><span className="eyebrow">Address</span><div className="v">{loc.address}</div></div>
                <div className="loc-meta-cell"><span className="eyebrow">Hours</span><div className="v">{loc.hours}</div></div>
              </div>
              <div>
                <div className="row" style={{justifyContent:"space-between", marginBottom:8, fontSize:13, color:"var(--ink-2)"}}>
                  <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)"}}>Tickets sold · {pct}%</span>
                  <span style={{fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".06em", color:"var(--muted)"}}>{loc.sold} / {loc.capacity}</span>
                </div>
                <div className="loc-progress"><div style={{width: `${pct}%`}}/></div>
              </div>
              <div className="row" style={{gap:8, flexWrap:"wrap"}}>
                {loc.id === "northern-beaches"
                  ? <a href="https://events.humanitix.com/suburban-business-summit-northern-beaches/tickets" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Northern Beaches <span className="btn-arrow"></span></a>
                  : <span className="btn btn-ghost" style={{cursor:"default", pointerEvents:"none", opacity:0.7}}>Tickets coming soon</span>}
                <a href="#schedule" className="btn btn-ghost">See schedule</a>
              </div>
              <div className="row" style={{flexWrap:"wrap", gap:8, marginTop:12}}>
                <span className="eyebrow">In partnership with</span>
                <div className="row" style={{flexWrap:"wrap", gap:6}}>
                  {loc.partners.map(p => <span key={p} style={{fontSize:12, padding:"4px 10px", border:"1px solid var(--line)", borderRadius:"var(--btn-radius)", color:"var(--ink-2)"}}>{p}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SPEAKERS ───────────────────────────────────────────── */
function brandInitials(company) {
  return company
    .replace(/\(.*?\)/g, "")
    .replace(/[.,]/g, "")
    .split(/\s+/)
    .filter((w) => w && !["of", "the", "and"].includes(w.toLowerCase()))
    .slice(0, 3)
    .map((w) => (w === "&" ? "&" : w[0]))
    .join("")
    .toUpperCase();
}
function brandTag(company) {
  // Use the first 1–2 meaningful words, uppercased, for the small line under the mark
  const cleaned = company.replace(/\(.*?\)/g, "").trim();
  const words = cleaned.split(/\s+/).filter((w) => w !== "&");
  return words.slice(0, 2).join(" ").toUpperCase();
}

function Speakers({ onOpen }) {
  return (
    <section className="section" id="speakers" style={{background:"var(--bg-2)"}}>
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">04 — On the program</span>
          <h2 className="display">Operators who've actually done the thing.</h2>
          <p className="lede">Twenty speakers across keynotes, panels, masterclasses and firesides. No motivational hot air — everyone on stage is currently running a business in your patch.</p>
        </Reveal>
        <div className="speakers-grid">
          {SUB.speakers.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 80}>
              <button className="speaker" onClick={() => onOpen(s)}>
                <Photo src={s.img} alt={s.name} className="speaker-img">
                  <span className="badge">{s.tag}</span>
                  <div className={`speaker-brand v${i % 4}`} aria-hidden="true">
                    <div className="speaker-brand-letters">{brandInitials(s.company)}</div>
                    <div className="speaker-brand-tag">{brandTag(s.company)}</div>
                  </div>
                </Photo>
                <div>
                  <div className="speaker-name">{s.name}</div>
                  <div className="speaker-role">{s.role}, {s.company}</div>
                </div>
                <div className="speaker-topic">"{s.topic}"</div>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="row" style={{justifyContent:"center", marginTop:48, gap:12}}>
          <a href="#" className="btn btn-ghost">See the full 20-speaker lineup <span className="btn-arrow"></span></a>
        </div>
      </div>
    </section>
  );
}

/* ── SCHEDULE ───────────────────────────────────────────── */
function Schedule() {
  return (
    <section className="section" id="schedule">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">05 — Northern Beaches · 30 June 2026</span>
          <h2 className="display">The day, hour by hour.</h2>
          <p className="lede">Below is the published Northern Beaches program (updated 27/05/26). Every SUB Summit follows the same one-day rhythm: opening, regional focus, trades & collaboration, inspiration, lunch, future-focused business, then a relaxed after-function nearby.</p>
        </Reveal>
        <div className="schedule">
          {SUB.schedule.map((s, i) => {
            const hasItems = s.items && s.items.length;
            return (
              <Reveal key={i} className="sched-row">
                <div className="sched-time">{s.time}</div>
                <div className="sched-block">
                  <div className="sched-title">{s.title}</div>
                  {s.lede ? <div className="sched-who">{s.lede}</div> : null}
                </div>
                <div className="sched-aside">
                  {hasItems ? (
                    <ul className="sched-items">
                      {s.items.map((it, j) => (
                        <li key={j}>
                          <span className="sched-item-kind">{it.kind}</span>
                          <div>
                            <div className="sched-item-title">{it.title}</div>
                            {it.who ? <div className="sched-item-who">{it.who}</div> : null}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    s.stream ? <span className={`sched-stream ${s.stream === "Main" ? "main" : ""}`}>{s.stream}</span> : null
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="row" style={{justifyContent:"space-between", marginTop:24, fontSize:13, color:"var(--muted)", flexWrap:"wrap", gap:12}}>
          <span className="small">Program updated 27/05/26 2:40pm · Times indicative · Some sessions subject to change</span>
          <a href={HUMANITIX_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Book the 30 June event <span className="btn-arrow"></span></a>
        </div>
      </div>
    </section>
  );
}

/* ── SUPPORTERS — 30 JUNE TICKETS CTA ─────────────────────── */
function Supporters({ onTickets }) {
  return (
    <section className="section section-tight" id="supporters">
      <div className="container">
        <div className="sup-grid">
          <Reveal as="div" className="sup-text">
            <span className="eyebrow">Book tickets now · 30 June 2026</span>
            <h2 className="display" style={{fontSize:"clamp(36px, 4.6vw, 64px)", marginTop:14}}>
              Real stories.<br/>Warm introductions.<br/><span className="accent it">Local</span> decision-makers.
            </h2>
            <ul className="sup-bullets">
              <li><b>Hear</b> practical insights from local leaders, innovators and partners.</li>
              <li><b>Meet</b> charities, trades, community leaders and ecosystem partners who actively back local business.</li>
              <li><b>Be seen</b> by local decision-makers and potential customers — all in one room.</li>
            </ul>
            <div className="row" style={{gap:12, marginTop:24, flexWrap:"wrap"}}>
              <button onClick={onTickets} className="btn btn-primary btn-lg">Book a ticket <span className="btn-arrow"></span></button>
              <a href="#schedule" className="btn btn-ghost btn-lg">See the program</a>
            </div>
          </Reveal>
          <Reveal as="div" delay={120} className="sup-partners">
            <div className="eyebrow">Alongside trusted supporters</div>
            <div className="sup-list">
              {SUB.trustedSupporters.map(p => (
                <div key={p.name} className="sup-card">
                  <div className="sup-card-mark">{p.name.split(" ").slice(0,2).map(w => w[0]).join("")}</div>
                  <div className="sup-card-body">
                    <div className="sup-card-name">{p.name}</div>
                    <div className="sup-card-note">{p.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ──────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">In their own words</span>
          <h2 className="display">What past attendees say.</h2>
          <p className="lede">Real words from past Summits in Gosford and Hornsby Shire.</p>
        </Reveal>
        <div className="tmoni-grid">
          {SUB.testimonials.map((t, i) => (
            <Reveal key={i} className="tmoni-card" delay={i * 100}>
              <div className="tmoni-quote-mark">“</div>
              <div className="tmoni-quote">
                {(t.paras || [t.quote]).map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
              <div className="tmoni-who">
                <div className="tmoni-who-name">{t.who}</div>
                <div className="tmoni-who-role">{t.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Exhibitors() {
  return (
    <section className="section section-tight" id="exhibitors">
      <div className="container">
        <Reveal as="div" className="section-head" style={{marginBottom:36}}>
          <span className="eyebrow">06 — Past + 2026 exhibitor list</span>
          <h2 className="display">The companies on the floor.</h2>
        </Reveal>
        <Reveal>
          <div className="exh-grid">
            {SUB.exhibitors.map(e => (
              <div key={e} className="exh-cell">{e}</div>
            ))}
          </div>
        </Reveal>
        <div className="row" style={{justifyContent:"space-between", marginTop:24, fontSize:13, color:"var(--muted)", flexWrap:"wrap", gap:12}}>
          <span className="small">24 of 50 confirmed for 2026 · last update May 2026</span>
          <a href="#sponsors" className="btn btn-ghost btn-sm">Apply to exhibit <span className="btn-arrow"></span></a>
        </div>
      </div>
    </section>
  );
}

/* ── TICKETS ────────────────────────────────────────────── */
function Tickets() {
  return (
    <section className="section" id="tickets" style={{background:"var(--bg-2)"}}>
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">07 — Tickets · Northern Beaches · 30 June 2026</span>
          <h2 className="display">Four ticket options.<br/>One link to book.</h2>
          <p className="lede">Tickets are on sale now for the Northern Beaches event only, via Humanitix. All prices in AUD, GST included. Tea, coffee, morning tea, lunch and networking drinks included with Early Bird and General Admission.</p>
        </Reveal>
        <div className="tickets tickets-4">
          {SUB.tiers.map(t => (
            <Reveal key={t.id} className={`tier ${t.popular ? "popular" : ""}`}>
              <div className={t.popular ? "tier-tag" : "tier-eyebrow"}>{t.tag}</div>
              <h3 className="tier-name">{t.name}</h3>
              <p style={{margin:0, fontSize:14, opacity:0.78, lineHeight:1.4, textWrap:"pretty"}}>{t.tagline}</p>
              <div className="tier-price">
                <span className="amt">{fmtPrice(t.price)}</span>
                <span className="cur">/ person</span>
              </div>
              <ul className="tier-list">
                {t.includes.map(x => <li key={x}>{x}</li>)}
                {t.excludes.map(x => <li key={x} className="x">{x}</li>)}
              </ul>
              <a
                href={HUMANITIX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${t.popular ? "" : "btn-primary"}`}
                style={t.popular ? {background:"var(--paper)", color:"var(--ink)", borderColor:"var(--paper)"} : {}}
              >
                Book {t.name} <span className="btn-arrow"></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── GALLERY ────────────────────────────────────────────── */
function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">08 — Past events</span>
          <h2 className="display">What it actually looks like.</h2>
          <p className="lede">A few moments from Hornsby 2024 and Central Coast 2025 — when you remove the marketing gloss.</p>
        </Reveal>
        <div className="gallery">
          <Reveal as="div" className="gal-1"><Photo src={SUB.images.gallery[0]} alt="Main stage — Central Coast 2025" style={{height:"100%"}}/></Reveal>
          <Reveal as="div" className="gal-2" delay={80}><Photo src={SUB.images.gallery[1]} alt="Speed networking" style={{height:"100%"}}/></Reveal>
          <Reveal as="div" className="gal-3" delay={120}><Photo src={SUB.images.gallery[2]} alt="Expo floor at lunch" style={{height:"100%"}}/></Reveal>
          <Reveal as="div" className="gal-4" delay={160}><Photo src={SUB.images.gallery[3]} alt="Masterclass — small group" style={{height:"100%"}}/></Reveal>
          <Reveal as="div" className="gal-5" delay={200}><Photo src={SUB.images.gallery[4]} alt="Local Spotlight winner" style={{height:"100%"}}/></Reveal>
          <Reveal as="div" className="gal-6" delay={240}><Photo src={SUB.images.gallery[5]} alt="After hours — drinks, dumplings, DJ" style={{height:"100%"}}/></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useStateS(0);
  return (
    <section className="section" id="faq" style={{background:"var(--bg-2)"}}>
      <div className="container">
        <div style={{display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:"clamp(32px, 5vw, 80px)", alignItems:"start"}}>
          <Reveal as="div">
            <span className="eyebrow">09 — Common questions</span>
            <h2 className="display" style={{fontSize:"clamp(36px, 4.4vw, 60px)", marginTop:16}}>If you're<br/>wondering,<br/>so is everyone.</h2>
            <p className="lede" style={{marginTop:24, fontSize:16}}>Can't find your question? Email <a href="mailto:hello@subsummit.com.au" style={{color:"var(--accent)", borderBottom:"1px solid currentColor"}}>hello@subsummit.com.au</a> — we respond inside a business day.</p>
          </Reveal>
          <Reveal as="div" className="faq">
            {SUB.faqs.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="plus">+</span>
                </button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── SPONSOR CTA + FORM ─────────────────────────────────── */
function Sponsor() {
  const [sent, setSent] = useStateS(false);
  return (
    <section className="section" id="sponsors">
      <div className="container">
        <Reveal as="div" className="cta-row">
          <div>
            <span className="eyebrow" style={{color:"color-mix(in oklab, currentColor 70%, transparent)"}}>10 — Exhibit · Sponsor · Partner</span>
            <h2 style={{marginTop:14}}>
              500 owners.<br/>
              One day.<br/>
              Your booth in the middle.
            </h2>
            <p style={{maxWidth:"44ch", fontSize:17, lineHeight:1.5, marginTop:18, opacity:0.85, textWrap:"pretty"}}>
              The SUB Summit floor is one of the densest concentrations of local business owners and community leaders you'll meet in NSW all year. Two ways to get on the floor for the Northern Beaches event — book directly on Humanitix, or get in touch first.
            </p>
            <div className="sponsor-packs">
              {SUB.sponsorPackages.map(p => (
                <div key={p.id} className="sponsor-pack">
                  <div className="sponsor-pack-head">
                    <div className="eyebrow" style={{color:"color-mix(in oklab, currentColor 70%, transparent)"}}>{p.tag}</div>
                    <h4 className="sponsor-pack-name">{p.name}</h4>
                  </div>
                  <div className="sponsor-pack-price">
                    <span className="amt">${p.price.toLocaleString()}</span>
                    <span className="cur">{p.gst ? "+ GST" : "AUD"}</span>
                  </div>
                  <p style={{margin:"4px 0 0", fontSize:14, opacity:0.78, lineHeight:1.4, textWrap:"pretty"}}>{p.tagline}</p>
                  <ul className="sponsor-pack-list">
                    {p.includes.map(x => <li key={x}>{x}</li>)}
                  </ul>
                  <a
                    href={HUMANITIX_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    style={{justifyContent:"center", marginTop:4, background:"var(--paper)", color:"var(--ink)", borderColor:"var(--paper)"}}
                  >
                    Book on Humanitix <span className="btn-arrow"></span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <form className="sponsor-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="eyebrow">Want to talk first?</div>
            {sent ? (
              <div style={{padding:"24px 0", fontSize:18, lineHeight:1.4, textWrap:"pretty"}}>
                Thanks — we'll be in touch within two business days with a sponsor pack and answers to your questions.
              </div>
            ) : (
              <>
                <p style={{margin:"0 0 18px", fontSize:14, opacity:0.78, lineHeight:1.5, textWrap:"pretty"}}>
                  Prefer a chat before you commit? Send a note and we'll come back within two business days. If you're ready to go, the Humanitix link on each package gets you straight to checkout.
                </p>
                <div className="field-row">
                  <div className="field"><label>Company</label><input className="input" placeholder="Your business name" required/></div>
                  <div className="field"><label>Contact</label><input className="input" placeholder="Your full name" required/></div>
                </div>
                <div className="field-row">
                  <div className="field"><label>Email</label><input className="input" type="email" placeholder="you@company.com.au" required/></div>
                  <div className="field"><label>Phone</label><input className="input" placeholder="04…"/></div>
                </div>
                <div className="field">
                  <label>Which package?</label>
                  <select className="input" defaultValue="expo">
                    <option value="silver">Silver Package — $5,500 + GST</option>
                    <option value="expo">Expo Booth — $850 + GST</option>
                    <option value="other">Not sure yet — let's chat</option>
                  </select>
                </div>
                <div className="field">
                  <label>What you'd like to talk about</label>
                  <textarea className="input" rows={3} placeholder="Booth size, activation idea, audience fit — anything useful." />
                </div>
                <button className="btn btn-lg" type="submit" style={{justifyContent:"center", marginTop:8}}>Send enquiry <span className="btn-arrow"></span></button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ── NEWSLETTER + FOOTER ────────────────────────────────── */
function NewsletterFooter() {
  const [email, setEmail] = useStateS("");
  const [signed, setSigned] = useStateS(false);
  return (
    <footer className="foot" style={{background:"var(--bg)"}}>
      <div style={{maxWidth:"var(--max)", margin:"0 auto", padding:"0 0 80px"}}>
        <div className="divider-mono" style={{marginBottom:48}}>Stay close to the Summit</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(24px, 4vw, 80px)", alignItems:"end"}}>
          <h2 className="display" style={{fontSize:"clamp(40px, 5vw, 72px)", margin:0}}>
            One email,<br/>once a month,<br/>nothing else.
          </h2>
          {signed ? (
            <div className="lede">You're in. We send the next update when there's actually something worth telling you.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSigned(true); }} style={{display:"grid", gap:12}}>
              <input className="input" type="email" placeholder="you@something.com.au" value={email} onChange={(e) => setEmail(e.target.value)} required style={{fontSize:22}} />
              <div className="row" style={{justifyContent:"space-between"}}>
                <span className="small">Confirmed locations · new speakers · early-bird windows.</span>
                <button className="btn btn-primary" type="submit">Subscribe <span className="btn-arrow"></span></button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="foot-top">
        <div>
          <img src="images/logo-suburban-business-summit.png" alt="Suburban Business Summit" className="foot-logo-img" />
          <p className="small" style={{maxWidth:"42ch", marginTop:24, fontSize:14, lineHeight:1.55, color:"var(--ink-2)"}}>
            Suburban Business Summit. Backing business. Driving success. A community-first event series for the local operators powering the Australian economy.
          </p>
        </div>
        <div className="foot-col">
          <h5>The Summit</h5>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#locations">2026 locations</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#gallery">Past events</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Take part</h5>
          <ul>
            <li><a href="https://events.humanitix.com/suburban-business-summit-northern-beaches/tickets" target="_blank" rel="noopener noreferrer">Buy a ticket ↗</a></li>
            <li><a href="#sponsors">Exhibit or sponsor</a></li>
            <li><a href="#">Apply to speak</a></li>
            <li><a href="#">Community / charity rate</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:hello@subsummit.com.au">hello@subsummit.com.au</a></li>
            <li><a href="tel:+61298886655">(02) 9888 6655</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <span>© 2026 Sub Summit Pty Ltd · ABN 12 345 678 910</span>
        <span>Acknowledged on Garigal, Dharawal, Darug and Darkinjung Country</span>
        <span>Privacy · Terms · Code of conduct</span>
      </div>
    </footer>
  );
}

window.SubSections = { Hero, About, Features, Locations, Speakers, Schedule, Supporters, Testimonials, Exhibitors, Tickets, Gallery, FAQ, Sponsor, NewsletterFooter };
