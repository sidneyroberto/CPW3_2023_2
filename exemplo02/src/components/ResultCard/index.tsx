import styles from './styles.module.css'
import { Photo } from '../../models/Photo'

type Props = {
  photo: Photo
}

const ResultCard = ({ photo }: Props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardThumb}
        src={photo.thumbURL}
        alt={photo.description}
      />

      <h3 className={styles.cardDescription}>{photo.description}</h3>
    </div>
  )
}

export default ResultCard
