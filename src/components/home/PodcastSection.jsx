import { PiPlayFill } from "react-icons/pi";
import { Link } from "react-router-dom"
import pod1 from "../../assets/pod1.jpg"
import pod2 from "../../assets/pod2.jpg"
import { GiOldMicrophone } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";

const PodcastSection = () => {
  return (
    <div className="podcast-section">
              <div className="inner-row">
                         <div className="podcast-section-content">
                                     <div className="podcast-intro">
                                               <h1>Dive deep into the dynamic world of accounting, auditing, and advisory.</h1>
                                               <p>We unravel the complexities of financial management, audit integrity, and strategic business growth, providing you with actionable insights from industry leaders and experts.</p>
                                     </div>

                                     <div className="podcast-grid-row">
                                               <div className="podcast-moja">
                                                         <div className="image-section">
                                                                   <img src={pod1} alt="" />
                                                         </div>
                                                         <h3>Impacts of Finance Bill 2024</h3>
                                                         <p>We explore the key changes and implications of the Finance Bill 2024 in this insightful podcast episode.</p>
                                                         <Link to={"/"}>Listen Now <span><PiPlayFill /></span></Link>
                                               </div>
                                               <div className="podcast-moja">
                                                       <div className="image-section">
                                                                   <img src={pod2} alt="" />
                                                         </div>
                                                         <h3>Clean Books, What next?</h3>
                                                         <p>Discover the next steps to take after achieving clean financial books in this concise podcast episode..</p>
                                                         <Link to={"/"}>Listen Now <span><PiPlayFill /></span></Link>
                                               </div>
                                               <div className="podcast-moja">
                                                         <div className="top-part">
                                                                    <h3>How outsourcing can supercharge your Business.</h3>
                                                                    <p>Discover how outsourcing can drive efficiency, reduce costs, and fuel unprecedented growth in this compelling podcast episode.</p>
                                                                    <Link to={"/"}>Listen Now <span><PiPlayFill /></span></Link>
                                                         </div>
                                                         <div className="bottom-part">
                                                                      <div className="bottom-header">
                                                                                <span className="active"><GiOldMicrophone /></span>
                                                                                <span><GoArrowUpRight /></span>
                                                                      </div>
                                                                      <h4>The podcast which <span>promises to inspire</span> you to be financially confident in running your business.</h4>
                                                         </div>
                                               </div>
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default PodcastSection