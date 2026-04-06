import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function FoodMap() {
  return (
    <div className="feature-page">
      <h1>Interactive Food Map of India</h1>

      <div className="todo-box">
        <h3>TODO — YOUR TASK</h3>
        <p>Build an SVG India map with hover + side panel</p>
      </div>

      <div className="placeholder">🗺️ MapContainer</div>
      <div className="placeholder">📍 StateSVG</div>
      <div className="placeholder">📋 SidePanel</div>
    </div>
  );
}