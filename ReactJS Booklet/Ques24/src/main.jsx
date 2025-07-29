import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Third from './components/Third.jsx'

createRoot(document.getElementById('root')).render(
  <Third></Third>,
)
