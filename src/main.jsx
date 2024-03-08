import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import { Analytics } from "@vercel/analytics/react"


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Analytics debug={false}/>
    <App />
  </>,
)
