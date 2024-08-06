import transformative from "../../assets/transformation.png"
import priority from "../../assets/priority.png"
import strategy from "../../assets/strategy.png"
import insights from '../../assets/insights.png'

const FeaturesSection = () => {
  return (
    <div className="features-section">
            <div className="inner-row">
                      <div className="features-content">
                                 <div className="intro features-description">
                                           <h3>Why Choose Us</h3>
                                           <h1>Your Comprehensive Business Partner for Growth.</h1>
                                           <p>We build enduring partnerships with SMEs, medium, and large enterprises. Our deep understanding of your business is the cornerstone of our service. By immersing ourselves in your operations, we deliver tailored solutions that drive sustainable growth for your business.</p>
                                 </div>
                                 <div className="features-row">
                                           <div className="features-column">
                                                     <div className="feature-moja">
                                                                 <img src={transformative} alt="" />
                                                                 <h4>Guaranteed Transformation</h4>
                                                                 <p>We&apos;re not just number crunchers, we&apos;re business enhancers. Our accountancy and advisory services go beyond the bare minimum, driving real growth and efficiency.</p>
                                                     </div>
                                                     <div className="feature-moja">
                                                                 <img src={priority} alt="" />
                                                                 <h4>Your Business, Our Priority</h4>
                                                                 <p>From strategic planning to unexpected hurdles, we&apos;re your dedicated financial partner. Our flexible approach ensures you always have the support you need, when you need it.</p>
                                                     </div>
                                           </div>
                                           <div className="features-column adjust">
                                                   <div className="feature-moja">
                                                                 <img src={strategy} alt="" />
                                                                 <h4>Beyond the Bottom Line</h4>
                                                                 <p>We se the bigger picture. Our services extend beyond traditional accounting, offering strategic insights and practical solutions to elevate your business.</p>
                                                     </div>
                                                     <div className="feature-moja">
                                                                 <img src={insights} alt="" />
                                                                 <h4>Industry Insights, Tailored Solutions</h4>
                                                                 <p>As experts in the finance sector and having worked with a variety of clients, we understand your challenges. Our services are designed to fuel your growth and drive success.</p>
                                                     </div>
                                           </div>
                                 </div>
                      </div>
            </div>
    </div>
  )
}

export default FeaturesSection