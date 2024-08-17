import AboutBackground from "../components/about/AboutBackground"
import AboutHero from "../components/about/AboutHero"
import AboutNumbers from "../components/about/AboutNumbers"
import AboutStatements from "../components/about/AboutStatements"
import Navbar from "../components/common/navigation/Navbar"
import "../styles/about.css"
const About = () => {
  return (
    <>
            <Navbar />
            <AboutHero />
            <AboutBackground />
            <AboutNumbers />
            <AboutStatements />
    </>
  )
}

export default About