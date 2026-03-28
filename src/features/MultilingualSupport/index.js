import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";

export default function MultilingualSupport() {
  return (
    <div className="feature-page">
      <h1>Multilingual Recipe Support</h1>

      <div className="todo-box">
        <p>Language toggle filtering</p>
      </div>

      <div className="placeholder">🌐 LanguageSelector</div>
      <div className="placeholder">🍽️ RecipeList</div>
    </div>
  );
}