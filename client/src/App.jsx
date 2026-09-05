
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ExportInfo from "./pages/ExportInfo";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const location = useLocation();

  // Hide ONLY the footer on admin pages
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      <Header />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/export-info"
            element={<ExportInfo />}
          />

          <Route
            path="/certifications"
            element={<Certifications />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/admin"
            element={<AdminLogin />}
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>

      {!isAdminPage && <Footer />}
    </>
  );
}

