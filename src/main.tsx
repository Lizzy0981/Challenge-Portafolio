<<<<<<< HEAD
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/base.css'
import './styles/reset.css'
import './styles/variables.css'
import './styles/animations.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Inicializar AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  delay: 100
})

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
=======
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/base.css'
import './styles/reset.css'
import './styles/variables.css'
import './styles/animations.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Inicializar AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  delay: 100
})

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> 235c25cbf8e633a36f3a91748dbe6580f1c216c5
