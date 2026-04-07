import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function ReligionModule() {
  /*
=========================================================
 FEATURE: Food & Religion Module
=========================================================

 GOAL:
Show traditional recipes associated with each religion.

---------------------------------------------------------
 REQUIREMENTS:
1. Static religions array: Hindu, Muslim, Jain, Sikh, Christian
2. Each religion has: name, emoji, context (short description), recipes[]
3. Religion filter buttons at the top
4. Clicking shows context text + associated recipe cards

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Create religions array with name, emoji, context, recipes[]
STEP 2 — Add useState for selectedReligion (default first one)
STEP 3 — Render religion filter buttons
STEP 4 — Show context banner for selected religion
STEP 5 — Render recipe cards for selected religion

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ Religion buttons visible
✔ Context text updates on selection
✔ Recipe cards update on selection

---------------------------------------------------------
 DO NOT:
- Make API calls
=========================================================
*/
  return (
    <div className="feature-page">
      <Link to="/" className="page-back">← Back</Link>
      <h1>Food & Religion Module</h1>

      <div className="todo-box">
        <p>Religion filter buttons + context banner + recipe cards</p>
      </div>

      <div className="placeholder">🕉️ ReligionFilterBar</div>
      <div className="placeholder">📜 ContextBanner</div>
      <div className="placeholder">🃏 RecipeCards</div>
    </div>
  );
}