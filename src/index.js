import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { NavProvider } from './context/NavContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <NavProvider>
        <App />
      </NavProvider>
    </HashRouter>
  </React.StrictMode>
);
