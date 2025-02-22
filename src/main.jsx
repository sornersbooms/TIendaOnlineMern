import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextoProvider from "./contexto/ContextoProvider.jsx"

createRoot(document.getElementById('root')).render(
  <ContextoProvider>
    <App />
  </ContextoProvider>,
)
