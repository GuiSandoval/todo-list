import { useState } from 'react'
import { ThemeProvider } from "styled-components"

import { List } from './components/List'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <div>
      <Home />
      <GlobalStyle />
    </div>
  )
}

export default App
