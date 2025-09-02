import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Earth from "./pages/Earth.tsx";

import "./index.css";
import "./styles/navBar.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/pic-of-day" replace />} />
          <Route path="/pic-of-day" element={<App />} />
          <Route path="/earth" element={<Earth />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
