import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const Dropdown = ({ data, status }) => {
  return (
    <div className={ status ? "dropdown active" : "dropdown"}>
            <ul>
                   { data.map(item => 
                        <li key={item.name}><Link to={item.link}>{item.name}</Link></li>
                   )}
            </ul>
    </div>
  )
}

export default Dropdown