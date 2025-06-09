import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Stud from './Components/Stud'
import "bootstrap/dist/css/bootstrap.min.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Stud/>
  </StrictMode>,
)
