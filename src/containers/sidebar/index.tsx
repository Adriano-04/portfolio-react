import Avatar from '../../components/avatar'
import Title from '../../components/title'
import Text from '../../components/text'

import { Description, ButtonTheme, SideContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideContainer>
      <Avatar />
      <Title fontSize={20}>Adriano Marques</Title>
      <Text tipo="secundaria">Adriano-04</Text>
      <Description tipo="principal" fontSize={12}>
        Desenvolvedor Front-end
      </Description>
      <ButtonTheme as={'a'} onClick={props.changeTheme}>
        Mudar tema
      </ButtonTheme>
      <ButtonTheme as={'a'} href="https://github.com/Adriano-04">
        Perfil no GitHub
      </ButtonTheme>
    </SideContainer>
  </aside>
)

export default Sidebar
