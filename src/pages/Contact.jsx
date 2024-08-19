import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ContactBody from "../components/contact/ContactBody"
import ContactHero from "../components/contact/ContactHero"
import "../styles/contact.css"
const Contact = () => {
  return (
    <>
           <Navbar />
           <ContactHero />
           <ContactBody />
           <Footer />
    </>
  )
}

export default Contact