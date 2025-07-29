import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ArrayObjects from './components/ArrayObjects.jsx'

createRoot(document.getElementById('root')).render(
  <ArrayObjects></ArrayObjects>,
)
