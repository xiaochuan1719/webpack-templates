import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './styles/global.less';

const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
