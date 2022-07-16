import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-home">
      <div className="navbar-title">TalenQ Task </div>
      <button
        type="button" className=" custom-btn"
        onClick={() => window.location.reload()}
      >
        <Link to="/" className="custom-link-btn">
          Home
        </Link>
      </button>
      
    </nav>
  );
}
