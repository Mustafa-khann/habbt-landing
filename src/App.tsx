import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService';
import { Analytics } from "@vercel/analytics/react";
import DeleteData from './pages/DeleteData';
import DeleteAccount from './pages/DeleteAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/delete-data" element={<DeleteData />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
      <Analytics />
    </Router>
  )
}

export default App
