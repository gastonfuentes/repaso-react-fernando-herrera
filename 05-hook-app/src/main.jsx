/* import React from 'react' */
import ReactDOM from 'react-dom/client'
import './index.css'
/* import { HooksApp } from './HooksApp.jsx' */
/* import { CounterApp } from './01-useState/CounterApp.jsx' */
/* import { CounterWhithCustomHook } from './01-useState/CounterWhithCustomHook.jsx' */
/* import { SimpleForm } from './02-useEffect/SimpleForm.jsx' */
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>   
  <FormWithCustomHook />
  //</React.StrictMode>,
)
