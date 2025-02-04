// components/Loading.js
import React from "react";
import "./Loading.css"; // We'll create this CSS file next

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
}