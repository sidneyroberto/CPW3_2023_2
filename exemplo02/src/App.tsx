import { useEffect } from 'react'
import { searchPhotos } from './services/PhotoService'

const App = () => {
  useEffect(() => {
    searchPhotos('cat', 'relevant', 1)
  }, [])

  return <h1>Oi!</h1>
}

export default App
