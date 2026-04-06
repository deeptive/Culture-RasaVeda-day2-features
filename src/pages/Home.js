import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const FEATURES = [
  {
    id: 1,
    icon: "📖",
    title: "Regional Recipe Encyclopedia",
    desc: "Paginated recipe listing with filters for region, community, language and dietary tags.",
    difficulty: "Easy",
    path: "/recipes",
  },
  {
    id: 2,
    icon: "🗺️",
    title: "Interactive Food Map",
    desc: "Clickable map of India. Click a state to see its signature dishes in a side panel.",
    difficulty: "Medium",
    path: "/map",
  },
  {
    id: 3,
    icon: "🌿",
    title: "Ingredient Origins Tracker",
    desc: "Ingredient detail page showing origin region, health properties and linked recipes.",
    difficulty: "Medium",
    path: "/ingredients",
  },
  {
    id: 4,
    icon: "🎉",
    title: "Festival Food Calendar",
    desc: "Calendar with festival dates marked. Click a date to see traditional food cards.",
    difficulty: "Easy",
    path: "/festivals",
  },
  {
    id: 5,
    icon: "🌳",
    title: "Cuisine Family Tree",
    desc: "Interactive tree showing how regional cuisines evolved and influenced each other.",
    difficulty: "Hard",
    path: "/cuisine-tree",
  },
  {
    id: 6,
    icon: "🥘",
    title: "Street Food Directory",
    desc: "Searchable card grid of iconic Indian street foods filterable by region and city.",
    difficulty: "Easy",
    path: "/street-food",
  },
  {
    id: 7,
    icon: "🍳",
    title: "Cooking Techniques Wiki",
    desc: "Wiki-style listing of traditional cooking techniques with linked recipes.",
    difficulty: "Medium",
    path: "/techniques",
  },
  {
    id: 8,
    icon: "🌶️",
    title: "Spice Guide & Flavor Profiles",
    desc: "Spice explorer cards showing flavor profile, health properties and regional usage.",
    difficulty: "Medium",
    path: "/spices",
  },
  {
    id: 9,
    icon: "⏳",
    title: "Historical Food Timeline",
    desc: "Horizontally scrollable timeline grouping Indian dishes by historical era.",
    difficulty: "Medium",
    path: "/timeline",
  },
  {
    id: 10,
    icon: "🏺",
    title: "Endangered Recipes Archive",
    desc: "Archive highlighting at-risk recipes with a Flag as Endangered button.",
    difficulty: "Easy",
    path: "/endangered",
  },
  {
    id: 11,
    icon: "🥗",
    title: "Dietary Filter Explorer",
    desc: "Multi-select filter bar for Jain, Vegan, Sattvic and Gluten-Free recipes.",
    difficulty: "Easy",
    path: "/dietary",
  },
  {
    id: 12,
    icon: "💬",
    title: "Community Food Stories",
    desc: "Stories feed of personal food memories linked to dishes with a submission form.",
    difficulty: "Easy",
    path: "/stories",
  },
  {
    id: 13,
    icon: "🔤",
    title: "Multilingual Recipe Support",
    desc: "Language selector to browse recipes in Tamil, Bengali, Marathi and Hindi.",
    difficulty: "Easy",
    path: "/multilingual",
  },
  {
    id: 14,
    icon: "👨‍🍳",
    title: "Chef & Cook Spotlights",
    desc: "Spotlight gallery of home cooks with profiles showing their contributed recipes.",
    difficulty: "Easy",
    path: "/chefs",
  },
  {
    id: 15,
    icon: "🪔",
    title: "Food & Religion Module",
    desc: "Religion filter page showing associated recipes and cultural food context.",
    difficulty: "Medium",
    path: "/religion",
  },
];

const DIFF_STYLE = {
  Easy:   { background: "#0d2b0d", color: "#4ade80" },
  Medium: { background: "#2b1800", color: "#fb923c" },
  Hard:   { background: "#2b0000", color: "#f87171" },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-glow" />
        <p className="hero-eyebrow">Open Source · Culture Domain</p>
        <h1 className="hero-title">
          The Knowledge of<br />
          <span className="hero-accent">Flavours</span>
        </h1>
        <p className="hero-sub">
          A community-driven platform preserving India's culinary heritage
          across states, languages and generations.
        </p>
        <div className="hero-stats">
          <div className="stat"><span>15</span>Features</div>
          <div className="stat-rule" />
          <div className="stat"><span>8</span>Teams</div>
          <div className="stat-rule" />
          <div className="stat"><span>1</span>Repo</div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="features">
        <div className="features-header">
          <span className="section-label">Set 1 — Explore & Discover</span>
          <h2 className="section-title">Your features to build</h2>
        </div>
        <div className="grid">
          {FEATURES.map((f) => (
            <div
              key={f.id}
              className="card"
              onClick={() => navigate(f.path)}
            >
              <div className="card-top">
                <span className="card-icon">{f.icon}</span>
                <div className="card-badges">
                  <span className="badge-team">{f.team}</span>
                  <span className="badge-diff" style={DIFF_STYLE[f.difficulty]}>
                    {f.difficulty}
                  </span>
                </div>
              </div>
              <div className="card-num">Feature {f.id}</div>
              <h3 className="card-title">{f.title}</h3>
              <p className="card-desc">{f.desc}</p>
              <div className="card-cta">Start building →</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Locked Set 2 ── */}
      <section className="locked">
        <div className="locked-box">
          <div className="lock-icon">🔒</div>
          <h2 className="locked-title">Set 2 — Engage & Contribute</h2>
          <p className="locked-desc">
            15 more features revealed once Set 1 is complete.
          </p>
          <div className="locked-pills">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="locked-pill">Feature {i + 16}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">🌶️ RasaVeda · Open Source Event · Culture Domain</footer>
    </div>
  );
}
