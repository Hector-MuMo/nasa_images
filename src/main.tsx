import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import NavBar from './components/NavBar.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

import './index.css'
import './styles/navBar.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/pic-of-day" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
