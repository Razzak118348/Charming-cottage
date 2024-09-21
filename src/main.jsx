import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextApi from './Context/ContextApi.jsx'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextApi children={<RouterProvider router={Routes}/>}/>

  </StrictMode>,
)
