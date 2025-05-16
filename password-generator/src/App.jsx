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

/*
====================================
PASSWORD GENERATOR: CODE EXPLANATION
====================================

1. STATE MANAGEMENT
   - length: Stores the password length (default: 8)
   - numbers: Boolean flag to include numbers in the password (default: false)
   - charAllowed: Boolean flag to include special characters (default: false)
   - password: Stores the generated password string

2. REFS
   - passwordRef: Reference to the password input element for text selection and copying

3. HOOKS USED
   - useState: For managing component state (length, numbers, charAllowed, password)
   - useCallback: For memoizing functions to prevent unnecessary re-renders
   - useEffect: For triggering password generation when dependencies change
   - useRef: For accessing and manipulating DOM elements directly

4. FUNCTIONS
   - passwordGenerator:
     • Wrapped in useCallback to prevent re-creation on each render
     • Creates a base string of uppercase and lowercase letters
     • Adds numbers and special characters conditionally based on state
     • Generates random characters based on the specified length
     • Updates the password state with the generated value
     • Dependencies: [length, numbers, charAllowed, setPassword]

   - copyPasswordToClipboard:
     • Also wrapped in useCallback for performance optimization
     • Selects the text in the password input field using the ref
     • Uses the Clipboard API to copy the selected text
     • Dependencies: [password]

5. SIDE EFFECTS
   - useEffect hook triggers the passwordGenerator function whenever:
     • Password length changes
     • Number inclusion preference changes
     • Special character inclusion preference changes
     • The passwordGenerator function itself changes

6. UI COMPONENTS
   - A container div with styling for the entire password generator
   - Password display field with copy button
   - Length slider with range from 6 to 100
   - Checkboxes for toggling numbers and special characters

7. EVENT HANDLERS
   - Range input: Updates length state when slider value changes
   - Number checkbox: Toggles the numbers state
   - Character checkbox: Toggles the charAllowed state
   - Copy button: Triggers the copyPasswordToClipboard function

8. RENDERING OPTIMIZATION
   - useCallback prevents function recreation on every render
   - State updates trigger selective re-rendering

=======================================
*/
