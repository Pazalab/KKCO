import blog1 from "../../assets/conf.avif"
import { HiMiniArrowLongRight } from "react-icons/hi2";
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
const BlogSection = () => {
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

                       <div className="blog-section-row">
                                  <div className="blog-moja">
                                              <img src={blog1} alt="" />
                                              <span><HiMiniArrowLongRight /></span>
                                              <div className="overlay"></div>
                                              <h2>The power of strategic planning: a roadmap to success</h2>
                                  </div>
                                  <div className="blog-moja">
                                              <img src={blog2} alt="" />
                                              <span><HiMiniArrowLongRight /></span>
                                              <div className="overlay"></div>
                                              <h2>The importance of good leadership in a growing business</h2>
                                  </div>
                                  <div className="blog-moja">
                                              <img src={blog3} alt="" />
                                              <span><HiMiniArrowLongRight /></span>
                                              <div className="overlay"></div>
                                              <h2>Unlocking growth: strategies for scaling your business</h2>
                                  </div>
                       </div>
              </div>
    </div>
  )
}

export default BlogSection