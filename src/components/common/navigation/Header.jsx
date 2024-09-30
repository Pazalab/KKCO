import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from "../../../assets/logo2.png"
import { LiaUserEditSolid } from "react-icons/lia";
import Dropdown from "./Dropdown";
import { useContext, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { sidebarContext } from "./navcontext";

const Header = () => {
  const [aboutHover, setAboutHover] = useState(false);
  const [servicesHover, setServicesHover ] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const aboutData = [
    { name: "Our story", link: "/about-us"},
    { name: "Team", link: "#"},
    { name: "Careers", link: "#"},
    { name: "CSR", link: "#"}
  ];
  const servicesData = [
      { name: "Audit & Assurance", link: "/service/auditing-and-assurance"},
      { name: "Tax Consultation", link: '/service/tax-consulting'},
      { name: 'Business Advisory', link: "/service/business-advisory"},
      { name: "IT Advisory", link: "/service/it-advisory"},
      { name: "Outsourced Accounting", link: "/service/outsourced-accounting"},
      { name: "Outsourced HR and Recruitment", link: "/service/outsourced-hr-and-recruitment"},
      { name: "Company Secretarial Services", link: "/service/company-secretarial-services"},
      { name: "Training & Workshops", link: "/service/training-and-workshops"}
  ]
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const i_path = pathname.slice(1, 8);
  
  return (
    <header>
             <div className="inner-row">
                       <div className="header-content">
                                  <Link to={"/"} className="logo">
                                             <img src={logo} alt={"KKCO logo"} />
                                   </Link>
                                   <nav>
                                             <ul>
                                                     <li><NavLink to={"/"}>Home</NavLink></li>
                                                     <li onMouseEnter={() => setAboutHover(true)} onMouseLeave={() => setAboutHover(false)}><NavLink to={"/about-us"}>About</NavLink>
                                                              <Dropdown  data={aboutData} status={aboutHover}/>
                                                     </li>
                                                     <li  onMouseEnter={() => setServicesHover(true)} onMouseLeave={() => setServicesHover(false)}><NavLink className={ pathname.slice(1, 8) === "service" ? "active" : ""} to={"/services"}>Services</NavLink>
                                                              <Dropdown data={servicesData} status={servicesHover} />
                                                     </li>
                                                     <li><NavLink to={"/insights"} className={i_path === "insight" ? "active": ""}>Insights</NavLink></li>
                                                     <li><NavLink to={"/contact-us"}>Contact</NavLink></li>
                                             </ul>
                                              <div className="header-action-wrap">
                                                       <div onClick={() => navigate("/book-consultation")} className="header-action">
                                                                  <span><LiaUserEditSolid /></span>
                                                                  <p>Book Consultation</p>
                                                       </div>
                                                       <span onClick={() => setSidebarStatus(true)} className="menu-btn"><CgMenuRight /></span>
                                              </div>
                                   </nav>
                                  
                       </div>
             </div>
    </header>
  )
}

export default Header