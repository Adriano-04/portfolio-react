import styled from 'styled-components'
import { TextStyle } from '../../components/text/styles'

export const Description = styled(TextStyle)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corSecundaria};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`
export const SideContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
