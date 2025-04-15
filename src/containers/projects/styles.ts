import styled from 'styled-components'
import { Title } from '../../components/title/styles'

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`

export const Section = styled.section`
  margin-bottom: 16px;

  > ${Title} {
    border-bottom: 2px solid gray;
    padding: 4px;
    margin-bottom: 16px;
  }
`

export default List
