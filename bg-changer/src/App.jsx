import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap items-center justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shodow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full shodow-lg"
            style={{backgroundColor:"red"}}
            onClick={() => setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full shodow-lg"
            style={{backgroundColor:"green"}}
            onClick={() => setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full shodow-lg"
            style={{backgroundColor:"blue"}}
            onClick={() => setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full shodow-lg"
            style={{backgroundColor:"pink"}}
            onClick={() => setColor("pink")}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shodow-lg"
            style={{backgroundColor:"black"}}
            onClick={() => setColor("black")}>Black</button>
            <button className="outline-1 px-4 py-1 rounded-full shodow-lg"
            style={{backgroundColor:"white"}}
            onClick={() => setColor("white")}>White</button>
            <button className="outline-none px-4 py-1 rounded-full shodow-lg"
            style={{backgroundColor:"olive"}}
            onClick={() => setColor("olive")}>Olive</button>
          </div>
          
        </div>
      </div>
    
  )
}

export default App

// onClick={() => setColor("olive")} we are using this type of syntax because 
// onclick method expect a function in it, so we are passing a function to it
// and in that function we are calling setColor function and passing the color
// to it, so that the color will be changed to the color we are passing to it