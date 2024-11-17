import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HeroesApp } from './HeroesApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true,  v7_relativeSplatPath: true }}>
      <HeroesApp />
    </BrowserRouter>,
  </StrictMode>,
)