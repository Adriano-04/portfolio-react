import Avatar from '../../components/avatar'
import Title from '../../components/title'
import Text from '../../components/text'

import { Description, ButtonTheme, SideContainer } from './styles'

const Sidebar = () => (
  <aside>
    <Avatar />
    <SideContainer>
      <Title fontSize={20}>Adriano Marques</Title>
      <Text tipo="secundaria">Adriano-04</Text>
      <Description tipo="principal" fontSize={12}>
        Front-end
      </Description>
      <ButtonTheme>Mudar tema</ButtonTheme>
    </SideContainer>
  </aside>
)

export default Sidebar
