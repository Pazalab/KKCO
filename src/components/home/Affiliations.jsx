import logo1 from "../../assets/icpak.svg"
import logo2 from "../../assets/dfk.png"
import logo3 from "../../assets/kra.png"
import logo4 from "../../assets/xero.png"
const Affiliations = () => {
  return (
    <div className="affiliations-section">
              <div className="inner-row">
                       <div className="affiliations-content">
                                 <div className="affiliations-intro">
                                          <h2>Trusted by World Class Brands</h2>
                                          <p>Leading brands place their trust in us to deliver top-tier solutions  with unparalleled expertise and unmatched reliability across every project.</p>
                                 </div>
                                 <div className="affiliation-logos">
                                             <img src={logo1} alt="" />
                                             <img src={logo2} alt="" />
                                             <img src={logo3} alt="" />
                                             <img src={logo4} alt="" />
                                 </div>
                       </div>
              </div>
    </div>
  )
}

export default Affiliations