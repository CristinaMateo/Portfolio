import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n.js'; // Importar el archivo de configuración de i18next
import App from './App.jsx'
import '../src/styles/styles.scss'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
)
