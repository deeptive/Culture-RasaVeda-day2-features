import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function MultilingualSupport() {
  /*
=========================================================
 FEATURE: Multilingual Recipe Support
=========================================================

 GOAL:
Browse recipes filtered by language.

---------------------------------------------------------
 REQUIREMENTS:
1. Static recipes array with a language field
2. Language selector buttons: All, Tamil, Bengali, Marathi, Hindi
3. Clicking a language filters the recipe cards
4. Each card shows a language badge

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Create recipes array with language field
STEP 2 — Add useState for selectedLanguage
STEP 3 — Filter recipes by selectedLanguage
STEP 4 — Render language selector buttons
STEP 5 — Render recipe cards with language badge

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ Language buttons visible
✔ Clicking a language filters recipes
✔ Each recipe card shows a language badge

---------------------------------------------------------
 DO NOT:
- Integrate any translation API
=========================================================
*/
  return (
    <div className="feature-page">
      <Link to="/" className="page-back">← Back</Link>
      <h1>Multilingual Recipe Support</h1>

      <div className="todo-box">
        <p>Language selector + filtered recipe cards with language badge</p>
      </div>

      <div className="placeholder">🔤 LanguageSelector (All / TA / BN / MR / HI)</div>
      <div className="placeholder">🃏 RecipeCards with language badge</div>
    </div>
  );
}