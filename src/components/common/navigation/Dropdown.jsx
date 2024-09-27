import { Link, useLocation } from "react-router-dom"

/* eslint-disable react/prop-types */
const Dropdown = ({ data, status }) => {
  const { pathname } = useLocation();

  return (
    <div className={ status ? "dropdown active" : "dropdown"}>
            <ul>
                   { data.map(item => 
                        <li key={item.name}><Link className={ pathname === item.link ? "active" : ""} to={item.link}>{item.name}</Link></li>
                   )}
            </ul>
    </div>
  )
}

export default Dropdown