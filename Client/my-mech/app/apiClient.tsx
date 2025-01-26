// src/utils/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:8080", // Replace with your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (optional for adding tokens)
apiClient.interceptors.request.use((config) => {
  // Example: Add authorization header if token exists
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
