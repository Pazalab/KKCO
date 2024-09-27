import { Link } from "react-router-dom"
import { team } from "../../data/team"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const AboutTeam = () => {
  return (
    <div className="about-team">
              <div className="inner-row">
                         <div className="about-team-content">
                                    <div className="about-team-intro">
                                               <h2>We drive growth with a diverse team of experts and visionary leadership.</h2>
                                               <p>We are a powerhouse of industry experts, innovators, and visionaries united by diverse backgrounds and skill sets. Our collective expertise drives cutting-edge solutions and forward-thinking strategies, setting new benchmarks in the accounting and audit industry. Together, we blend creativity with precision, transforming challenges into opportunities for our clients and shaping the future of financial excellence.</p>
                                    </div>
                                    <div className="about-team-row">
                                                { team.map(member => 
                                                       <div className="team-moja" key={member.id}>
                                                                  <div className="image-section">
                                                                             <img src={member.image} alt="" />
                                                                  </div>
                                                                  <div className="team-texts">
                                                                         <h3>{member.name}</h3>
                                                                         <p>{member.position}</p>
                                                                  </div>
                                                       </div>
                                                )}
                                    </div>

                                    <div className="about-careers-nudge">
                                               <h2>Join our Team</h2>
                                               <div className="careers-split">
                                                        <p>At KKCO East Africa, you not only advance your career but also contribute to impactful solutions that drive growth and success for our clients. Would you like to be part of a culture where your skills and ideas are valued? Seize the opportunity to innovate, lead, and make a lasting difference in the world of accounting, auditing and advisory by check out our current open positions.</p>
                                                        <Link to={"/careers"}>View open positions <span><HiOutlineArrowLongRight /></span></Link>
                                               </div>
                                    </div>
                         </div>
              </div>
    </div>
  )
}

export default AboutTeam