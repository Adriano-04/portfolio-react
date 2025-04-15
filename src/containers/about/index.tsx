import Title from '../../components/title'
import Text from '../../components/text'
import Github from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Text tipo="principal">
      Atualmente sou estudante focado na área de desenvolvimento front-end, com
      um ano de estudos sobre as principais ferramentas e tecnologias da área de
      front-end, como o HTML, CSS, JavaScript, TypeScript além de alguns
      frameworks como o React, Bootstrap. Tenho projetos pessoais de estudo que
      eu utilizo todas essas tecnologias e deixo elas disponíveis nos meus
      repositórios do GitHub, busco continuar aprendendo e melhorar minha
      experiência na área.
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
