import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function SpiceGuide() {
  /*
=========================================================
 FEATURE: Spice Guide & Flavor Profiles
=========================================================

 GOAL:
Display Indian spices with flavor profile and health info.

---------------------------------------------------------
 REQUIREMENTS:
1. Static spices array with: name, emoji, flavor, region, health
2. Filter buttons by flavor type: All, Warming, Cooling, Pungent
3. Each spice card shows emoji, name, flavor and region

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Create spices array
         Example: { name: "Turmeric", emoji: "🟡", flavor: "Cooling", region: "Kerala", health: "..." }
STEP 2 — Add useState for selectedFlavor
STEP 3 — Filter spices by selectedFlavor
STEP 4 — Render filter buttons
STEP 5 — Render spice cards

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ Spice cards visible with emoji and details
✔ Filter buttons update the visible cards
✔ Clicking a card shows health properties

---------------------------------------------------------
 DO NOT:
- Make API calls
=========================================================
*/
  return (
    <div className="feature-page">
      <Link to="/" className="page-back">← Back</Link>
      <h1>Spice Guide & Flavor Profiles</h1>

      <div className="todo-box">
        <p>Flavor filter bar + spice cards with health properties</p>
      </div>

      <div className="placeholder">🔘 FlavorFilterBar (All / Warming / Cooling / Pungent)</div>
      <div className="placeholder">🌶️ SpiceCards</div>
    </div>
  );
}