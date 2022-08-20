import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import {BodyBox} from './components/bodybox'
import {ThemeProvider} from "./hooks/darkmode";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";


ReactDOM.createRoot(document.getElementById('root')).render(



    <ThemeProvider>
        <BodyBox />
  </ThemeProvider>

)
