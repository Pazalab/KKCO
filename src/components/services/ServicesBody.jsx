import { services } from "../../data/services"
import { LuMoveRight } from "react-icons/lu"
import { useNavigate } from "react-router-dom"
const ServicesBody = () => {
    const sanitized_services = services.filter(item => item.id !== 243)
    const navigate = useNavigate();
  return (
    <div className="services-body">
                <div className="inner-row">
                            <div className="services-body-content">
                                        <div className="intro">
                                                   <h2>Comprehensive specialist Financial Solutions for Businesses like Yours</h2>
                                        </div>

                                        <div className="services-body-row">
                                                  { sanitized_services.map(item => 
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

export default ServicesBody