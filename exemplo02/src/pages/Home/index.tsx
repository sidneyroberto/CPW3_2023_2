import { useEffect, useState } from 'react'

import styles from './styles.module.css'
import { Photo } from '../../models/Photo'
import { searchPhotos } from '../../services/PhotoService'
import { PacmanLoader } from 'react-spinners'
import ResultCard from '../../components/ResultCard'
import { Result } from '../../models/Result'
import searchIcon from '../../assets/img/search.png'

const Home = () => {
  const [query, setQuery] = useState('')
  const [loading, isLoading] = useState(false)
  const [result, setResult] = useState<Result>({
    photos: [],
    totalPages: 0,
  })
  const [page, setPage] = useState(1)
  const [newSearch, isNewSearch] = useState(false)

  const searchResults = async () => {
    if (query.trim()) {
      console.log('Entrou')
      isLoading(true)
      setResult({
        photos: [],
        totalPages: 0,
      })
      const searchResult = await searchPhotos(query, 'relevant', page)
      console.log(searchResult)
      setResult(searchResult)
      isLoading(false)
    }
  }

  useEffect(() => {
    console.log('Entrou no useEffect 1')
    searchResults()
  }, [page])

  useEffect(() => {
    if(newSearch) {
      console.log('Entrou no useEffect 2')
      setPage(1)
      searchResults()
      isNewSearch(false)
    }
  }, [newSearch])

  return (
    <div className={styles.container}>
      <div className={styles.searchArea}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          className={styles.searchInput}
        />
        <button onClick={() => isNewSearch(true)} className={styles.searchButton}>
          Pesquisar
        </button>

        <button onClick={() => isNewSearch(true)} className={styles.responsiveSearchButton}>
          <img src={searchIcon} alt="Pesquisar" />
        </button>
      </div>

      <PacmanLoader color='#fff' loading={loading} />

      {!loading && result.photos.length > 0 && (
        <>
          <div className={styles.resultsArea}>
            {result.photos.map((p: Photo) => (
              <ResultCard key={p.id} photo={p} />
            ))}
          </div>

          <div>
            {page > 1 && (
              <button className={styles.pageButton} onClick={() => setPage(page - 1)}>Anterior</button>
            )}
            <span className={styles.currentPageLabel} >Página {page}</span>
            {page < result.totalPages && (
              <button className={styles.pageButton}  onClick={() => setPage(page + 1)}>Próxima</button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Home
