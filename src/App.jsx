
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import { useEffect } from 'react';
import About from './pages/About';

function App() {
  const location = useLocation();

  useEffect(() => {
         window.scrollTo(0,0);
  }, [location])
  return (
    <Routes>
             <Route path="/" element={<Home />} />
             <Route path='/about-us' element={<About />} />
    </Routes>
  )
}

export default App
