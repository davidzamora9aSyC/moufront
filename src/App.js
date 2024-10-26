// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ArticuloFondoDePension from './pages/ArticuloFondoDePension';
import Footer from './components/Footer';
import ArticuloFondoDeInversion from './pages/ArticuloFondoDeInversion';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-fondo-pension" element={<ArticuloFondoDePension />} />
        <Route path="/about-fondo-inversion" element={<ArticuloFondoDeInversion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
