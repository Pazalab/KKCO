import { Link } from "react-router-dom"
import { faqs } from "../../data/faqs"
import FaqMoja from "./FaqMoja"

const FaqsSection = () => {
  return (
    <div className="faq-section">
               <div className="inner-row">
                         <div className="faq-section-content">
                                     <div className="faq-section-texts">
                                                 <h2>Customers frequently ask</h2>
                                                 <h4>Discover briefly how our exceptional team can elevate your business to new heights. Contact us today, and let&apos;s embark on a tranformative partnership that paves the way for unparalleled success.</h4>
                                                 <Link to={"/contact-us"}>Get in Touch</Link>
                                     </div>
                                     <div className="faq-specific-row">
                                                {
                                                    faqs.map(item => 
                                                          <FaqMoja data={item} key={item.id} />
                                                    )
                                                }
                                     </div>
                         </div>
               </div>
    </div>
  )
}

export default FaqsSection