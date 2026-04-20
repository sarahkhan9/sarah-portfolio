import { useState, useEffect } from "react";

const WORK = [
  { id: 1, title: "Pricing Agent", desc: "AI-powered pricing strategy for founders who need clarity, fast.", tag: "AI Product", tagColor: "#CC4A1A", url: "https://pricingagent.live", live: true, emoji: "🤖", corner: "⭐" },
  { id: 2, title: "Fidelity Check", desc: "AI-powered design consistency auditing for product teams shipping at speed.", tag: "AI Design Tool", tagColor: "#1A4ACC", url: "https://driftcheck-jet.vercel.app/", live: true, emoji: "🎯", corner: "💎" },
  { id: 3, title: "Voice UX Auditor", desc: "Instant UX audit for voice agent scripts — friction, clarity, drop-off risks.", tag: "AI Product", tagColor: "#CC4A1A", url: "https://voice-ux-auditor.vercel.app", live: true, emoji: "🎙️", corner: "✨" },
  { id: 4, title: "Amplitude Plus", desc: "Coming soon", tag: "Analytics", tagColor: "#0F6B35", url: null, live: false, emoji: "📊" },
  { id: 5, title: "Coursera", desc: "Coming soon", tag: "EdTech", tagColor: "#7B35CC", url: null, live: false, emoji: "🎓" },
  { id: 6, title: "NextRoll", desc: "Coming soon", tag: "AdTech", tagColor: "#CC7B00", url: null, live: false, emoji: "📣" },
];

const CASE_STUDIES = [
  { id: 1, title: "Pricing Agent", tag: "AI Product · 2024", summary: "Building an AI pricing tool from 0 to live — the full product design arc, solo.", accent: "#FFF8F4", border: "#FFD4B8", bar: "#FF6B4A", emoji: "🤖" },
  { id: 2, title: "Fidelity Design", tag: "AI Design Tool · 2024", summary: "Redesigning design review workflows for faster, more consistent shipping.", accent: "#F4F7FF", border: "#B8CCFF", bar: "#4AADFF", emoji: "🎯" },
  { id: 3, title: "Voice UX Auditor", tag: "AI Collaboration · 2025", summary: "Designing with Claude as a creative partner — a new model for how designers work.", accent: "#F4FFF8", border: "#B8F0CC", bar: "#4ADDB3", emoji: "🎙️" },
  { id: 4, title: "Amplitude Plus", tag: "Growth · 2023", summary: "Subscription redesign that lifted conversion and meaningfully reduced churn.", accent: "#FFFBF0", border: "#FFE4A8", bar: "#FFD166", emoji: "📈" },
  { id: 5, title: "NextRoll", tag: "Analytics · 2022", summary: "An analytics pivot that retained 4% more customers — by listening to the right signals.", accent: "#FAF4FF", border: "#DDB8FF", bar: "#DDB8FF", emoji: "🎯" },
  { id: 6, title: "Coursera Plus", tag: "EdTech · 2021", summary: "A checkout redesign that drove a 9% enrollment lift — still live years later.", accent: "#F4FFFD", border: "#B8F0EA", bar: "#4ADDB3", emoji: "🎓" },
];

const S = {
  bg: "#FAFAF8",
  white: "#FFFFFF",
  border: "#EFEFEF",
  text: "#1A1A1A",
  muted: "#777777",
  soft: "#AAAAAA",
};

function Underline({ color, width = 220 }) {
  return (
    <svg viewBox={`0 0 ${width} 12`} style={{ width, height: 10, display: "block", marginBottom: 14 }}>
      <path d={`M2 8 Q${width/4} 2 ${width/2} 8 Q${width*3/4} 14 ${width-2} 6`} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function WorkCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => item.live && window.open(item.url, "_blank")}
      style={{
        background: item.live ? S.white : "#F8F8F6",
        border: `1.5px ${item.live ? "solid" : "dashed"} ${hov && item.live ? S.text : S.border}`,
        borderRadius: 16, padding: "20px 20px 18px",
        cursor: item.live ? "pointer" : "default",
        transition: "all 0.18s",
        transform: hov && item.live ? "translateY(-4px)" : "none",
        boxShadow: hov && item.live ? "4px 4px 0 #1A1A1A" : "none",
        position: "relative"
      }}
    >
      <span style={{ fontSize: 22, marginBottom: 12, display: "block", opacity: item.live ? 1 : 0.25 }}>{item.emoji}</span>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: item.live ? item.tagColor : "#CCCCCC", marginBottom: 8, fontFamily: "'Nunito', sans-serif" }}>{item.tag}</div>
      <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 16, color: item.live ? S.text : "#CCCCCC", marginBottom: 7 }}>{item.title}</h3>
      <p style={{ fontSize: 12, color: item.live ? S.muted : "#CCCCCC", lineHeight: 1.65, marginBottom: 14 }}>{item.desc}</p>
      {item.live
        ? <div style={{ fontSize: 11, fontWeight: 700, fontFamily: "'Nunito', sans-serif", color: S.text }}>Open tool ↗</div>
        : <div style={{ fontSize: 13, fontFamily: "'Caveat', cursive", color: "#CCCCCC" }}>coming soon...</div>
      }
      {item.live && <div style={{ position: "absolute", top: 14, right: 16, fontSize: 14, opacity: 0.55 }}>{item.corner}</div>}
    </div>
  );
}

function CaseStudyCard({ item, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        background: hov ? item.accent : S.white,
        border: `1.5px solid ${hov ? item.border : S.border}`,
        borderRadius: 16, padding: "22px 20px",
        cursor: "pointer", transition: "all 0.18s",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? `4px 4px 0 ${item.border}` : "none",
        position: "relative", overflow: "hidden"
      }}
    >
      <div style={{ height: 4, borderRadius: "4px 4px 0 0", background: item.bar, position: "absolute", top: 0, left: 0, right: 0 }} />
      <span style={{ fontSize: 24, marginBottom: 12, display: "block" }}>{item.emoji}</span>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#AAAAAA", marginBottom: 8, fontFamily: "'Nunito', sans-serif" }}>{item.tag}</div>
      <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 16, color: S.text, marginBottom: 8 }}>{item.title}</div>
      <div style={{ fontSize: 12, color: "#666", lineHeight: 1.65, marginBottom: 14 }}>{item.summary}</div>
      <div style={{ fontSize: 11, fontWeight: 700, fontFamily: "'Nunito', sans-serif", color: S.text }}>Read case study →</div>
    </div>
  );
}

function CaseStudyReader({ item, onBack }) {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 32px 80px", animation: "fadeUp 0.4s ease" }}>
      <button onClick={onBack} style={{ background: "none", border: `1.5px solid ${S.border}`, borderRadius: 20, padding: "7px 16px", fontSize: 13, color: S.muted, cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontWeight: 700, marginBottom: 40, display: "flex", alignItems: "center", gap: 6 }}>
        ← Back
      </button>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#AAAAAA", marginBottom: 12, fontFamily: "'Nunito', sans-serif" }}>{item.tag}</div>
      <h1 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 38, color: S.text, lineHeight: 1.1, marginBottom: 6 }}>{item.emoji} {item.title}</h1>
      <Underline color={item.bar} width={300} />
      <div style={{ marginTop: 28, padding: 24, background: item.accent, border: `1.5px solid ${item.border}`, borderRadius: 12, marginBottom: 32 }}>
        <p style={{ margin: 0, fontSize: 16, color: "#333", lineHeight: 1.8, fontStyle: "italic" }}>{item.summary}</p>
      </div>
      <div style={{ textAlign: "center", padding: "60px 0", color: "#BBBBBB", fontFamily: "'Caveat', cursive", fontSize: 18 }}>
        ✏️ Full case study coming soon...
      </div>
    </div>
  );
}

function ConnectTab() {
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 32px" }}>
      <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 24, color: S.text }}>A little about me 👋</h2>
      <Underline color="#FF6B4A" width={220} />
      <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9, marginBottom: 10 }}>I'm a Staff-level Product and Growth Designer with a hybrid PM background — about 7 years at the intersection of human behavior, business growth, and product craft. I've shipped work at Microsoft (Copilot), Amplitude, Fivetran, Coursera, NextRoll, and Walmart.</p>
      <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9, marginBottom: 10 }}>I design products people actually want to use — and that businesses can grow with. Empathy meets monetization strategy, grounded in human psychology. AI is the underpinning, not the headline.</p>
      <p style={{ fontSize: 12, color: "#AAAAAA", marginBottom: 0 }}>Based in the NYC area · Open to Bay Area</p>
      <a href="https://www.linkedin.com/in/sarah-khan9/" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#0A66C2", color: "#fff", padding: "9px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, fontFamily: "'Nunito', sans-serif", textDecoration: "none", marginTop: 16, marginBottom: 36 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        View LinkedIn
      </a>
      <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 24, color: S.text }}>Drop me a note ✉️</h2>
      <Underline color="#4ADDB3" width={180} />
      {sent ? (
        <div style={{ textAlign: "center", padding: "40px 0", fontFamily: "'Caveat', cursive", fontSize: 22, color: S.text }}>Got it! I'll get back to you soon 🤍</div>
      ) : (
        <>
          <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Say hello, share feedback, or ask about my work..." rows={5} style={{ width: "100%", border: `1.5px solid ${S.border}`, borderRadius: 12, padding: "12px 14px", fontSize: 13, color: S.text, resize: "vertical", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, background: S.bg, marginTop: 14, boxSizing: "border-box", outline: "none" }} onFocus={e => e.target.style.borderColor = "#FF6B4A"} onBlur={e => e.target.style.borderColor = S.border} />
          <button onClick={() => msg.trim() && setSent(true)} disabled={!msg.trim()} style={{ marginTop: 10, background: msg.trim() ? S.text : S.border, color: msg.trim() ? "#fff" : S.soft, border: "none", borderRadius: 20, padding: "10px 26px", fontSize: 13, fontWeight: 700, fontFamily: "'Nunito', sans-serif", cursor: msg.trim() ? "pointer" : "not-allowed", transition: "all 0.2s" }}>
            Send it →
          </button>
        </>
      )}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("work");
  const [activeCS, setActiveCS] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Caveat:wght@600;700&family=DM+Sans:wght@400;500&display=swap";
    document.head.appendChild(link);
    const style = document.createElement("style");
    style.textContent = `@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}} *{box-sizing:border-box} body{margin:0;background:#FAFAF8}`;
    document.head.appendChild(style);
  }, []);

  const switchTab = (t) => { setTab(t); setActiveCS(null); };

  const TABS = [{ id: "work", label: "Work" }, { id: "casestudies", label: "Case Studies" }, { id: "connect", label: "Let's Connect" }];

  return (
    <div style={{ minHeight: "100vh", background: S.bg, fontFamily: "'DM Sans', sans-serif", color: S.text }}>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "#F2EDE8", backdropFilter: "blur(12px)", borderBottom: `1.5px solid #E8E4DF`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", height: 56 }}>
        <div onClick={() => switchTab("work")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B4A" }} />
          <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 17, color: S.text }}>Sarah Khan</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => switchTab(t.id)} style={{ background: tab === t.id ? S.text : "transparent", color: tab === t.id ? "#fff" : "#98918B", border: "none", borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif", transition: "all 0.15s" }}>{t.label}</button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      {tab === "work" && (
        <div style={{ padding: "48px 32px 36px", position: "relative", overflow: "hidden", maxWidth: 900, margin: "0 auto", animation: "fadeUp 0.5s ease" }}>
          {/* Floating shapes */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
            <svg style={{ position: "absolute", right: "10%", top: "18%", opacity: 0.7 }} width="22" height="22" viewBox="0 0 24 24"><path d="M12 2L13.5 9L20 8L15 13L17 20L12 16L7 20L9 13L4 8L10.5 9Z" fill="#FFD166" stroke="#FFB800" strokeWidth="0.5" strokeLinejoin="round"/></svg>
            <svg style={{ position: "absolute", right: "22%", top: "8%", opacity: 0.5 }} width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5" fill="#FF9EC4"/></svg>
            <svg style={{ position: "absolute", left: "4%", top: "55%", opacity: 0.45 }} width="18" height="18" viewBox="0 0 18 18"><rect x="2" y="2" width="14" height="14" rx="4" fill="#4AADFF" transform="rotate(15 9 9)"/></svg>
            <svg style={{ position: "absolute", right: "6%", bottom: "20%", opacity: 0.45 }} width="16" height="16" viewBox="0 0 16 16"><polygon points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6" fill="#4ADDB3"/></svg>
            <svg style={{ position: "absolute", left: "8%", top: "20%", opacity: 0.4 }} width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="#FF6B4A"/></svg>
            <svg style={{ position: "absolute", right: "32%", bottom: "10%", opacity: 0.35 }} width="14" height="14" viewBox="0 0 14 14"><rect x="1" y="1" width="12" height="12" rx="3" fill="#DDB8FF" transform="rotate(20 7 7)"/></svg>
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {[["Empathy-driven","#FFF0E8","#CC4A1A","#FFD4B8"],["Growth & Monetization","#E8F2FF","#1A4ACC","#B8CCFF"],["Human Psychology","#EAFFF2","#0F6B35","#B8F0CC"]].map(([label, bg, color, border]) => (
              <span key={label} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, background: bg, color, border: `1.5px solid ${border}` }}>{label}</span>
            ))}
          </div>

          <h1 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 42px)", lineHeight: 1.1, color: S.text, marginBottom: 6, maxWidth: 560 }}>
            I design products people<br />actually want to use.
          </h1>
          <div style={{ width: 360, height: 10 }}>
            <svg viewBox="0 0 360 12" style={{ width: "100%", height: 10 }}>
              <path d="M2 8 Q90 2 180 8 Q270 14 358 6" fill="none" stroke="#FF6B4A" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.85, maxWidth: 480, marginTop: 18 }}>
            Empathy-driven design that understands human behavior. Growth and monetization strategy that creates real outcomes. AI as the tool, not the story.
          </p>
        </div>
      )}

      {/* Main */}
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px 80px" }}>

        {tab === "work" && (
          <div style={{ animation: "fadeUp 0.4s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Nunito', sans-serif" }}>Live Tools</span>
              <div style={{ flex: 1, height: 1, background: S.border }} />
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: "#BBBBBB" }}>3 live · 3 coming</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
              {WORK.map(item => <WorkCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {tab === "casestudies" && (
          <div style={{ animation: "fadeUp 0.4s ease" }}>
            {activeCS ? (
              <CaseStudyReader item={activeCS} onBack={() => setActiveCS(null)} />
            ) : (
              <>
                <div style={{ paddingTop: 36, marginBottom: 24 }}>
                  <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 26, marginBottom: 4 }}>Case Studies</h2>
                  <Underline color="#FFD4B8" width={240} />
                  <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>Deep dives into how I think, what I shipped, and why it worked.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
                  {CASE_STUDIES.map(cs => <CaseStudyCard key={cs.id} item={cs} onClick={() => setActiveCS(cs)} />)}
                </div>
              </>
            )}
          </div>
        )}

        {tab === "connect" && (
          <div style={{ animation: "fadeUp 0.4s ease", paddingTop: 36 }}>
            <ConnectTab />
          </div>
        )}
      </main>

      <footer style={{ borderTop: `1.5px solid ${S.border}`, padding: "16px 32px", display: "flex", justifyContent: "space-between", maxWidth: 900, margin: "0 auto" }}>
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: "#CCCCCC" }}>sarahkhan.co ✦ 2025</span>
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: "#CCCCCC" }}>designed with intention (and Claude) 🤍</span>
      </footer>
    </div>
  );
}
