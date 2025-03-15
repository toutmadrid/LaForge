// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation de tes pages
import Home from './Pages/Home';
import Marketplace from './Pages/Marketplace';
import ProductDetail from './Pages/ProductDetail';
import Dashboard from './Pages/Dashboard';
import SupplierDashboard from './Pages/SupplierDashboard';
import Checkout from './Pages/checkout';
import ContractManagement from './Pages/ContratManagement';
import DisputeManagement from './Pages/DisputeManagement';
import BlogPage from './Pages/BlogPage';
import AboutContactPage from './Pages/AboutContactPage';
import FAQAndLegalPage from './Pages/FAQAndLegalPage';
import AdminDashboard from './Pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/produit/:id" element={<ProductDetail />} />
        <Route path="/espace-utilisateur" element={<Dashboard />} />
        <Route path="/espace-fournisseur" element={<SupplierDashboard />} />
        <Route path="/panier" element={<Checkout />} />
        <Route path="/gestion-contrats" element={<ContractManagement />} />
        <Route path="/gestion-litiges" element={<DisputeManagement />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/a-propos-contact" element={<AboutContactPage />} />
        <Route path="/faq-mentions-legales" element={<FAQAndLegalPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
