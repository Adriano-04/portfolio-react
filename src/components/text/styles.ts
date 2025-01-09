import styled from 'styled-components'
import { Props } from './index'

export const TextStyle = styled.h3<Props>`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a351' : '#949494')};
`
