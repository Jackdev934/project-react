// src/config.js

// 👇 change this to your REAL Render URL
const PROD_BACKEND_URL = "https://project-backend-fl7h.onrender.com";

const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? PROD_BACKEND_URL         // when built & deployed
    : "http://localhost:3001"; // when running npm start locally

export default BACKEND_URL;
