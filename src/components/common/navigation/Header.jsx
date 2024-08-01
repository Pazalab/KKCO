import { Link } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { LiaUserEditSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header>
             <div className="inner-row">
                       <div className="header-content">
                                  <Link to={"/"} className="logo">
                                             <img src={logo} alt={"KKCO logo"} />
                                   </Link>
                                   <nav>
                                             <ul>
                                                     <li><Link to={"/"}>Home</Link></li>
                                                     <li><Link to={"/about"}>About</Link></li>
                                                     <li><Link to={"/services"}>Services</Link></li>
                                                     <li><Link to={"/insights"}>Insights</Link></li>
                                                     <li><Link to={"/contact"}>Contact</Link></li>
                                             </ul>
                                              <div className="header-action">
                                                         <span><LiaUserEditSolid /></span>
                                                         <p>Book Appointment</p>
                                              </div>
                                   </nav>
                                  
                       </div>
             </div>
    </header>
  )
}

export default Header