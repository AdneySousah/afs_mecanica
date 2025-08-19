import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './routes/Routes.jsx'
import GlobalStyle from './styles/globalStyles.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
    <GlobalStyle/>
  </StrictMode>,
)
