import { useContext, useEffect, useRef, useState } from "react"
import { sidebarContext } from "./navcontext"
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";

const Sidebar = () => {
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const [ aboutClick, setAboutClick ] = useState(false);
  const [serviceClick, setServiceClick] = useState(false)
  const sidebarRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
         if(sidebarStatus){
               sidebarRef.current.classList.add("active");

               const tl = gsap.timeline();
               tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                     y: 0,
                     borderRadius: 0,
                     duration: 0.8
               })
               tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                     x: 0,
                     duration: 0.8
               })
         }else{
               const tl = gsap.timeline();
               tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                     x: "-100%",
                     duration: 0.95
               })
               tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                      y: "-100%",
                     borderRadius: "0px 0px 50% 50%",
                     duration: 0.8
              })

              setTimeout(() => {
                     sidebarRef.current.classList.remove("active")
              }, 2000)
         }
  }, [sidebarStatus])

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
  return (
    <div ref={sidebarRef} className="sidebar">
             <div className="sidebar-overlay"></div>
             <div className="sidebar-content">
                         <div className="sidebar-header">
                                   <Link to={"/"}>
                                            <img src={logo} alt="" />
                                    </Link>
                                    <span onClick={() => setSidebarStatus(false)}><CgClose /></span>
                         </div>
                         <div className="sidebar-nav">
                                    <ul>
                                             <li><NavLink to={"/"}>Home</NavLink></li>
                                             <li><Link to={"#"} onClick={() => setAboutClick(!aboutClick)}>About Us <span><IoIosArrowDown /></span></Link> 
                                                       <Dropdown data={aboutData} status={aboutClick} />
                                             </li>
                                             <li><Link to={"#"} onClick={() => setServiceClick(!serviceClick)}>Services <span><IoIosArrowDown /></span></Link>
                                                      <Dropdown data={servicesData} status={serviceClick} />
                                             </li>
                                             <li><NavLink to={"/insights"}>Insights</NavLink></li>
                                             <li><NavLink to={"/contact"}>Contact</NavLink></li>
                                    </ul>

                                    <div onClick={() => navigate("/book-appointment")} className="header-action">
                                              <span><LiaUserEditSolid /></span>
                                              <p>Book Appointment</p>
                                    </div>
                         </div>
             </div>
    </div>
  )
}

export default Sidebar