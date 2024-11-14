import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeroesApp from './HeroesApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroesApp />
  </StrictMode>,
)
