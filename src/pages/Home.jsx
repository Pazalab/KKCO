import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import Extrahero from "../components/home/Extrahero"
import FeaturesSection from "../components/home/FeaturesSection"
import HeroSection from "../components/home/HeroSection"
import "../styles/home.css"
const Home = () => {
  return (
    <>
            <Navbar />
            <HeroSection />
            <Extrahero />
            <FeaturesSection />
           <AboutSection />
    </>
  )
}

export default Home