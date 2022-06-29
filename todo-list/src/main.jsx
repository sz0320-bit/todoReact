import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {MainHead} from './components/head'
import {BodyBox} from './components/bodybox'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MainHead />
      <BodyBox />

  </React.StrictMode>
)
