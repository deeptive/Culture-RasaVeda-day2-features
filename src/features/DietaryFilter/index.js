import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";

export default function DietaryFilter() {
  return (
    <div className="feature-page">
      <h1>Dietary Filter Explorer</h1>

      <div className="todo-box">
        <p>Multi-select filter system</p>
      </div>

      <div className="placeholder">🥗 FilterBar</div>
      <div className="placeholder">🍽️ RecipeList</div>
    </div>
  );
}
