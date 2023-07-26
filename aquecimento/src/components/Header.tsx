import './Header.css'

type Props = {
  title: string
  slogan: string
}

const Header = ({ slogan, title }: Props) => {
  return (
    <div className='header'>
      <h1 className='title'>{title}</h1>
      <p className='slogan'>{slogan}</p>
    </div>
  )
}

export default Header
