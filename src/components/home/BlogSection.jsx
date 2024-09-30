import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const articles = localStorage.getItem("Articles") ? JSON.parse(localStorage.getItem("Articles")) : [];
  const navigate = useNavigate();
  return (
    <div className="blog-section">
              <div className="inner-row">
                       <div className="blog-section-content">
                                    <div className="intro">
                                              <h3>News & Insights</h3>
                                              <h1>Dive into insights and stay ahead of the curve.</h1>
                                              <p>Our team of expert consultants shares proven best practices across key topics to empower and revitalize your business.</p>
                                    </div>
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
  )
}

export default BlogSection