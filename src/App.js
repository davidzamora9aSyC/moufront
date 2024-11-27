import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ArticuloFondoDePension from './pages/ArticuloFondoDePension';
import Footer from './components/Footer';
import ArticuloFondoDeInversion from './pages/ArticuloFondoDeInversion';
import ArticuloCDT from './pages/ArticuloCDT';
import ArticuloFondoPensionObligatoria from './pages/ArticuloFondoDePensionObligatoria';
import LoggedHome from './pages/LoggedHome';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth0 } from "@auth0/auth0-react";
import InvestmentPage from './pages/Crear/InvestmentPage';
import NationalInvestmentOptions from './pages/Crear/ConoceOportunidadesNacionales';
import FondosListados from './pages/Crear/FondosListados';
import IntegratedDashboard from './components/Dashboards/IntegratedDashboard';
import RetirementPage from './pages/Crear/RetirementPage';
import RetirementListedFunds from './pages/Crear/RetirementListedFunds';
import CDsPage from './pages/Crear/CDsPage';
import ListedCDs from './pages/Crear/ListedCDs';

const domain = "mou-management.us.auth0.com";
const clientId = "Mxqzv2au4wBRkmvPMUrKCpTiRoBWtm9B";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin + "/logged-home"
      }}
      cacheLocation="localstorage"
    >
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-fondo-pension" element={<ArticuloFondoDePension />} />
              <Route path="/about-fondo-inversion" element={<ArticuloFondoDeInversion />} />
              <Route path="/about-CDT" element={<ArticuloCDT />} />
              <Route path="/about-fondo-pension-obligatoria" element={<ArticuloFondoPensionObligatoria />} />
              <Route path="/logged-home" element={<ProtectedRoute><LoggedHome /></ProtectedRoute>} />
              <Route path="/create-fondo-inversion" element={<ProtectedRoute><InvestmentPage /></ProtectedRoute>} />
              <Route path="/create-retirement-funds" element={<ProtectedRoute><RetirementPage /></ProtectedRoute>} />
              <Route path="/create-CDs" element={<ProtectedRoute><CDsPage /></ProtectedRoute>} />
              <Route path="/national-funds" element={<ProtectedRoute><NationalInvestmentOptions /></ProtectedRoute>} />
              <Route path="/national-funds/:id" element={<ProtectedRoute><FondosListados /></ProtectedRoute>} />
              <Route path="/national-funds/:id/:fondoName" element={<ProtectedRoute><IntegratedDashboard type={"Inversion"} acquired={false} /></ProtectedRoute>} />
              <Route path="/retirement-funds" element={<ProtectedRoute><RetirementListedFunds /></ProtectedRoute>} />
              <Route path="/retirement-funds/:fondoName" element={<ProtectedRoute><IntegratedDashboard type={"Pension"} acquired={false} /></ProtectedRoute>} />
              <Route path="/CDTs" element={<ProtectedRoute><ListedCDs /></ProtectedRoute>} />
              <Route path="/CDTs/:Name" element={<ProtectedRoute><IntegratedDashboard type={"CDT"} acquired={false} /></ProtectedRoute>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
