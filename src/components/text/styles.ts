import styled from 'styled-components'
import { Props } from './index'

export const TextStyle = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: 400;
  line-height: 22px;
  color: ${(props) =>
    props.tipo === 'principal' ? props.theme.corPrincipal : '#949494'};
`
