import { useState } from 'react'
import Exercise1 from './Components/Exercise1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <div className='ex-1'>
        <Exercise1/>
      </div>
      
    </div>
  )
}

export default App
