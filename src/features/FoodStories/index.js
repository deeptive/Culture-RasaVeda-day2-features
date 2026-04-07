import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function FoodStories() {
  /*
=========================================================
 FEATURE: Community Food Stories
=========================================================

 GOAL:
Display food memory stories and allow new submissions.

---------------------------------------------------------
 REQUIREMENTS:
1. Static array of stories with author, region, dish, content
2. Stories feed showing all entries
3. Submission form: author name, region, dish, story text
4. On submit, add new story to the top of the feed

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Create stories array with sample data
STEP 2 — Add useState for stories and form fields
STEP 3 — Render story cards
STEP 4 — Render submission form
STEP 5 — On form submit, prepend new story to array

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ Story cards visible with author and dish name
✔ Form fields work
✔ Submitting adds a new story to the feed

---------------------------------------------------------
 DO NOT:
- Make API calls
=========================================================
*/
  return (
    <div className="feature-page">
      <Link to="/" className="page-back">← Back</Link>
      <h1>Community Food Stories</h1>

      <div className="todo-box">
        <p>Stories feed + submission form that adds to the list</p>
      </div>

      <div className="placeholder">📖 StoryCards</div>
      <div className="placeholder">📝 SubmissionForm</div>
    </div>
  );
}