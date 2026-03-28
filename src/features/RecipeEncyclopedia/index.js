import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./styles.css";

export default function RecipeEncyclopedia() {
  return (
    <div className="recipe-page">

      {/* Title */}
      <h1 className="title">Regional Recipe Encyclopedia</h1>

      {/* Instructions */}
      <div className="todo-box">
        <h3>TODO — YOUR TASK</h3>
        <p>
          Build a paginated recipe listing page with:
        </p>
        <ul>
          <li>Grid layout with recipe cards</li>
          <li>Filter bar (region, community, language, dietary)</li>
          <li>Pagination controls</li>
          <li>Recipe detail modal on click</li>
        </ul>
      </div>

      {/* FilterBar Placeholder */}
      <div className="placeholder">
        🔽 Filter Bar (to be implemented)
      </div>

      {/* Recipe List Placeholder */}
      <div className="placeholder">
        🧾 Recipe Grid (to be implemented)
      </div>

      {/* Pagination Placeholder */}
      <div className="placeholder">
        📄 Pagination Controls (to be implemented)
      </div>

    </div>
  );
}