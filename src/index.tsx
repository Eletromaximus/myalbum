import ReactDOM from 'react-dom'
import './theme.ts'
import App from './App'
import React from 'react'
import GlobalStyle from './theme'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
