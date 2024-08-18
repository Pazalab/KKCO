import statement1 from "../../assets/statement1.jpg"
import statement2 from "../../assets/statement2.jpg"
import { TbPlayerPlayFilled } from "react-icons/tb";

const AboutStatements = () => {
  return (
    <div className="about-statements">
               <div className="inner-row">
                          <div className="about-statement-content">
                                   <div className="about-statement-texts">
                                              <h4>We commit to deeply understanding your needs to ensure we deliver consistent value and long-term success for your business.</h4>
                                              <h3>Our Mission</h3>
                                              <p className="pushy">We exist to deliver client-focused, high-quality accounting and advisory services, driven by a commitment to excellence, guided by integrity and delivered with geniune care and respect.</p>
                                              <h3>Our Vision</h3>
                                              <p>We envision being the most trusted and admired leader in professional accounting and business advisory services, setting the standard for excellence and impact.</p>
                                   </div>
                                   <div className="about-statement-images">
                                               <img src={statement1} alt="" />
                                               <img src={statement2} alt="" />
                                               <div className="statement-vid">
                                                          <div className="inner-circle">
                                                                       <span><TbPlayerPlayFilled /></span>
                                                          </div>
                                               </div>
                                   </div>
                          </div>

                          <div className="vision-section">
                                      <div className="vision-intro">
                                                    <div className="intro">
                                                              <h3>Our Values</h3>
                                                    </div>
                                                    <h3>How we serve you is grounded in Christian values, guiding every decision with integrity, care and and a dedication to excellence.</h3>
                                      </div>
                                      <div className="values-statements-row">
                                              <div className="value-moja">
                                                         <h3>We reflect God&apos;s love and demostrate passion in every aspect of our service delivery.</h3>
                                                         <p>We are driven by a deep care for our clients, approaching every task with enthusiasm and dedication, ensuring that we work is not just about transactions but about making a meaningful impact</p>
                                              </div>
                                              <div className="value-moja">
                                                        <h3>We treat all stakeholders with dignity and respect, fostering trust and collaboration.</h3>
                                                        <p>We believe that every relationship is built on mutual respect. By valuing every client, partner, and team member, we create an environment of inclusivity, trust, and shared success.</p>
                                              </div>
                                              <div className="value-moja">
                                                        <h3>We operate with honesty and integrity in everything we do.</h3>
                                                        <p>Our commitment to ethical practices is unwavering. We hold ourselves accountable to the highest standards, ensuring transparency and trustworthiness in all our engagements.</p>
                                              </div>
                                              <div className="value-moja">
                                                        <h3>We are dedicated to delivering high-quality service that consistently exceeds expectations.</h3>
                                                        <p>Excellence is at the heart of what we do. We strive to provide services that not only meet but surpass client needs, ensuring precision, reliability and value in every solution.</p>
                                              </div>
                                              <div className="value-moja">
                                                        <h3>We are committed to being socially responsible and making a positive impact in the communities we serve.</h3>
                                                        <p>We recognize our role beyond business. Through active community engagement and ethical practices, we contribute to the greater good, fostering growth and well-being for all.</p>
                                              </div>
                                      </div>
                          </div>
               </div>
    </div>
  )
}

export default AboutStatements