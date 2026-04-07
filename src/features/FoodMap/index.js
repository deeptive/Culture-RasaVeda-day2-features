import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function FoodMap() {
  /*
=========================================================
 FEATURE: Interactive Food Map of India
=========================================================

 GOAL:
Click a state name to see its signature dishes.

---------------------------------------------------------
 REQUIREMENTS:
1. Static list of states with associated dishes
2. Clicking a state highlights it and shows its dishes
3. Two panel layout — state list on left, dishes on right

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Create states array, each with dishes[]
STEP 2 — Add useState for selectedState
STEP 3 — Render clickable state buttons on left panel
STEP 4 — Render dish cards for selectedState on right panel

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ List of states visible on left
✔ Clicking a state shows its dishes on the right
✔ Selected state is highlighted

---------------------------------------------------------
 DO NOT:
- Use D3 or maps library (keep it simple — buttons are fine)
=========================================================
*/
  return (
    <div className="feature-page">
      <Link to="/" className="page-back">← Back</Link>
      <h1>Interactive Food Map of India</h1>

      <div className="todo-box">
        <p>Two panel layout — state list left, dish cards right</p>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <div className="placeholder" style={{ width: 200 }}>🗺️ StateList</div>
        <div className="placeholder" style={{ flex: 1 }}>🃏 DishCards</div>
      </div>
    </div>
  );
}