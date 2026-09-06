import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api"
});

/* ================= AUTH ================= */

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

/* ================= ERROR HANDLING ================= */

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");

      if (window.location.pathname !== "/admin") {
        window.location.href = "/admin";
      }
    }

    return Promise.reject(error);
  }
);

/* ================= IMAGE URL ================= */

export const imageUrl = (path) => {
  if (!path) return "";

  /*
   * External image URL
   * Example:
   * https://images.unsplash.com/...
   */
  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    return path;
  }

  /*
   * Keep this for any old products
   * that may still have /uploads/... paths.
   */
  const apiBase =
    import.meta.env.VITE_API_URL || "";

  if (apiBase) {
    return `${apiBase.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  }

  return path;
};