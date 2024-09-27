import hero1 from "../../assets/hero5.jpg"
import hero2 from "../../assets/hero2.jpg"
import hero3 from "../../assets/hero4.jpg"
import { PiStarFourFill } from "react-icons/pi";


const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="inner-row">
                         <div className="hero-section-content">
                                     <div className="hero-texts">
                                              <h1>Expert Audit and Business Advisory Solutions.</h1>
                                              <p> We provide comprehensive audit, accounting, advisory, and outsourcing solutions tailored to your unique needs, helping you achieve innovative sound systems that drive sustainable growth.</p>
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