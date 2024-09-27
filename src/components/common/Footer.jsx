import { Link } from "react-router-dom"
import notification from "../../assets/notification.png"
import logo from "../../assets/logo-white.png"
import phone from "../../assets/communication.png"
import email from "../../assets/message-alert.png"
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
              <div className="inner-row">
                        <div className="footer-content">
                                  <div className="subscription-section">
                                            <div className="subscription-text">
                                                          <div className="icon">
                                                                     <img src={notification} alt="" />
                                                          </div>
                                                          <h3>Subscribe and Receive Updates</h3>
                                            </div>
                                            <form>
                                                      <div className="subscription-form">
                                                                <input type="email" placeholder="Enter email address" />
                                                                <button>Subscribe</button>
                                                      </div>
                                            </form>
                                  </div>

                                  <div className="footer-specific-content">
                                            <div className="footer-column">
                                                      <img src={logo} alt="" />

                                                      <div className="footer-box">
                                                               <h4>Location</h4>
                                                               <p> Scripture Union Centre, Hurlingham, 1st Flr Argwings Kodhek Rd - Nairobi Kenya</p>
                                                      </div>
                                                      <div className="footer-box-grid">
                                                                  <div className="grid-col">
                                                                             <div className="icon">
                                                                                     <img src={phone} alt="" />
                                                                             </div>
                                                                             <div className="grid-texts">
                                                                                      <span>For more inquiry</span>
                                                                                       <h2>+254 710 627 859</h2>
                                                                             </div>
                                                                  </div>
                                                                  <div className="grid-col">
                                                                             <div className="icon">
                                                                                     <img src={email} alt="" />
                                                                             </div>
                                                                             <div className="grid-texts">
                                                                                      <span>To send email</span>
                                                                                      <h2>consulting@kkcoeastafrica.com</h2>
                                                                             </div>
                                                                  </div>
                                                      </div>
                                            </div>
                                            <div className="footer-column">
                                                        <h3>Company</h3>
                                                        <ul>
                                                                 <li><Link to={"/"}>Our story</Link></li>
                                                                 <li><Link to={"/"}>Team</Link></li>
                                                                 <li><Link to={"/"}>Careers</Link></li>
                                                                 <li><Link to={"/"}>Contact Us</Link></li>
                                                                 <li><Link to={"/"}>Case studies</Link></li>
                                                        </ul>
                                            </div>
                                            <div className="footer-column">
                                                    <h3>Services</h3>
                                                    <ul>
                                                             <li><Link to={"/"}>Audit & Assurance</Link></li>
                                                             <li><Link to={"/"}>Outsourced Accounting</Link></li>
                                                             <li><Link to={"/"}>Business Advisory</Link></li>
                                                             <li><Link to={"/"}>Tax Consultation</Link></li>
                                                             <li><Link to={"/"}>IT Advisory</Link></li>
                                                    </ul>
                                            </div>

                                            <div className="footer-column">
                                                       <h3>Legal</h3>
                                                       <ul>
                                                                <li><Link to={"/"}>Privacy policy</Link></li>
                                                                <li><Link to={"/"}>Terms & Conditions</Link></li>
                                                                <li><Link to={"/"}>Cookie policy</Link></li>
                                                       </ul>
                                            </div>
                                  </div>
                        </div>
              </div>

              <div className="copyright">
                        <p>All rights reserved &copy; {new Date().getFullYear()} KKCO East Africa LLP.</p>
                        <div className="social-links">
                                    <ul>
                                            <li><Link to={"https://web.facebook.com/kkcoeastafrica/"} target="_blank"><span><FaFacebookF /></span></Link></li>
                                            <li><Link to={"https://x.com/KKco_EastAfrica"} target="_blank"><span><FaXTwitter /></span></Link></li>
                                            <li><Link to={"https://www.instagram.com/kkco_east_africa/"} target="_blank"><span><FaInstagram /></span></Link></li>
                                            <li><Link to={"https://www.linkedin.com/company/kkco-east-africa-llp/"} target="_blank"><span><FaLinkedinIn /></span></Link></li>
                                    </ul>
                        </div>
              </div>
    </footer>
  )
}

export default Footer