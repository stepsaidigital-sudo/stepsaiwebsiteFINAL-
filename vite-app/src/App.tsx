import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { IndustryEcommerce } from './pages/IndustryEcommerce';
import { Pricing } from './pages/Pricing';

/**
 * Phase 1 proof-of-pattern: only these 3 representative pages are ported
 * (see VITE_TS_PHASE1_PLAN.md §3). Everything else stays on the existing
 * static HTML site until phase 2.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pricing" replace />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/industry-ecommerce" element={<IndustryEcommerce />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
