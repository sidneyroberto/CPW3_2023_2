import { Link } from 'react-router-dom'

import styles from './styles.module.css'
import about from '../../assets/img/about.png'
import home from '../../assets/img/home.png'
import contact from '../../assets/img/contact.png'

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meu Site</h1>
      <Link to='/' className={styles.navLink}>
        <img src={home} alt='Home' />
      </Link>
      <Link to='/about' className={styles.navLink}>
        <img src={about} alt='Sobre' />
      </Link>
      <Link to='/contact' className={styles.navLink}>
        <img src={contact} alt='Contato' />
      </Link>
    </div>
  )
}

export default Header
