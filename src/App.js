import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Novedades from "./pages/Novedades";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="productos" element={<Productos />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="novedades" element={<Novedades />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
