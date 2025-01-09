import Title from '../../components/title'
import Text from '../../components/text'
import Github from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Text tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa distinctio
      id impedit blanditiis velit, quidem consequatur, commodi, voluptate
      asperiores animi praesentium ea reprehenderit? Dolor itaque porro quidem,
      voluptas ducimus cum.
    </Text>
    <Github>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=Adriano-04&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Adriano-04&layout=compact&langs_count=7&theme=dracula"
      />
    </Github>
  </section>
)

export default Sobre
