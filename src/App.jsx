import { useState } from 'react';

import { Navbar } from './js/components/navbar';
import './styles/App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-center">Carina Gaspar</h1>
      <button class="btn btn-secondary">Button</button>
    </>
  )
}

export default App
