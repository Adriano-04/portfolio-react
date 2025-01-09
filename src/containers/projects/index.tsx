import Title from '../../components/title'
import Project from '../../components/project'
import List from './styles'

const Projects = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <List>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
    </List>
  </section>
)

export default Projects
