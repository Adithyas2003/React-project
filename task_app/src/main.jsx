import { StrictMode } from '../../React-project1/task_app/node_modules/@types/react/index.js'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
