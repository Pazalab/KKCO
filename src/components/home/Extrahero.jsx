import { HiMiniCalculator } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GiPolarStar } from "react-icons/gi";
import dfk from "../../assets/dfk.png"
import { PiPlayFill } from "react-icons/pi";
import pod from "../../assets/podcast.png"
import articles from "../../assets/articles.png"
const Extrahero = () => {
  return (
    <div className="extra-hero-section">
              <div className="extra-hero-push">
                        <div className="inner-row">
                                      <div className="extra-hero-content">
                                                  <div className="action-wrap">
                                                            <div className="experience-number-box">
                                                                        <div className="icon">
                                                                                   <span><HiMiniCalculator /></span>
                                                                        </div>
                                                                        <h4>Years of Service</h4>
                                                                        <h2>39</h2>
                                                             </div>
                                                             <div className="hero-call-wrap">
                                                                      <div className="hero-call-action">
                                                                             <div className="action-box">
                                                                              <span><GiPolarStar /></span>
                                                                             </div>
                                                                             <Link to={"/services"}>Explore Services</Link>
                                                                     </div>
                                                             </div>
                                                  </div>

                                                  <div className="extra-hero-grid">
                                                             <div className="dfk-association">
                                                                        <img src={dfk} alt="" />
                                                                        <div className="dfk-texts">
                                                                                   <p>As a proud member of the DFK international network, we are committed to upholding a world-class standard of excellence.</p>
                                                                        </div>
                                                             </div>
                                                             <div className="video-box-wrap">
                                                                        <div className="video-box">
                                                                                  <span><PiPlayFill /></span>
                                                                        </div>           
                                                             </div>
                                                             <div className="extra-actions">
                                                                        <div className="action-moja">
                                                                                   <img src={pod} alt="" />
                                                                                   <h4>KKCO Podcast</h4>
                                                                                   <p>Let&apos;s unpack the finance world together</p>
                                                                        </div>
                                                                        <div className="action-moja"> 
                                                                                    <img src={articles} alt="" />
                                                                                    <h4>Latest insights</h4>
                                                                                    <p>Sharing crucial financial insights</p>
                                                                        </div>
                                                             </div>
                                                  </div>
                                      </div>
                           </div>
              </div>
    </div>
  )
}

export default Extrahero