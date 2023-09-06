import { useState } from 'react'

import styles from './styles.module.css'
import { Photo } from '../../models/Photo'
import { searchPhotos } from '../../services/PhotoService'

const Home = () => {
  const [query, setQuery] = useState('')
  const [loading, isLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  const searchResults = async () => {
    if (query.trim()) {
      isLoading(true)
      setPhotos([])
      const results = await searchPhotos(query, 'relevant', 1)
      setPhotos(results)
      isLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchArea}>
        <input type='text' className={styles.searchInput} />
        <button className={styles.searchButton}>Pesquisar</button>
      </div>

      <div className={styles.resultsArea}></div>
    </div>
  )
}

export default Home
