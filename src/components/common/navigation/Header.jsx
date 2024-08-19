import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { LiaUserEditSolid } from "react-icons/lia";
import Dropdown from "./Dropdown";
import { useContext, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { sidebarContext } from "./navcontext";

const Header = () => {
  const [aboutHover, setAboutHover] = useState(false);
  const [servicesHover, setServicesHover ] = useState(false);
  const navigate = useNavigate();
  const aboutData = [
    { name: "Our story", link: "/about-us"},
    { name: "Team", link: "/kkco-team"},
    { name: "Careers", link: "/careers"},
    { name: "CSR", link: "/kkco-csr"}
  ];
  const servicesData = [
      { name: "Audit & Assurance", link: "/service/audit-and-assurance"},
      { name: "Tax Consultation", link: '/service/tax-consultation'},
      { name: 'Business Advisory', link: "/service/business-advisory"},
      { name: "ICT Advisory", link: "/service/ict-advisory"},
      { name: "Outsourcing", link: "/service/outsourcing"},
      { name: "Training", link: "/service/training"}
  ]
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
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
                                                     <li onMouseEnter={() => setServicesHover(true)} onMouseLeave={() => setServicesHover(false)}><NavLink to={"/services"}>Services</NavLink>
                                                              <Dropdown data={servicesData} status={servicesHover} />
                                                     </li>
                                                     <li><NavLink to={"/insights"}>Insights</NavLink></li>
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