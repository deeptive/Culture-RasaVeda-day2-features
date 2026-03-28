import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";
export default function SpiceGuide() {
  return (
    <div className="feature-page">
      <h1>Spice Guide & Flavor Profiles</h1>

      <div className="todo-box">
        <p>Card explorer with flavor filters</p>
      </div>

      <div className="placeholder">🌶️ SpiceGrid</div>
      <div className="placeholder">📋 SpiceDetail</div>
    </div>
  );
}