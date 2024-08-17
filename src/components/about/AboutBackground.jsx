import about1 from "../../assets/cta.jpg"
import about2 from "../../assets/cta2.jpg"
import about3 from "../../assets/video-bg.jpg"
const AboutBackground = () => {
  return (
    <div className="about-background">
            <div className="inner-row">
                       <div className="about-background-images">
                                 <img src={about1} alt="" />
                                 <img src={about2} alt="" />
                                 <img src={about3} alt="" />
                       </div>

                       <div className="about-story">
                                hell with you
                       </div>
            </div>
    </div>
  )
}

export default AboutBackground