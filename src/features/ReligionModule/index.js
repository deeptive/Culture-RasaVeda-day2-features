import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";
export default function ReligionModule() {
  return (
    <div className="feature-page">
      <h1>Food & Religion Module</h1>

      <div className="todo-box">
        <p>Filter recipes by religion</p>
      </div>

      <div className="placeholder">🪔 ReligionFilter</div>
      <div className="placeholder">🍽️ RecipeList</div>
    </div>
  );
}