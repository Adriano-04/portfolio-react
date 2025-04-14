import Title from '../../components/title'
import Project from '../../components/project'
import List from './styles'

const Projects = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <List>
      <li>
        <Project
          title="Agenda de contatos"
          text="Agenda de contatos feita utilizando o react e redux com opção de adicionar,remover e editar."
          href="https://github.com/Adriano-04/Lista-contatos/tree/main/src"
          tag="Redux"
          deploy="https://lista-contatos-omega-one.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Loja de veiculos"
          text="Um projeto simples de um loja de veiculos que foi feita para estudo do BootStrap."
          href="https://github.com/Adriano-04/Lista-contatos/tree/main/src"
          tag="BootStrap"
        />
      </li>
      <li>
        <Project
          title="Restaurante"
          text="Projeto feito como exercicio de curso de uma pagina de restaurante feita com react,redux e router dom"
          href="https://github.com/Adriano-04/Lista-contatos/tree/main/src"
        />
      </li>
    </List>
  </section>
)

export default Projects
