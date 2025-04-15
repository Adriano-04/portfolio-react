import { Title as TitleStyle } from './styles'

export type Props = {
  children: string
  fontSize?: number
  TextAlign?: string
}

const Title = (props: Props) => (
  <TitleStyle fontSize={props.fontSize} TextAlign={props.TextAlign}>
    {props.children}
  </TitleStyle>
)

export default Title
