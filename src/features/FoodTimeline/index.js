import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";

export default function FoodTimeline() {
  return (
    <div className="feature-page">
      <h1>Historical Food Timeline</h1>

      <div className="todo-box">
        <p>Scrollable timeline grouped by era</p>
      </div>

      <div className="placeholder">⏳ Timeline</div>
      <div className="placeholder">🍽️ DishCard</div>
    </div>
  );
}