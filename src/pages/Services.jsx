import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import BookingSection from "../components/home/BookingSection"
import ProcessSection from "../components/home/ProcessSection"
import ClientBase from "../components/services/ClientBase"
import FaqsSection from "../components/services/FaqsSection"
import ServicesBody from "../components/services/ServicesBody"
import ServicesHero from "../components/services/ServicesHero"
import "../styles/services.css"
const Services = () => {
  return (
    <>
           <Navbar />
           <ServicesHero />
           <ClientBase />
           <ServicesBody />
           <ProcessSection />
           <BookingSection />
           <FaqsSection />
           <Footer />
    </>
  )
}

export default Services