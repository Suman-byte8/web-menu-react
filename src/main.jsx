import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Base rules Locomotive Scroll / Lenis needs (tiny); the library itself loads lazily (lib/smoothScroll.js).
import 'locomotive-scroll/locomotive-scroll.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
