import { useParams } from "react-router-dom"
import { services } from "../../../data/services";

const SingleServiceHero = () => {
    const { name } = useParams();
    const activeService = services.find(item => item.url_param === name);

  return (
    <div className="single-service-hero">
              <div className="inner-row">
                        <div className="single-service-hero-content">
                                    <div className="single-service-intro">
                                                 <h1>{activeService.title}</h1>
                                                 <p>{activeService.description}</p>
                                    </div>
                        </div>
              </div>
    </div>
  )
}

export default SingleServiceHero