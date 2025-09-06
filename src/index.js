import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 如果你有 CSS

const App = () => <h1>🎰 Casino App Ready!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
