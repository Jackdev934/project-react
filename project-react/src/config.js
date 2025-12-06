// src/config.js

const PROD_BACKEND_URL = "https://project-backend-fl7h.onrender.com";

const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? PROD_BACKEND_URL
    : "http://localhost:3001";

export default BACKEND_URL;
