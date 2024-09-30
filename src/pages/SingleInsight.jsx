import { useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import { Markup } from 'interweave'
import Footer from "../components/common/Footer";

const SingleInsight = () => {
    const { slug } = useParams();
    const articles = localStorage.getItem("Articles") ? JSON.parse(localStorage.getItem("Articles")) : [];
    const article = articles.find(item => item.slug === slug);
    
  return (
    <>
            <Navbar />
            <div className="single-insight-content">
                       <div className="single-insight-body">
                                  <h1>{article.title}</h1>

                                  <div className="single-insight-image">
                                              <img src={article.mainImage.url} alt="" />
                                  </div>

                                  <div className="insight-body-texts">
                                           <Markup content={article.body.html} />
                                   </div>
                       </div>
            </div>
            <Footer />
    </>
  )
}

export default SingleInsight