import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function StreetFoodDirectory() {
  /*
=========================================================
 FEATURE: Street Food Directory
=========================================================

 GOAL:
Display searchable list of street food items.

---------------------------------------------------------
 REQUIREMENTS:
1. Fetch data from API (/street-food)
2. Display cards with:
   - image
   - name
3. Add search bar

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Fetch data

STEP 2 — Create search state

STEP 3 — Filter data using search

STEP 4 — Render cards

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ Search bar works
✔ Cards display food + image

---------------------------------------------------------
 DO NOT:
- Implement image upload
=========================================================
*/
  return (
    <div className="page">
      <div className="page-header">
        <Link to="/" className="page-back">← Back to Home</Link>
        <h1 className="page-title">Street Food Directory</h1>
        <p className="page-sub">Discover iconic Indian street foods from every city and region.</p>
      </div>
      <div className="todo-banner">
        <strong>TODO — Your task</strong>
        Design a searchable card grid filterable by region and city. Each card shows dish name, city of origin and a photo. Connect to the API to fetch real street food data.
      </div>
      <div style={{display:"flex",gap:10,marginBottom:"1.5rem"}}>
  <input placeholder="Search street food..." style={{flex:1,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,153,51,0.15)",borderRadius:999,padding:"8px 16px",fontSize:"0.82rem",color:"#f5e6cc",outline:"none"}} />
  <div className="filter-bar" style={{margin:0}}>
    {["Mumbai","Delhi","Kolkata"].map(c => <button key={c} className="filter-btn">{c}</button>)}
  </div>
</div>
<div className="grid">
  {[
    {icon:"🥘",name:"Vada Pav",city:"Mumbai",price:"₹15"},
    {icon:"🥗",name:"Pani Puri",city:"Pan India",price:"₹20"},
    {icon:"🍢",name:"Kathi Roll",city:"Kolkata",price:"₹40"},
    {icon:"🫓",name:"Chole Bhature",city:"Delhi",price:"₹60"},
    {icon:"🥟",name:"Momos",city:"Delhi",price:"₹50"},
    {icon:"🧆",name:"Medu Vada",city:"Chennai",price:"₹25"},
  ].map(f => (
    <div key={f.name} className="card">
      <div className="card-img">{f.icon}</div>
      <div className="card-body">
        <div className="card-title">{f.name}</div>
        <div className="card-sub">{f.city}</div>
        <span className="tag">{f.price}</span>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}
