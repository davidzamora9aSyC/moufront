// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ArticuloFondoDeInversion from './pages/ArticuloFondoDeInversion';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-fondo-inversion" element={<ArticuloFondoDeInversion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
