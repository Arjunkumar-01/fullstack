import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from './components/First.jsx'
import State from './components/State.jsx'
import Parent from './components/Parent.jsx'
import Master from './components/Master.jsx'

createRoot(document.getElementById('root')).render(
  <Master></Master>,
)
