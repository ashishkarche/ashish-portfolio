import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
