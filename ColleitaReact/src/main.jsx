import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*
import { createRoot } from 'react-dom/client';
import i18next from './i18n'
i18next.t('my.key')

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)