import { useState, useCallback, useEffect, useRef, use } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numbers, setnumbers] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)
  
  // useCallback is used to memoize the function so that it will not be recreated
  // on every render, it will only be recreated when the dependencies change


  const passwordGenerator = useCallback(() =>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbers) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|<>?/~"

    for(let i=1; i<=length; i++){
      let index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)

  },[length, numbers, charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
    
  }
  , [password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numbers, charAllowed, passwordGenerator])


  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
      <input 
      type='text' 
      value = {password}
      placeholder='Password'
      className='outline-none w-full px-4 py-1 text-2xl bg-gray-200 text-gray-500'
      readOnly  
      ref = {passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >Copy</button>
      
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numbers}
          id="numberInput"
          onChange={() => {
              setnumbers((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
              setcharAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="characterInput">Characters</label>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default App
