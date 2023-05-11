import { useState } from 'react';

import { Navbar } from './js/components/navbar.jsx';
import { Footer } from './js/components/footer.jsx';
import { Home } from './js/views/home.jsx';
import { Work } from './js/views/work.jsx';
import { About } from './js/views/about.jsx';
import './styles/App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold text-center">Carina Gaspar</h1>
        <Home />
        <Work />
        <About />
      </div>
        
      <Footer />
    </>
  )
}

export default App
