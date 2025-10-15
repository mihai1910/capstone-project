import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './styles/output.css'

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
  //npx @tailwindcss/cli -i ./src/styles/input.css -o ./src/styles/output.css -always
  //npx vite
)
