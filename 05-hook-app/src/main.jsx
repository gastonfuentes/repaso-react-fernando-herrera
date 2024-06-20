import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp.jsx'
/* import { CounterApp } from './01-useState/CounterApp.jsx' */
import { CounterWhithCustomHook } from './01-useState/CounterWhithCustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    <CounterWhithCustomHook />
  </React.StrictMode>,
)
