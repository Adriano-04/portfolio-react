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
          tag="React"
          deploy="https://lista-contatos-omega-one.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Loja de veiculos"
          text="Um projeto simples de um loja de veiculos que foi feita para estudo do BootStrap."
          href="https://github.com/Adriano-04/Car-shop-bootstrap-"
          tag="BootStrap"
        />
      </li>
      <li>
        <Project
          title="Restaurante"
          text="Projeto feito como exercicio de curso de uma pagina de restaurante feita com react,redux e router dom"
          href="https://github.com/Adriano-04/e-food"
          deploy="https://e-food-kappa.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Loja eletronicos"
          text="Projeto simples usando apenas o HTML5 e CSS feito para estudo."
          href="https://github.com/Adriano-04/Loja-virtual"
          deploy="https://gigastore.vercel.app/"
        />
      </li>
    </List>
  </section>
)

export default Projects
