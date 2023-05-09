import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 underline text-center">Hello world!</h1>
      <div class="flex justify-center items-center min-h-screen ">
          <div class="bg-green-700 p-8 text-3xl rounded-2xl shadow-2xl">
             GeeksforGeeks Learning!
          </div>
      </div>
    </>
  )
}

export default App
