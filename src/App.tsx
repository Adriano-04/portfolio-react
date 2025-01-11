import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import React from 'react'
import GlobalStyle, { Container } from './globalStyle'
import Sidebar from './containers/sidebar'
import Sobre from './containers/about'
import Projects from './containers/projects'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  function changeTheme() {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Sobre />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
