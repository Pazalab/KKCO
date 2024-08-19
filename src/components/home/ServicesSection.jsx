import { LuMoveRight } from "react-icons/lu";
import { services } from "../../data/services";
import { useNavigate } from "react-router-dom";
const ServicesSection = () => {
  const navigate = useNavigate();
  return (
    <div className="services-section">
                <div className="inner-row">
                           <div className="services-content">
                                       <div className="intro services">
                                               <h3>What We Do</h3>
                                               <h2>Expert Solutions that meet the Diverse needs of Every Client.</h2>
                                               <p>By seamlessly integrating our extensive industry knowledge with the latest tools and advanced methodologies, we develop comprehensive strategies that consistently drive measurable and impactful results.</p>
                                       </div>

                                       <div className="services-content-row">
                                               { services.slice(0, 6).map(item => 
                                                  <div className="service-moja" key={item.id}>
                                                            <div className="service-moja-texts">
                                                                         <h2 onClick={()=>navigate(item.link)}>{item.title}<span><LuMoveRight /></span></h2>
                                                                         <p>{item.description}</p>
                                                            </div>
                                                   </div>
                                               )}
                                       </div>
                           </div>
                </div>
    </div>
  )
}

export default ServicesSection