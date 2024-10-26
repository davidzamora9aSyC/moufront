// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ArticuloFondoDePension from './pages/ArticuloFondoDePension';
import Footer from './components/Footer';
import ArticuloFondoDeInversion from './pages/ArticuloFondoDeInversion';
import ArticuloCDT from './pages/ArticuloCDT';
import ArticuloFondoPensionObligatoria from './pages/ArticuloFondoDePensionObligatoria';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-fondo-pension" element={<ArticuloFondoDePension />} />
        <Route path="/about-fondo-inversion" element={<ArticuloFondoDeInversion />} />
        <Route path="/about-CDT" element={<ArticuloCDT />} />
        <Route path="/about-fondo-pension-obligatoria" element={<ArticuloFondoPensionObligatoria />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
