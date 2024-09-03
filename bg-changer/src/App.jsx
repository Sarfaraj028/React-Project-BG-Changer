import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{background : color}}>
        
        <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12 '>
          test
        </div>
      </div>
    </>
  )
}

export default App
