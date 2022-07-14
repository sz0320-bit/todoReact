import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {MainHead} from './components/head'
import {BodyBox} from './components/bodybox'
import {ThemeProvider} from "./hooks/darkmode";
import Footer from "./components/footer";
import Toggle from "./components/ViewMode";


ReactDOM.createRoot(document.getElementById('root')).render(

    <ThemeProvider>
        <MainHead />
        <BodyBox />
        <Toggle />
  </ThemeProvider>

)