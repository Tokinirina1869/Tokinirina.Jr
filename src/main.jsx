import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import './components/i18n';
import Projets from './components/PortFolio'
// import "./components/i18n"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Projets />
  </StrictMode>,

)
