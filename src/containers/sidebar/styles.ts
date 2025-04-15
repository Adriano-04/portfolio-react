import styled from 'styled-components'
import { TextStyle } from '../../components/text/styles'

export const Description = styled(TextStyle)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  text-decoration: none;
  color: ${(props) => props.theme.corSecundaria};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  margin-bottom: 8px;
  display: block;
`
export const SideContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (min-width: 1124px) {
    position: fixed;
    left: 84px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
