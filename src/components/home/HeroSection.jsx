import hero1 from "../../assets/hero3.jpg"
import hero2 from "../../assets/hero2.jpg"
import hero3 from "../../assets/hero4.jpg"
import { PiStarFourFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { GiPolarStar } from "react-icons/gi";

const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="inner-row">
                         <div className="hero-section-content">
                                     <div className="hero-texts">
                                              <h1> Expert Financial and Advisory Solutions.</h1>
                                              <p> We provide comprehensive accounting, advisory, and outsourcing solutions tailored to your unique needs, helping you achieve your financial goals and drive sustainable growth.</p>

                                              <div className="hero-call-action">
                                                        <div className="action-box">
                                                                  <span><GiPolarStar /></span>
                                                        </div>
                                                        <Link to={"/services"}>Explore Services</Link>
                                              </div>
                                     </div>
                                     <div className="hero-image-side">
                                                  <div className="texts">
                                                             <h4>Make informed decisions, Optimize operations and Unlock hidden potential.</h4>
                                                  </div>
                                                <div className="hero-images-spectrum">
                                                          <div className="center-circular">
                                                                      <div className="inner-circle">
                                                                                 <span><PiStarFourFill /></span>
                                                                      </div>
                                                          </div>
                                                          <div className="hero-image-moja one">
                                                                      <img src={hero1} alt="" />
                                                          </div>
                                                          <div className="hero-solid-color-strip">
                                                                    <div className="hero-solid-first"></div>
                                                                    <div className="hero-solid-second"></div>
                                                          </div>
                                                          <div className="hero-image-moja two">
                                                                     <img src={hero2} alt="" />
                                                          </div>
                                                          <div className="hero-image-moja three">
                                                                      <img src={hero3} alt="" />
                                                          </div>
                                                </div>
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default HeroSection