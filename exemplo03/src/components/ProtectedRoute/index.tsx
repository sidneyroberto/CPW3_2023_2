import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { UserContext } from '../../context/UserContext'

type Props = {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: Props) => {
  const { token } = useContext(UserContext)

  // FALHA CATASTRÓFICA DE SEGURANÇA!!!
  if (token) {
    return children
  }

  return <Navigate to='/' replace />
}

export default ProtectedRoute