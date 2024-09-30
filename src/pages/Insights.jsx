import Navbar from "../components/common/navigation/Navbar"
import "../styles/insights.css"
import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Footer from "../components/common/Footer"
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
const Insights = () => {
    const { data } = useQuery(GET_ARTICLES);

    useEffect(() => {
           if(data){
                localStorage.setItem("Articles", JSON.stringify(data.articles_))
           }
    })

    const articles = localStorage.getItem("Articles") ? JSON.parse(localStorage.getItem("Articles")) : [];
    const navigate = useNavigate();
  return (
    <>
           <Navbar />
           <div className="insight-hero">
                     <div className="inner-row">
                                 <div className="insight-hero-content">
                                             <h1>Insights that Drive Success: Expert Articles and Business Knowledge</h1>
                                             <p>Stay ahead of the curve with our comprehensive articles and insights. Explore expert analysis, industry trends, and actionable strategies that empower you to make informed decisions. Whether you&apos;re navigating financial complexities, regulatory changes, or market opportunities, our thought leadership equips you with the knowledge to lead your business to greater success.</p>
                                 </div>


                                 { articles.length > 0 ?
                                       <div className="blog-section-row">
                                             { articles.map(item => 
                                                 <div className="blog-moja" key={item.id} onClick={() => navigate(`/insight/${item.slug}`)}>
                                                        <img src={item.mainImage.url} alt="" />
                                                        <span><HiMiniArrowLongRight /></span>
                                                        <div className="overlay"></div>
                                                         <h2>{item.title}</h2>
                                                 </div>
                                           )}
                                 </div>
                                   :
                                <p>No articles found</p>
                        }
                     </div>
           </div>
           <Footer />
    </>
  )
}

export default Insights