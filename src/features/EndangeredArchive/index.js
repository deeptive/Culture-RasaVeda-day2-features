import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";

export default function EndangeredArchive() {
  return (
    <div className="feature-page">
      <h1>Endangered Recipes Archive</h1>

      <div className="todo-box">
        <p>Show rare recipes with flag UI</p>
      </div>

      <div className="placeholder">📦 ArchiveList</div>
      <div className="placeholder">🚩 Flag Button</div>
    </div>
  );
}