import { TextStyle } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundaria'
  fontSize?: number
}

const Text = ({ children, tipo = 'principal', fontSize }: Props) => (
  <TextStyle fontSize={fontSize} tipo={tipo}>
    {children}
  </TextStyle>
)

export default Text
