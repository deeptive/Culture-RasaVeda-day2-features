import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";
export default function ChefSpotlights() {
  return (
    <div className="feature-page">
      <h1>Chef & Cook Spotlights</h1>

      <div className="todo-box">
        <p>Profile cards + recipes</p>
      </div>

      <div className="placeholder">👨‍🍳 ChefGrid</div>
      <div className="placeholder">📄 ChefProfile</div>
    </div>
  );
}