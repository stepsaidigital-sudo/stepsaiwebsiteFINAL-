import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { SalesAgent } from './pages/SalesAgent';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<SalesAgent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
