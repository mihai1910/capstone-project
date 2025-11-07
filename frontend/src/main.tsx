import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/output.css'

const container = document.getElementById('root');

if(!container) throw new Error("root element not found");

createRoot(container).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
  //npx @tailwindcss/cli -i ./src/styles/input.css -o ./src/styles/output.css -always
  //npx vite