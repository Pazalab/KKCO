import AboutBackground from "../components/about/AboutBackground"
import AboutHero from "../components/about/AboutHero"
import Navbar from "../components/common/navigation/Navbar"
import "../styles/about.css"
const About = () => {
  return (
    <>
            <Navbar />
            <AboutHero />
            <AboutBackground />
    </>
  )
}

export default About