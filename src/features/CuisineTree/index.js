import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";

export default function CuisineTree() {
  return (
    <div className="feature-page">
      <h1>Cuisine Family Tree</h1>

      <div className="todo-box">
        <p>Interactive tree showing relationships</p>
      </div>

      <div className="placeholder">🌳 TreeView</div>
      <div className="placeholder">📌 InfoPanel</div>
    </div>
  );
}
