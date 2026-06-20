import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './PetRaian.css'
import App from './App.jsx'
import PetRaian from './components/PetRaian.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pet-raian" element={<PetRaian />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
