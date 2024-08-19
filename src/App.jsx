
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import { useEffect } from 'react';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookConsultation from './pages/BookConsultation';

function App() {
  const location = useLocation();

  useEffect(() => {
         window.scrollTo(0,0);
  }, [location])
  return (
    <Routes>
             <Route path="/" element={<Home />} />
             <Route path='/about-us' element={<About />} />
             <Route path="/services" element={<Services />} />
             <Route path='/contact-us' element={<Contact />} />
             <Route path='/book-consultation' element={<BookConsultation />} />
    </Routes>
  )
}

export default App
