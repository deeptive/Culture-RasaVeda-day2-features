import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";

export default function IngredientTracker() {
  return (
    <div className="page">
      <div className="page-header">
        <Link to="/" className="page-back">← Back to Home</Link>
        <h1 className="page-title">Ingredient Origins Tracker</h1>
        <p className="page-sub">Explore where each Indian ingredient comes from, its health properties and which recipes it appears in.</p>
      </div>
      <div className="todo-banner">
        <strong>TODO — Your task</strong>
        Design an ingredient listing page and a detail page. The detail page should show origin region, health properties, spice type and link to recipes containing that ingredient.
      </div>
      <div className="filter-bar">
  {["All","Spices","Grains","Herbs","Dairy"].map(t => (
    <button key={t} className="filter-btn">{t}</button>
  ))}
</div>
<div className="grid">
  {[
    { icon:"🌶️", name:"Red Chilli", origin:"Andhra Pradesh", type:"Spice" },
    { icon:"🟡", name:"Turmeric", origin:"Kerala", type:"Spice" },
    { icon:"🌿", name:"Curry Leaf", origin:"South India", type:"Herb" },
    { icon:"⚫", name:"Black Pepper", origin:"Karnataka", type:"Spice" },
    { icon:"🟤", name:"Cardamom", origin:"Kerala", type:"Spice" },
    { icon:"🟠", name:"Saffron", origin:"Kashmir", type:"Spice" },
  ].map(i => (
    <div key={i.name} className="card">
      <div className="card-img">{i.icon}</div>
      <div className="card-body">
        <div className="card-title">{i.name}</div>
        <div className="card-sub">{i.origin}</div>
        <span className="tag">{i.type}</span>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}
