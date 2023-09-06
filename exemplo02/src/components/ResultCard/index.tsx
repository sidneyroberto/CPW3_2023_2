import styles from './styles.module.css'
import { Photo } from '../../models/Photo'

type Props = {
  photo: Photo
}

//const CHARACTERS_LIMIT = 30
const WORDS_LIMIT = 10

const ResultCard = ({ photo }: Props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardThumb}
        src={photo.thumbURL}
        alt={photo.description}
      />

      {photo.description && (
        <h3 className={styles.cardDescription}>
          {/* {`${photo.description.substring(0, CHARACTERS_LIMIT)}...`} */}
          {`${photo.description.split(' ').slice(0, WORDS_LIMIT).join(' ')}...`}
        </h3>
      )}
    </div>
  )
}

export default ResultCard
