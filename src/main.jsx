import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App";
import Greeting from './greeting.jsx'
import Example from './Example.jsx';
import Appbutton from './Button.jsx';




createRoot(document.getElementById('root')).render(
   <StrictMode>
   <Greeting/>
   <Example/>
  <Appbutton/>
  </StrictMode>,
)
