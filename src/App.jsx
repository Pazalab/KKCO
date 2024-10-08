
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import { useEffect } from 'react';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookConsultation from './pages/BookConsultation';
import SingleService from './pages/SingleService';
import Insights from './pages/Insights';
import SingleInsight from './pages/SingleInsight';

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
             <Route path='/service/:name' element={<SingleService />} />
             <Route path='/book-consultation' element={<BookConsultation />} />
             <Route path="/insights" element={<Insights />} />
             <Route path='/insight/:slug' element={<SingleInsight />} />
    </Routes>
  )
}

export default App
