import styled from 'styled-components'

export const Card = styled.div`
  border: solid 1px ${(props) => props.theme.corBorda};
  padding: 16px;
`
export const ButtonA = styled.a`
  color: ${(props) => props.theme.fundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.fundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
