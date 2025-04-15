import styled from 'styled-components'

export const Card = styled.div`
  border: solid 1px ${(props) => props.theme.corBorda};
  padding: 16px;
  border-radius: 6px;
  position: relative;
  min-height: 125px;
`
export const ButtonA = styled.a`
  color: ${(props) => props.theme.fundo};
  font-size: 12px;
  background-color: ${(props) => props.theme.fundoBotao};
  text-decoration: none;
  padding: 6px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 6px;
  &:hover {
    font-size: 14px;
  }
`
export const Tag = styled.h4`
  background-color: ${(props) => props.theme.tag};
  font-size: 12px;
  border-radius: 4px;
  padding: 4px;
  color: #fff;
  position: absolute;
  top: 4px;
  right: 4px;
`
