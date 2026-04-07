import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function FoodTimeline() {
  /*
=========================================================
 FEATURE: Historical Food Timeline
=========================================================

 GOAL:
Show Indian food history grouped by era on a timeline.

---------------------------------------------------------
 REQUIREMENTS:
1. Static array of eras with: year, era, dish, description
2. Horizontal scrollable timeline layout
3. Each node shows year, era name, dish and description

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Create eras array with sample data
         Example: { year: "2600 BC", era: "Indus Valley", dish: "🫙", desc: "..." }
STEP 2 — Render a horizontal scrollable container
STEP 3 — For each era render a timeline node with a dot connector

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ Timeline scrolls horizontally
✔ Each node shows year, era, dish emoji and short description
✔ Dots connected by a horizontal line

---------------------------------------------------------
 DO NOT:
- Use any timeline library
=========================================================
*/
  return (
    <div className="feature-page">
      <Link to="/" className="page-back">← Back</Link>
      <h1>Historical Food Timeline</h1>

      <div className="todo-box">
        <p>Horizontally scrollable timeline with era nodes</p>
      </div>

      <div className="placeholder">⏳ HorizontalTimeline</div>
    </div>
  );
}