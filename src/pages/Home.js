import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const FEATURES = [
  {
    id: 1,
    icon: "🤖",
    title: "AI-Powered Suggestions",
    desc: "A similarity-engine using ingredient counts and regional bonuses to suggest 'You May Also Like' dishes.",
    difficulty: "Hard",
    path: "/ai-suggestions",
  },
  {
    id: 2,
    icon: "🏆",
    title: "Contributor Leaderboard",
    desc: "Ranked list with state/type filters and gold/silver/bronze highlights for top cultural contributors.",
    difficulty: "Easy",
    path: "/leaderboard",
  },
  {
    id: 3,
    icon: "🔄",
    title: "Cross-Culture Tool",
    desc: "Side-by-side dish comparison table highlighting matching attributes in green and differences in red.",
    difficulty: "Medium",
    path: "/cross-culture",
  },
  {
    id: 4,
    icon: "📊",
    title: "Dataset Export",
    desc: "Convert static recipe arrays into downloadable JSON blobs and CSV strings with version history.",
    difficulty: "Medium",
    path: "/export",
  },
  {
    id: 5,
    icon: "⚖️",
    title: "Debate & Dispute Board",
    desc: "Community threads for dish claims with reply forms, citations, and moderator resolution notes.",
    difficulty: "Medium",
    path: "/debate",
  },
  {
    id: 6,
    icon: "🏅",
    title: "Heritage Badges",
    desc: "Gamified profile system that auto-awards badges based on contribution score thresholds.",
    difficulty: "Medium",
    path: "/badges",
  },
  {
    id: 7,
    icon: "🐛",
    title: "Cultural Issue Tracker",
    desc: "Flag inaccuracies via category dropdowns and description fields for moderator review.",
    difficulty: "Medium",
    path: "/issues",
  },
  {
    id: 8,
    icon: "📸",
    title: "Media Contribution",
    desc: "Gallery module supporting image/video object URLs with a built-in lightbox viewer.",
    difficulty: "Medium",
    path: "/media-upload",
  },
  {
    id: 9,
    icon: "🌐",
    title: "Multilingual Support",
    desc: "Translator dashboard for picking pending recipes and submitting regional script versions.",
    difficulty: "Medium",
    path: "/multilingual",
  },
  {
    id: 10,
    icon: "🍎",
    title: "Nutrition Mapper",
    desc: "Ingredient-to-nutrient database that scales calories and macros based on serving size.",
    difficulty: "Medium",
    path: "/nutrition",
  },
  {
    id: 11,
    icon: "🔌",
    title: "Open Recipe API",
    desc: "Expandable endpoint documentation with request/response examples and fake API key generation.",
    difficulty: "Hard",
    path: "/api-docs",
  },
  {
    id: 12,
    icon: "✍️",
    title: "Submission Portal",
    desc: "3-step multi-part form (Info, Ingredients, Steps) for adding recipes to a pending local list.",
    difficulty: "Medium",
    path: "/submit-recipe",
  },
  {
    id: 13,
    icon: "🔀",
    title: "Substitution Engine",
    desc: "Modal-based ingredient alternative tool with context notes and a community suggestion form.",
    difficulty: "Medium",
    path: "/substitutions",
  },
  {
    id: 14,
    icon: "🏷️",
    title: "Culture Tagging System",
    desc: "Admin tag creation form with clickable pills that filter the main recipe grid dynamically.",
    difficulty: "Medium",
    path: "/tags",
  },
  {
    id: 15,
    icon: "📜",
    title: "Recipe Version Control",
    desc: "Snapshot-based editing system that saves recipe states for side-by-side diff comparisons.",
    difficulty: "Hard",
    path: "/history",
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
        <p className="hero-eyebrow">Open Source · Phase 2 Development</p>
        <h1 className="hero-title">
          The Engineering of <br />
          <span className="hero-accent">Culinary Culture</span>
        </h1>
        <p className="hero-sub">
          Preserving India's heritage through logic and code. Build advanced modules 
          for comparison, gamification, and data integrity.
        </p>
        <div className="hero-stats">
          <div className="stat"><span>15</span>Modules</div>
          <div className="stat-rule" />
          <div className="stat"><span>Set 2</span>Active</div>
          <div className="stat-rule" />
          <div className="stat"><span>No API</span>Local Logic</div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="features">
        <div className="features-header">
          <span className="section-label">Development Roadmap — Set 2</span>
          <h2 className="section-title">Engage & Contribute Features</h2>
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
                  <span className="badge-diff" style={DIFF_STYLE[f.difficulty]}>
                    {f.difficulty}
                  </span>
                </div>
              </div>
              <div className="card-num">Feature {f.id}</div>
              <h3 className="card-title">{f.title}</h3>
              <p className="card-desc">{f.desc}</p>
              <div className="card-cta">Implement Logic →</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        🌶️ RasaVeda · Built at Cummins College · No External API Architecture
      </footer>
    </div>
  );
}