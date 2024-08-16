import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import Affiliations from "../components/home/Affiliations"
import BlogSection from "../components/home/BlogSection"
import BookingSection from "../components/home/BookingSection"
import Extrahero from "../components/home/Extrahero"
import FeaturesSection from "../components/home/FeaturesSection"
import HeroSection from "../components/home/HeroSection"
import PodcastSection from "../components/home/PodcastSection"
import ProcessSection from "../components/home/ProcessSection"
import ServicesSection from "../components/home/ServicesSection"
import "../styles/home.css";
const Home = () => {
  return (
    <>
            <Navbar />
            <HeroSection />
            <Extrahero />
            <FeaturesSection />
           <AboutSection />
           <ServicesSection />
           <ProcessSection />
           <PodcastSection />
           <Affiliations />
           <BookingSection />
           <BlogSection />
           <Footer />
    </>
  )
}

export default Home