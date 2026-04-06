import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function TechniquesWiki() {
  /*
=========================================================
 FEATURE: Cooking Techniques Wiki
=========================================================

 GOAL:
Display cooking techniques in a wiki-style page.

---------------------------------------------------------
 REQUIREMENTS:
1. Static dataset
2. Each technique has:
   - title
   - description

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Create data array

STEP 2 — Render list of techniques

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ List of techniques visible
✔ Clean readable layout

---------------------------------------------------------
 DO NOT:
- Add CMS
=========================================================
*/
  return (
    <div className="feature-page">
      <h1>Cooking Techniques Wiki</h1>

      <div className="todo-box">
        <p>Wiki-style listing + detail view</p>
      </div>

      <div className="placeholder">📚 TechniqueList</div>
      <div className="placeholder">📄 TechniqueDetail</div>
    </div>
  );
}