import styled from 'styled-components'
import { Props } from './index'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  font-style: normal;
  margin-bottom: 12px;
`
