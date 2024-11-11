import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Marks from './marks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  a1={"Prerna"} a2={"vatsprerna"} a3={"ABES"}/>
    <App  a1={"P"} a2={"vats"} a3={"ABESEC"}/>
    <Marks m1={90} m2={56} m3={43}/>
  </StrictMode>,
)
