import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Socket from './componets/socket'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Socket />
  </React.StrictMode>,
)
