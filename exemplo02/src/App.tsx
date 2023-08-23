import { useRoutes } from 'react-router-dom'

import routes from './routes'

const App = () => {
  // useEffect(() => {
  //   searchPhotos('cat', 'relevant', 1)
  // }, [])

  const elements = useRoutes(routes)

  return <>{elements}</>
}

export default App
