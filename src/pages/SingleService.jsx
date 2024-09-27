import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import SingleServiceBody from "../components/services/singleservice/SingleServiceBody"
import SingleServiceHero from "../components/services/singleservice/SingleServiceHero"

const SingleService = () => {
  return (
    <>
            <Navbar />
            <SingleServiceHero />
            <SingleServiceBody />
            <Footer />
    </>
  )
}

export default SingleService