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
      <Title fontSize={14}>Tema</Title>
      <ButtonTheme as={'a'} onClick={props.changeTheme}>
        Mudar tema
      </ButtonTheme>
      <Title fontSize={14}>Contato</Title>
      <ButtonTheme as={'a'} href="https://github.com/Adriano-04">
        Perfil no GitHub
      </ButtonTheme>
      <ButtonTheme
        as={'a'}
        href="https://www.linkedin.com/in/adriano-marques-22a07a35b/"
      >
        Perfil no Linkdin
      </ButtonTheme>
    </SideContainer>
  </aside>
)

export default Sidebar
