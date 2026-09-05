import axios from "axios";

export const api = axios.create({
  baseURL: "/api"
});

// Automatically attach the JWT to every API request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle expired/invalid authentication
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");

      // Don't redirect if we're already on the login page
      if (window.location.pathname !== "/admin") {
        window.location.href = "/admin";
      }
    }

    return Promise.reject(error);
  }
);

export const imageUrl = (path) => {
  if (!path) return "";

  if (path.startsWith("http")) return path;

  return path;
};