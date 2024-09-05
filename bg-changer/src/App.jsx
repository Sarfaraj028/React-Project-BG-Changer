import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("purple");

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
          <button onClick={()=> setColor("red")} className='text-white px-2 py-1 rounded-lg ' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=> setColor("black")} className='text-white px-2 py-1 rounded-lg ' style={{backgroundColor: "black"}}>Black</button>
          <button onClick={()=> setColor("blue")} className='text-white px-2 py-1 rounded-lg ' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=> setColor("green")} className='text-white px-2 py-1 rounded-lg ' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=> setColor("aqua")} className='text-white px-2 py-1 rounded-lg ' style={{backgroundColor: "aqua"}}>Aqua</button>
          <button onClick={()=> setColor("yellow")} className='text-black px-2 py-1 rounded-lg ' style={{backgroundColor: "yellow"}}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
