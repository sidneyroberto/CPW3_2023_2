import styles from './styles.module.css'

const Home = () => {
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
