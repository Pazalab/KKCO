import { useEffect } from "react"
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
import { gql, useQuery } from "@apollo/client"

const GET_ARTICLES = gql`
       query Articles {
              articles_ {
                    id
                    mainImage {
                        url
                    }
                   slug
                   title
                   body {
                         html
                   }
        }
}
`
const Home = () => {
  const { data } = useQuery(GET_ARTICLES);

  useEffect(() => {
         if(data){
              localStorage.setItem("Articles", JSON.stringify(data.articles_))
         }
  })
  return (
    <>
            <Navbar />
            <HeroSection />
            <Extrahero />
            <FeaturesSection />
           <AboutSection />
           <ServicesSection />
           <ProcessSection />
           {/* <PodcastSection /> */}
           <Affiliations />
           <BookingSection />
           <BlogSection  />
           <Footer />
    </>
  )
}

export default Home