import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from "./components/First.jsx"
import Second from "./components/Second.jsx"
import Parent from "./components/Parent.jsx"
import Parent1 from "./components/Parent1.jsx"
import Parent2 from "./components/Parent2.jsx"

createRoot(document.getElementById('root')).render(
  <Parent2></Parent2>,
)
