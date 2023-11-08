import { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { UserContext } from '../../context/UserContext'
import styles from '../../globals.module.css'
import { auth } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showErrorMessage, shouldShowErrorMessage] = useState(false)

  const { setExp, setAuthTime, isSessionValid } = useContext(UserContext)

  const navigate = useNavigate()

  // FALHA CATASTRÓFICA DE SEGURANÇA!!!
  if (isSessionValid()) {
    navigate('/home')
  }

  const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    shouldShowErrorMessage(false)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, email, password
      )

      const { user } = userCredential
      const token = await user.getIdToken()
      const decodedToken = jwtDecode(token)
      const { exp } = decodedToken
      setExp(exp || 0)
      setAuthTime(0)
      navigate('/home')
    } catch (err: any) {
      // auth/wrong-password
      // auth/user-not-found
      // const { code } = err
      console.log(err)
      shouldShowErrorMessage(true)
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginArea}>
        <form className={styles.loginForm} onSubmit={(e) => signIn(e)}>
          <input
            type="email"
            value={email}
            placeholder='E-mail'
            required
            onChange={(e) => setEmail(e.target.value)} />

          <input
            type="password"
            value={password}
            placeholder='Senha'
            required
            onChange={(e) => setPassword(e.target.value)} />

          <input type="submit" value="Entrar" />
        </form>
      </div>

      <div className={styles.messagesArea}>
        {showErrorMessage && (
          <h3 className={styles.errorCard}>Credenciais inválidas</h3>
        )}
      </div>
    </div>
  )
}

export default Login