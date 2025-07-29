import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ControlledComponent from './components/ControlledComponent.jsx'
import EnhancedComponent from './components/EnhancedComponent.jsx'
import Comp1 from './components/Comp1.jsx'

createRoot(document.getElementById('root')).render(
  <Comp1></Comp1>,
)
