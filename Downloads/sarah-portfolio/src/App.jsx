import { useState, useEffect } from "react";

const AI_TOOLS = [
  { id: 1, title: "Pricing Agent", desc: "AI-powered pricing strategy for founders who need clarity, fast.", tag: "AI Product", tagColor: "#CC4A1A", url: "https://pricingagent.live", emoji: "🤖", corner: "⭐" },
  { id: 2, title: "Fidelity Check", desc: "AI-powered design consistency auditing for product teams shipping at speed.", tag: "AI Design Tool", tagColor: "#1A4ACC", url: "https://driftcheck-jet.vercel.app/", emoji: "🎯", corner: "💎" },
  { id: 3, title: "Voice UX Auditor", desc: "Instant UX audit for voice agent scripts — friction, clarity, drop-off risks.", tag: "AI Product", tagColor: "#CC4A1A", url: "https://voice-ux-auditor.vercel.app", emoji: "🎙️", corner: "✨" },
];

const COMPANY_WORK = [
  {
    id: 4, title: "Amplitude", desc: "Subscription redesign that lifted conversion and meaningfully reduced churn.", tag: "Analytics · Growth", tagColor: "#0F6B35",
    emoji: "📊", videoUrl: "https://sarahkhan.live/wp-content/uploads/2023/04/Amplititude-Animation.m4v",
  },
  {
    id: 5, title: "Coursera", desc: "A checkout redesign that drove a 9% enrollment lift — still live years later.", tag: "EdTech · Growth", tagColor: "#7B35CC",
    emoji: "🎓", videoUrl: "/coursera-animation.m4v",
  },
  {
    id: 6, title: "NextRoll", desc: "An analytics pivot that retained 4% more customers — by listening to the right signals.", tag: "AdTech · Analytics", tagColor: "#CC7B00",
    emoji: "📣", videoUrl: "/adroll-animation.m4v",
  },
];

const CASE_STUDIES = [
  {
    id: 1, title: "Pricing Agent", tag: "AI Product · 2024",
    summary: "Building an AI pricing tool from 0 to live — the full product design arc, solo.",
    accent: "#FFF8F4", border: "#FFD4B8", bar: "#FF6B4A", emoji: "🤖",
    comingSoon: true,
  },
  {
    id: 2, title: "Fidelity Check", tag: "AI Design Tool · 2024",
    summary: "Redesigning design review workflows for faster, more consistent shipping.",
    accent: "#F4F7FF", border: "#B8CCFF", bar: "#4AADFF", emoji: "🎯",
    comingSoon: true,
  },
  {
    id: 3, title: "Voice UX Auditor", tag: "AI Collaboration · 2025",
    summary: "Designing with Claude as a creative partner — a new model for how designers work.",
    accent: "#F4FFF8", border: "#B8F0CC", bar: "#4ADDB3", emoji: "🎙️",
    comingSoon: true,
  },
  {
    id: 4, title: "Amplitude Plus", tag: "Growth · Monetization · 2023",
    summary: "Subscription redesign that lifted conversion and meaningfully reduced churn.",
    accent: "#FFFBF0", border: "#FFE4A8", bar: "#FFD166", emoji: "📈",
    videoUrl: "https://sarahkhan.live/wp-content/uploads/2023/04/Amplititude-Animation.m4v",
    sections: [
      {
        type: "intro",
        subhead: "Amplitude aims to achieve product-led growth by implementing a self serve subscription plan to enhance free-to-paid monetization.",
        image: "/Annual-2.png",
      },
      {
        type: "stats",
        items: [
          { value: "3%", label: "Lift in orgs upgrading to Plus in first 2 quarters" },
          { value: "10+", label: "User research participants" },
          { value: "E2E", label: "Design ownership from ideation to handoff" },
        ]
      },
      {
        type: "text", title: "Background",
        body: "There are currently three primary methods for free customers to upgrade to paid accounts, all of which involve contacting sales: in-product CTAs, overage notifications, or outbound sales outreach. No self-serve paid option existed outside of the Scholarship plan. Research indicated that Starter users were not interested in upgrading due to the high price point.",
      },
      {
        type: "text", title: "Problem",
        body: "Provide an annual and monthly subscription plan for smaller companies so they can access premium features without requiring a sales conversation.",
      },
      {
        type: "text", title: "Solution",
        body: "The Subscription Plan offered a range of features that met smaller companies' needs — advanced user behavior tracking, automated data analysis and reporting, personalized insights, and collaborative analytics tools that allowed teams to easily share and act on data.",
      },
      {
        type: "text", title: "My Role",
        body: "I led end-to-end design from ideation through final designs. I ran research to understand user needs and built working prototypes to help developers understand the new concept.",
      },
      {
        type: "text", title: "User Research",
        body: "I conducted generative user research with 10 participants to determine: (a) whether the pricing page layout makes sense to users considering a purchase, and (b) whether the checkout process is simple enough to complete successfully. We found that current pricing and packaging made sense to users and they could complete subscription management. Some feedback pointed to improving feature discovery so users understand functionality before purchasing.",
      },
      {
        type: "images", title: "Final Outcome",
        images: [
          "/Annual-2.png",
          "/Pricing-1.png",
          "/Screenshot-2023-03-07-at-3.06-1-1.png",
        ]
      },
    ],
  },
  {
    id: 5, title: "NextRoll", tag: "AdTech · Analytics · 2022",
    summary: "An analytics pivot that retained 4% more customers — by listening to the right signals.",
    accent: "#FAF4FF", border: "#DDB8FF", bar: "#DDB8FF", emoji: "📣",
    videoUrl: "/adroll-animation.m4v",
    sections: [
      {
        type: "intro",
        subhead: "Ads platform manager helps marketers connect their social marketing channels with Adroll and import their data from any external platform.",
        image: "/image-233.png",
      },
      {
        type: "stats",
        items: [
          { value: "27", label: "User research participants" },
          { value: "10–15", label: "Avg platforms marketers juggle" },
          { value: "E2E", label: "Design ownership from ideation to handoff" },
        ]
      },
      {
        type: "text", title: "Background",
        body: "Retailers increasingly rely on social media marketing to drive e-commerce sales. On average, marketers use 10–15 different platforms to execute and oversee ad campaigns. 60% of marketers use two or more analytics tools at any given time.",
      },
      {
        type: "text", title: "Problem",
        body: "Marketers at all skill levels employ various tools to manage campaigns. Small business owners who handle their own marketing often struggle to find time to learn new tools effectively. Adroll needed to increase user engagement and adoption of their product suite.",
      },
      {
        type: "text", title: "How Might We",
        body: "How might we facilitate the seamless creation and management of ad campaigns by marketers across various social media and web platforms?",
        callout: true,
      },
      {
        type: "text", title: "Solution",
        body: "By enabling the integration of users' social media advertising platforms with Adroll, we can facilitate seamless creation and management of ad campaigns. Users desired not only to view their social media campaigns within Adroll, but also to modify them — all in one place.",
      },
      {
        type: "text", title: "Impact",
        body: "This project helped Adroll increase metrics for revenue, user engagement, and campaign creation.",
      },
      {
        type: "imageSection", title: "Selecting a Campaign",
        body: "First step is selecting a campaign. Value props for every campaign type help users make the best decision.",
        image: "/image-229-1.png",
      },
      {
        type: "imageSection", title: "Connecting Channels",
        body: "Users select all the channels they want to connect. The top section ensures users have all the information along with a step-by-step guided video.",
        image: "/image-232-2.png",
      },
      {
        type: "imageSection", title: "Real-time Feedback",
        body: "A side panel breaks the platform down to give more clarity and real-time feedback on the connection steps.",
        image: "/image-230-1.png",
      },
    ],
  },
  {
    id: 6, title: "Coursera Plus", tag: "EdTech · Growth · 2021",
    summary: "A checkout redesign that drove a 9% enrollment lift — still live years later.",
    accent: "#F4FFFD", border: "#B8F0EA", bar: "#4ADDB3", emoji: "🎓",
    videoUrl: "/coursera-animation.m4v",
    sections: [
      {
        type: "intro",
        subhead: "A catalog subscription plan providing unlimited access to 3,000+ courses, Specializations, and Professional Certificates.",
        image: "/615defe2ae8b99bbfe1c53fa_Enrollment-Page-Annual@2x-1-1.png",
      },
      {
        type: "stats",
        items: [
          { value: "9%", label: "Enrollment lift — still live years later" },
          { value: "3,000+", label: "Courses in the catalog" },
          { value: "E2E", label: "Design ownership from ideation to handoff" },
        ]
      },
      {
        type: "text", title: "Problem",
        body: "Learners have strong motivation to acquire skills across multiple areas, but subscribing to separate resources for coding, marketing, design, and languages is expensive and overwhelming. They needed a cost-effective single subscription providing access to a wide range of topics.",
      },
      {
        type: "text", title: "Solution",
        body: "Coursera introduced an annual subscription giving learners unlimited access to the full course catalog for a fixed fee. This made multi-subject learning cost-effective and convenient, incentivized year-long engagement, and motivated learners to complete courses to maximize the value of their subscription.",
      },
      {
        type: "text", title: "My Role",
        body: "I oversaw the entire design process from start to finish — conceptualizing the initial idea, defining design requirements, creating prototypes, and handing off final designs to the development team.",
      },
      {
        type: "text", title: "Impact",
        body: "By enabling learners to achieve their career goals, Coursera established itself as a valuable resource for professional skill development. This resulted in increased customer loyalty, positive word-of-mouth, and revenue growth through multiple channels.",
      },
      {
        type: "images", title: "Final Outcome",
        images: [
          "/2 (1).png",
          "/3-2.png",
          "/3-1.png",
        ]
      },
    ],
  },
];

const MOTION = [
  { id: 1, title: "AR Ad Builder", desc: "Award-winning AR ad builder. Most Commercial Impact Award.", tag: "Motion · After Effects", tagColor: "#7B35CC", emoji: "🏆", url: "https://sarahkhan.live/wp-content/uploads/2023/05/AR-Ad-Builder-720p.mp4" },
  { id: 2, title: "Finance App", desc: "Interaction design and motion for a consumer finance application.", tag: "Motion · After Effects", tagColor: "#1A4ACC", emoji: "💳", url: "/motion-finance.mp4" },
  { id: 3, title: "Streaming App", desc: "UI animation and interaction design for a streaming service.", tag: "Motion · After Effects", tagColor: "#CC4A1A", emoji: "🎬", url: "/motion-streaming.mp4" },
];

const S = {
  bg: "#FAFAF8", white: "#FFFFFF", border: "#EFEFEF",
  text: "#1A1A1A", muted: "#777777", soft: "#AAAAAA",
};

function Underline({ color, width = 220 }) {
  return (
    <svg viewBox={`0 0 ${width} 12`} style={{ width, height: 10, display: "block", marginBottom: 14 }}>
      <path d={`M2 8 Q${width/4} 2 ${width/2} 8 Q${width*3/4} 14 ${width-2} 6`} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function SectionDivider({ label, note }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Nunito', sans-serif", whiteSpace: "nowrap" }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: S.border }} />
      {note && <span style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: "#BBBBBB", whiteSpace: "nowrap" }}>{note}</span>}
    </div>
  );
}

function WorkCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => window.open(item.url, "_blank")}
      style={{ background: S.white, border: `1.5px solid ${hov ? S.text : S.border}`, borderRadius: 16, padding: "20px 20px 18px", cursor: "pointer", transition: "all 0.18s", transform: hov ? "translateY(-4px)" : "none", boxShadow: hov ? "4px 4px 0 #1A1A1A" : "none", position: "relative" }}
    >
      <span style={{ fontSize: 22, marginBottom: 12, display: "block" }}>{item.emoji}</span>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: item.tagColor, marginBottom: 8, fontFamily: "'Nunito', sans-serif" }}>{item.tag}</div>
      <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 16, color: S.text, marginBottom: 7 }}>{item.title}</h3>
      <p style={{ fontSize: 12, color: S.muted, lineHeight: 1.65, marginBottom: 14 }}>{item.desc}</p>
      <div style={{ fontSize: 11, fontWeight: 700, fontFamily: "'Nunito', sans-serif", color: S.text }}>Open tool ↗</div>
      <div style={{ position: "absolute", top: 14, right: 16, fontSize: 14, opacity: 0.55 }}>{item.corner}</div>
    </div>
  );
}

function CompanyCard({ item, onCaseStudy }) {
  const [hov, setHov] = useState(false);
  const [playing, setPlaying] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: S.white, border: `1.5px solid ${hov ? S.text : S.border}`, borderRadius: 16, overflow: "hidden", transition: "all 0.18s", transform: hov ? "translateY(-4px)" : "none", boxShadow: hov ? "4px 4px 0 #1A1A1A" : "none" }}
    >
      <div style={{ position: "relative", background: "#111", height: 160, cursor: "pointer" }} onClick={() => setPlaying(!playing)}>
        {playing ? (
          <video src={item.videoUrl} autoPlay controls style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 18, marginLeft: 3 }}>▶</span>
            </div>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>Click to play</span>
          </div>
        )}
      </div>
      <div style={{ padding: "16px 18px 18px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: item.tagColor, marginBottom: 6, fontFamily: "'Nunito', sans-serif" }}>{item.tag}</div>
        <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: S.text, marginBottom: 6 }}>{item.emoji} {item.title}</h3>
        <p style={{ fontSize: 12, color: S.muted, lineHeight: 1.6, marginBottom: 14 }}>{item.desc}</p>
        <button onClick={onCaseStudy} style={{ background: "none", border: `1.5px solid ${S.border}`, borderRadius: 20, padding: "6px 14px", fontSize: 11, fontWeight: 700, fontFamily: "'Nunito', sans-serif", color: S.text, cursor: "pointer" }}>
          View case study →
        </button>
      </div>
    </div>
  );
}

function CaseStudyCard({ item, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}
      style={{ background: hov ? item.accent : S.white, border: `1.5px solid ${hov ? item.border : S.border}`, borderRadius: 16, padding: "22px 20px", cursor: item.comingSoon ? "default" : "pointer", transition: "all 0.18s", transform: hov && !item.comingSoon ? "translateY(-4px)" : "none", boxShadow: hov && !item.comingSoon ? `4px 4px 0 ${item.border}` : "none", position: "relative", overflow: "hidden" }}
    >
      <div style={{ height: 4, borderRadius: "4px 4px 0 0", background: item.bar, position: "absolute", top: 0, left: 0, right: 0 }} />
      <span style={{ fontSize: 24, marginBottom: 12, display: "block" }}>{item.emoji}</span>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#AAAAAA", marginBottom: 8, fontFamily: "'Nunito', sans-serif" }}>{item.tag}</div>
      <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 16, color: S.text, marginBottom: 8 }}>{item.title}</div>
      <div style={{ fontSize: 12, color: "#666", lineHeight: 1.65, marginBottom: 14 }}>{item.summary}</div>
      {item.comingSoon
        ? <span style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: "#CCCCCC" }}>✏️ coming soon...</span>
        : <div style={{ fontSize: 11, fontWeight: 700, fontFamily: "'Nunito', sans-serif", color: S.text }}>Read case study →</div>
      }
    </div>
  );
}

function StatBadge({ value, label, color }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 16px", background: S.white, border: `1.5px solid ${S.border}`, borderRadius: 12 }}>
      <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 28, color, marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 11, color: S.muted, lineHeight: 1.5 }}>{label}</div>
    </div>
  );
}

function CaseStudyReader({ item, onBack }) {
  useEffect(() => window.scrollTo(0, 0), []);
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 0 80px", animation: "fadeUp 0.4s ease" }}>
      <button onClick={onBack} style={{ background: "none", border: `1.5px solid ${S.border}`, borderRadius: 20, padding: "7px 16px", fontSize: 13, color: S.muted, cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontWeight: 700, marginBottom: 40, display: "flex", alignItems: "center", gap: 6 }}>
        ← Back to Case Studies
      </button>

      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#AAAAAA", marginBottom: 10, fontFamily: "'Nunito', sans-serif" }}>{item.tag}</div>
      <h1 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 5vw, 38px)", color: S.text, lineHeight: 1.1, marginBottom: 6 }}>{item.emoji} {item.title}</h1>
      <Underline color={item.bar} width={280} />
      <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 32, maxWidth: 600 }}>{item.summary}</p>

      {item.comingSoon && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "#BBBBBB", fontFamily: "'Caveat', cursive", fontSize: 18 }}>
          ✏️ Full case study coming soon...
        </div>
      )}

      {!item.comingSoon && item.sections && item.sections.map((section, i) => {
        if (section.type === "intro") return (
          <div key={i} style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 15, color: "#444", lineHeight: 1.85, marginBottom: 24, fontStyle: "italic", paddingLeft: 16, borderLeft: `3px solid ${item.bar}` }}>{section.subhead}</p>
            {item.videoUrl && (
              <div style={{ borderRadius: 12, overflow: "hidden", background: "#111", marginBottom: 16, cursor: "pointer" }} onClick={() => setPlaying(!playing)}>
                {playing ? (
                  <video src={item.videoUrl} autoPlay controls style={{ width: "100%", display: "block" }} />
                ) : (
                  <div style={{ height: 220, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10 }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 22, marginLeft: 4 }}>▶</span>
                    </div>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Watch the interaction demo</span>
                  </div>
                )}
              </div>
            )}
            <img src={section.image} alt={item.title} style={{ width: "100%", borderRadius: 12, display: "block", border: `1.5px solid ${S.border}` }} />
          </div>
        );

        if (section.type === "stats") return (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 40 }}>
            {section.items.map((s, j) => <StatBadge key={j} value={s.value} label={s.label} color={item.bar} />)}
          </div>
        );

        if (section.type === "text") return (
          <div key={i} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 18, color: S.text, marginBottom: 10 }}>{section.title}</h2>
            <div style={section.callout ? { background: item.accent, border: `1.5px solid ${item.border}`, borderRadius: 10, padding: "16px 20px" } : {}}>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9, margin: 0 }}>{section.body}</p>
            </div>
          </div>
        );

        if (section.type === "imageSection") return (
          <div key={i} style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 18, color: S.text, marginBottom: 8 }}>{section.title}</h2>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>{section.body}</p>
            <img src={section.image} alt={section.title} style={{ width: "100%", borderRadius: 12, display: "block", border: `1.5px solid ${S.border}` }} />
          </div>
        );

        if (section.type === "images") return (
          <div key={i} style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 18, color: S.text, marginBottom: 16 }}>{section.title}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {section.images.map((src, j) => (
                <img key={j} src={src} alt={`${item.title} ${j+1}`} style={{ width: "100%", borderRadius: 12, display: "block", border: `1.5px solid ${S.border}` }} />
              ))}
            </div>
          </div>
        );

        return null;
      })}
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

function MotionCard({ item }) {
  const [hov, setHov] = useState(false);
  const [playing, setPlaying] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: S.white, border: `1.5px solid ${hov ? S.text : S.border}`, borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "all 0.18s", transform: hov ? "translateY(-4px)" : "none", boxShadow: hov ? "4px 4px 0 #1A1A1A" : "none" }}
    >
      <div style={{ position: "relative", background: "#111", height: 160 }} onClick={() => setPlaying(!playing)}>
        {playing ? (
          <video src={item.url} autoPlay controls style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 18, marginLeft: 3 }}>▶</span>
            </div>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>Click to play</span>
          </div>
        )}
      </div>
      <div style={{ padding: "16px 18px 18px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: item.tagColor, marginBottom: 6, fontFamily: "'Nunito', sans-serif" }}>{item.tag}</div>
        <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 15, color: S.text, marginBottom: 6 }}>{item.emoji} {item.title}</h3>
        <p style={{ fontSize: 12, color: S.muted, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
      </div>
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

  const switchTab = (t) => { setTab(t); setActiveCS(null); window.scrollTo(0, 0); };
  const openCaseStudy = (cs) => { setActiveCS(cs); setTab("casestudies"); window.scrollTo(0, 0); };

  const TABS = [{ id: "work", label: "Work" }, { id: "casestudies", label: "Case Studies" }, { id: "connect", label: "Let's Connect" }];

  return (
    <div style={{ minHeight: "100vh", background: S.bg, fontFamily: "'DM Sans', sans-serif", color: S.text }}>

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

      {tab === "work" && (
        <div style={{ padding: "48px 32px 36px", position: "relative", overflow: "hidden", maxWidth: 900, margin: "0 auto", animation: "fadeUp 0.5s ease" }}>
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

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px 80px" }}>

        {tab === "work" && (
          <div style={{ animation: "fadeUp 0.4s ease" }}>
            <SectionDivider label="AI Tools I've Built" note="3 live" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14, marginBottom: 48 }}>
              {AI_TOOLS.map(item => <WorkCard key={item.id} item={item} />)}
            </div>

            <SectionDivider label="Company Work" note="Amplitude · Coursera · NextRoll" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14, marginBottom: 48 }}>
              {COMPANY_WORK.map(item => (
                <CompanyCard key={item.id} item={item}
                  onCaseStudy={() => openCaseStudy(CASE_STUDIES.find(cs => cs.title.toLowerCase().includes(item.title.toLowerCase())))}
                />
              ))}
            </div>

            <SectionDivider label="Motion & Interaction" note="After Effects · Figma" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
              {MOTION.map(item => <MotionCard key={item.id} item={item} />)}
            </div>
          </div>
        )}

        {tab === "casestudies" && (
          <div style={{ animation: "fadeUp 0.4s ease" }}>
            {activeCS ? (
              <CaseStudyReader item={activeCS} onBack={() => { setActiveCS(null); window.scrollTo(0, 0); }} />
            ) : (
              <>
                <div style={{ paddingTop: 36, marginBottom: 24 }}>
                  <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 26, marginBottom: 4 }}>Case Studies</h2>
                  <Underline color="#FFD4B8" width={240} />
                  <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>Deep dives into how I think, what I shipped, and why it worked.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
                  {CASE_STUDIES.map(cs => (
                    <CaseStudyCard key={cs.id} item={cs} onClick={() => !cs.comingSoon && setActiveCS(cs)} />
                  ))}
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
