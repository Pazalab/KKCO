import { Link } from "react-router-dom";
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/hero1.jpg"
import { RxArrowRight } from "react-icons/rx";

const AboutSection = () => {
  return (
    <div className="about-section">
               <div className="inner-row">
                       <div className="about-section-content">
                                   <div className="intro about">
                                            <h3>KKCO East Africa LLP</h3>
                                            <h2>The Place where Financial Excellence meets Personalized Service Delivery.</h2>
                                   </div>

                                   <div className="about-section-row">
                                              <div className="about-images">
                                                           <img src={about1} alt="" />
                                                           <img src={about2} alt="" />
                                              </div>
                                              <div className="about-description">
                                                       <p>KKCO is more just an accounting and auditing firm. We are a dedicated partner in your business journey. Rooted in Christian principles, we offer top-notch comprehensive suite of services tailored to your unique needs. Our commitment to building strong relationships with our clients allows us to gain a deep understanding of your business, enabling us to deliver tailored solutions that drive growth and success.</p>
                                                       <p>With a steadfast core focus in quality, integrity and excellence, we empower businesses of all sizes. Whether you&apos;re a startup, SME or large enterprise, we help you navigate the complex financial landscape and achieve your business goals with confidence.</p>

                                                       <Link to={"/about-us"}>More about us <span><RxArrowRight /></span></Link>
                                              </div>
                                   </div>
                       </div>
               </div>
    </div>
  )
}

export default AboutSection