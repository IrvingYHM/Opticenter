import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerSW} from 'virtual:pwa-register';
import { Analytics } from '@vercel/analytics/react';


//registra el service worker

const updateSW = registerSW({
  onNeedRefresh(){},
  onOfflineReady(){},
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />

  </React.StrictMode>,
)
