import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";

export default function TechniquesWiki() {
  return (
    <div className="feature-page">
      <h1>Cooking Techniques Wiki</h1>

      <div className="todo-box">
        <p>Wiki-style listing + detail view</p>
      </div>

      <div className="placeholder">📚 TechniqueList</div>
      <div className="placeholder">📄 TechniqueDetail</div>
    </div>
  );
}