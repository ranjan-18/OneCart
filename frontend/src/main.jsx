import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ missing import

import './index.css';
import App from './App.jsx';
import AuthContext from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthContext>
     <App />
   </AuthContext>
  </BrowserRouter>
);
