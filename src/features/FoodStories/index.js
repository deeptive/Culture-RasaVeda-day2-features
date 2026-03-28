import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";

export default function FoodStories() {
  return (
    <div className="feature-page">
      <h1>Community Food Stories</h1>

      <div className="todo-box">
        <p>Social feed layout</p>
      </div>

      <div className="placeholder">💬 StoryFeed</div>
      <div className="placeholder">📝 StoryForm</div>
    </div>
  );
}