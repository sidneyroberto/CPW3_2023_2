import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import './index.css'

// const element = (
//   <>
//     <div>
//       <h1>Oi!</h1>
//     </div>

//     <div>
//       <img src={logo} alt='Logo do HTML 5' className='logo' />
//     </div>
//   </>
// )

const number = new Date().getTime()
const element = (
  <>
    <Header title='Props' slogan='Utilizando props' />
    <h1>
      {number} é {number % 2 === 0 ? 'par' : 'ímpar'}
    </h1>
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(element)
