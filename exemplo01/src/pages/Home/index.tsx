import { useEffect, useState } from 'react'

const Home = () => {
  // Área do state
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)
  const [sentence, setSentence] = useState('')
  const [numberOfChars, setNumberOfChars] = useState(0)

  const sum = () => setResult(number1 + number2)

  useEffect(() => {
    const size = sentence.length
    setNumberOfChars(size)
  }, [sentence])

  // Área de renderização
  return (
    <div>
      <div>
        <input
          type='number'
          id='number1'
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
        <span>+</span>
        <input
          type='number'
          id='number2'
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
        <button onClick={() => sum()}>Somar</button>
        <span>{result}</span>
      </div>

      <div>
        <input
          type='text'
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <span>Quantidade de caracteres: {numberOfChars}</span>
      </div>
    </div>
  )
}

export default Home
