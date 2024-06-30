import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (typeof window!== 'undefined' && document.getElementById('root')) {
  const rootElement = document.getElementById('root');

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}