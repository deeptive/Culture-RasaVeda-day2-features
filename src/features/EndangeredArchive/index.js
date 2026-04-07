import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function EndangeredArchive() {
  /*
=========================================================
 FEATURE: Endangered Recipes Archive
=========================================================

 GOAL:
Show recipes marked as endangered with a warning banner.

---------------------------------------------------------
 REQUIREMENTS:
1. Static dataset of recipes with isEndangered: true
2. Warning banner at the top
3. Each card shows name, region, and a "Contribute" button

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Create recipes array, set isEndangered: true on some
STEP 2 — Filter only endangered recipes
STEP 3 — Render warning banner
STEP 4 — Render endangered recipe cards

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ Warning banner visible
✔ Only endangered recipes shown
✔ Contribute button on each card

---------------------------------------------------------
 DO NOT:
- Make API calls
=========================================================
*/
  return (
    <div className="feature-page">
      <Link to="/" className="page-back">← Back</Link>
      <h1>Endangered Recipes Archive</h1>

      <div className="todo-box">
        <p>Warning banner + endangered recipe cards with Contribute button</p>
      </div>

      <div className="placeholder">⚠️ WarningBanner</div>
      <div className="placeholder">🃏 EndangeredRecipeCards</div>
    </div>
  );
}