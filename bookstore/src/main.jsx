import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Parentcontext from './context/Parentcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Parentcontext>
    <App />
  </Parentcontext>
)
