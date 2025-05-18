import { useState } from 'react'
import {InputBox} from './components'
import {useCurrencyinfo} from './hooks'
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-orange-400'> Hello </h1>
    </>
  )
}

export default App
