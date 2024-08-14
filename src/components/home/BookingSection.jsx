import { Link } from "react-router-dom"
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const BookingSection = () => {
  return (
    <div className="booking-section">
               <div className="inner-row">
                       <div className="booking-section-content">
                                  <div className="booking-texts">
                                           <h2>We offer Solutions that drive results</h2>
                                           <p>With our proven track record, collaborative approach, and commitment to excellence, we are uniquely positioned to help you overcome challenges and seize opportunities.</p>
                                  </div>
                                  <Link to={"/"}>Request Service Now <span><HiOutlineArrowUpRight /></span></Link>
                       </div>
               </div>
    </div>
  )
}

export default BookingSection