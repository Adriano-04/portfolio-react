import React from 'react'
import GlobalStyle, { Container } from './globalStyle'
import Sidebar from './containers/sidebar'
import Sobre from './containers/about'
import Projects from './containers/projects'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
