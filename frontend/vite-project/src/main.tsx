import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StoreContextProvider from './context/Context.tsx'

createRoot(document.getElementById('root')!).render(
 
    <StoreContextProvider>
       <App />
    </StoreContextProvider>
   
 
)
