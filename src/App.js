// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ArticuloFondoDePension from './pages/ArticuloFondoDePension';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-fondo-pension" element={<ArticuloFondoDePension />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
