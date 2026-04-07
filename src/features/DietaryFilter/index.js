import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function DietaryFilter() {
  /*
=========================================================
 FEATURE: Dietary Filter Explorer
=========================================================

 GOAL:
Filter recipes by dietary preference.

---------------------------------------------------------
 REQUIREMENTS:
1. Static dataset of recipes with dietaryTag field
2. Filter buttons: All, Jain, Vegan, Sattvic, Gluten-Free
3. Clicking a filter shows only matching recipes

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Create recipes array with dietaryTag field
STEP 2 — Add useState for selected filter
STEP 3 — Filter recipes based on selected tag
STEP 4 — Render filter buttons and recipe cards

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ Filter buttons visible
✔ Clicking a filter updates the recipe list
✔ "No results" message when no match

---------------------------------------------------------
 DO NOT:
- Make API calls
=========================================================
*/
  return (
    <div className="feature-page">
      <Link to="/" className="page-back">← Back</Link>
      <h1>Dietary Filter Explorer</h1>

      <div className="todo-box">
        <p>Multi-select filter bar + reactive recipe grid</p>
      </div>

      <div className="placeholder">🔘 FilterBar (All / Jain / Vegan / Sattvic / GF)</div>
      <div className="placeholder">🃏 RecipeGrid</div>
    </div>
  );
}
