import Title from '../title'
import Text from '../text'
import { Card, ButtonA, Tag } from './styles'

type Props = {
  title: string
  text: string
  href: string
  tag?: string
  deploy?: string
}

const Project = ({ title, text, href, tag, deploy }: Props) => (
  <Card>
    <Title fontSize={14}>{title}</Title>
    <Text tipo="secundaria">{text}</Text>
    <ButtonA href={href}>Visualizar código</ButtonA>
    {deploy && <ButtonA href={deploy}>Visualizar página</ButtonA>}
    {tag && <Tag>{tag}</Tag>}
  </Card>
)

export default Project
