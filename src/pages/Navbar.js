import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    height: 60,
    background: "#1a0800",
    borderBottom: "1px solid rgba(255,153,51,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
  },
  brandName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#FF9933",
  },
  links: { display: "flex", gap: "1.5rem" },
  link: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.6)",
    textDecoration: "none",
  },
};

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>
        <span style={{ fontSize: "1.4rem" }}>🌶️</span>
        <span style={styles.brandName}>RasaVeda</span>
      </Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/recipes" style={styles.link}>Recipes</Link>
        <Link to="/map" style={styles.link}>Map</Link>
        <Link to="/festivals" style={styles.link}>Festivals</Link>
      </div>
    </nav>
  );
}
