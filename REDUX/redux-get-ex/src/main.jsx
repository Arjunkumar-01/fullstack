import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Store/Store.jsx'
import Comp1 from './components/Comp1';
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <Comp1></Comp1>
  </Provider>
)
