import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 underline text-center">Hello world!</h1>
      <button class="btn btn-secondary">Button</button>
      <div class="flex justify-center items-center min-h-screen ">
          <div class="bg-green-700 p-8 text-3xl rounded-2xl shadow-2xl">
             GeeksforGeeks Learning!
          </div>
      </div>
    </>
  )
}

export default App
