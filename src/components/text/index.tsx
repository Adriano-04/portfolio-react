import { TextStyle } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundaria'
}

const Text = ({ children, tipo = 'principal' }: Props) => (
  <TextStyle tipo={tipo}>{children}</TextStyle>
)

export default Text
