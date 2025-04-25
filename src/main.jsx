import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

// Wrap the whole app with BrowserRouter here
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap App component in BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
