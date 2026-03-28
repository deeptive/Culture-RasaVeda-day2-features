import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// To make API calls: import api from "../../api";

export default function FestivalCalendar() {
  return (
    <div className="page">
      <div className="page-header">
        <Link to="/" className="page-back">← Back to Home</Link>
        <h1 className="page-title">Festival Food Calendar</h1>
        <p className="page-sub">Explore traditional foods associated with festivals across India throughout the year.</p>
      </div>
      <div className="todo-banner">
        <strong>TODO — Your task</strong>
        Integrate a calendar library like react-calendar. Mark festival dates. When a date is clicked show food cards for that festival. Fetch festival data from the API.
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
  <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,153,51,0.1)",borderRadius:14,overflow:"hidden"}}>
    <div style={{background:"#c0392b",padding:"10px 16px",display:"flex",justifyContent:"space-between"}}>
      <span style={{color:"#fff",fontWeight:500}}>October 2024</span>
      <span style={{color:"rgba(255,255,255,0.6)"}}>‹ ›</span>
    </div>
    <div style={{padding:16,display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4}}>
      {["S","M","T","W","T","F","S"].map((d,i) => <div key={i} style={{textAlign:"center",fontSize:"0.7rem",color:"rgba(240,230,211,0.35)",paddingBottom:6}}>{d}</div>)}
      {Array.from({length:31},(_,i) => <div key={i} style={{textAlign:"center",fontSize:"0.78rem",padding:"4px 2px",borderRadius:6,background:i===12||i===19?"rgba(255,153,51,0.15)":"transparent",color:i===12||i===19?"#FF9933":"rgba(240,230,211,0.5)"}}>{i+1}</div>)}
    </div>
  </div>
  <div>
    <div style={{fontSize:"0.75rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,153,51,0.5)",marginBottom:12}}>Diwali — Traditional Dishes</div>
    {[["🍬","Kaju Katli","Sweet"],["🥛","Kheer","Dessert"],["🧆","Besan Ladoo","Sweet"]].map(([e,n,t]) => (
      <div key={n} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,153,51,0.1)",borderRadius:10,marginBottom:8}}>
        <span style={{fontSize:"1.5rem"}}>{e}</span>
        <div><div style={{fontSize:"0.85rem",color:"#f5e6cc"}}>{n}</div><span className="tag" style={{marginTop:4,display:"inline-block"}}>{t}</span></div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}
