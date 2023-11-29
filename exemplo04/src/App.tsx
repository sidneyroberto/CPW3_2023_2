import { useEffect, useState } from 'react'

import { Container } from './styles'
import SearchInput from './components/SearchInput'
import data from './data/trabalhos.json'
import { Work, getWork } from './models/Work'
import WorkCard from './components/WorkCard'

const App = () => {
  const [query, setQuery] = useState('')
  const [worksList, setWorksList] = useState<Work[]>([])
  const [worksToBeShown, setWorksToBeShown] = useState<Work[]>([])

  useEffect(() => {
    const { works } = data
    const allWorks = works.map((w) => getWork(w))
    setWorksList(allWorks)
    setWorksToBeShown(allWorks)
  }, [])

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase().trim()
      const filteredWorks =
        worksList.filter((w) =>
          w.title.toLowerCase().includes(lowerCaseQuery)
          || w.authors.join('').toLowerCase().includes(lowerCaseQuery)
        )

      setWorksToBeShown(filteredWorks)
    } else {
      setWorksToBeShown(worksList)
    }
  }, [query])

  return (
    <Container>
      <SearchInput query={query} setQuery={setQuery} />

      {(worksToBeShown.length > 0) && (
        worksToBeShown.map((w, index) =>
          <WorkCard key={index} title={w.title} authors={w.authors} />)
      )}
    </Container>
  )
}

export default App