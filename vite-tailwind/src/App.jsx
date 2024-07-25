import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-slate-500 text-center'> BG COLOR CHANGER WITH VITE</h1>
      <div className='w-full h-screen duration-150 fixed flex-wrap justify-center bottom-16 bg-black'>
        <div className='fixed flex-wrap allign-middle bottom-16 bg-white'>
           <button
           className=' rounded-full text-slate-600 align-middle'
           > Button </button>
        </div>
      </div>
    </>
  )
}

export default App
