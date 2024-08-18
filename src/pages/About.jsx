import AboutBackground from "../components/about/AboutBackground"
import AboutHero from "../components/about/AboutHero"
import AboutNumbers from "../components/about/AboutNumbers"
import AboutStatements from "../components/about/AboutStatements"
import AboutTeam from "../components/about/AboutTeam"
import Navbar from "../components/common/navigation/Navbar"
import Affiliations from "../components/home/Affiliations"
import "../styles/about.css"
const About = () => {
  return (
    <>
            <Navbar />
            <AboutHero />
            <AboutBackground />
            <AboutNumbers />
            <AboutStatements />
            <AboutTeam />
            <Affiliations />
    </>
  )
}

export default About