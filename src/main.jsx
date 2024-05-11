import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './util/internationalization.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.Suspense fallback="loading...">
  <App />
  </React.Suspense>
    
  </>,
)
