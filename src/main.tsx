import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Racine du DOM
const rootElement = document.getElementById('root');

// Vérifiez si l'élément root existe avant de continuer
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  // StrictMode pour détecter les problèmes potentiels
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element. The application could not be rendered.');
}
