import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  font-family: "Inter", serif;
  list-style: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => props.theme.fundo};

    @media (max-width: 768px) {
      padding-top: 12px;
    }
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  img {
    max-width: 100%;
  }
`
export default GlobalStyle
