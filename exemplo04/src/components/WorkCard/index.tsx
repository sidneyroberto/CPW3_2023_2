import { WorkAuthors, WorkCardContainer, WorkTitle } from './styles'

type Props = {
  title: string
  authors: string[]
}

const WorkCard = ({ authors, title }: Props) => {
  return (
    <WorkCardContainer>
      <WorkTitle>{title}</WorkTitle>
      <WorkAuthors>{authors.join(', ')}</WorkAuthors>
    </WorkCardContainer>
  )
}

export default WorkCard