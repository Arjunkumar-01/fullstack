import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from './components/First.jsx';

createRoot(document.getElementById('root')).render(
  <First></First>,
)
