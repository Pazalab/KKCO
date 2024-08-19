/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react"

const FaqMoja = ({ data }) => {
    const [active, setActive] = useState(false);
  return (
    <div className={ active ? "faq-moja active" : "faq-moja"}>
               <div className="faq-header" onClick={() => setActive(!active)}>
                          <h3>{data.question}</h3>
                          <span><IoIosArrowDown /></span>
               </div>
               <div className="faq-answer">
                         <div className="answer-inner">
                                    <p>{data.answer}</p>
                         </div>
               </div>
    </div>
  )
}

export default FaqMoja