import { useParams } from "react-router-dom"
import { services } from "../../../data/services";
import { useEffect, useState } from "react";

const SingleServiceBody = () => {
    const { name } = useParams();
    const activeService = services.find(item => item.url_param === name);
 
    const [ activeStuff, setActiveStuff ] = useState({
           active_id: 0,
           active_data: {}
    })

    useEffect(() => {
          const stuff = activeService && activeService.subcategories ? activeService.subcategories.find(item => item.id === 0) : {}
           setActiveStuff({
                 active_id: 0,
                 active_data: stuff
           })
    }, [activeService])

  //Switch Tabs
  const switchTabs = (id) => {
           const newStuff = activeService.subcategories.find(item => item.id === id);
           setActiveStuff({
                 active_id: id,
                 active_data: newStuff
           })
           window.scrollTo(0, 600)
  }
  return (
    <div className="single-service-body">
                <div className="inner-row">
                            <div className="single-service-content">
                                    <div className="single-service-stuff">
                                              <img src={activeService.image} alt="" />

                                              { activeService.title === "IT Advisory" ? 
                                                        <div className="single-it-description">
                                                                     <div className="single-it-tabs">
                                                                                <div className="single-it-tabs-sticky">
                                                                                            <ul>
                                                                                                     { activeService.subcategories && activeService.subcategories.map(item => <li onClick={() => switchTabs(item.id)} key={item.id} className={activeStuff.active_id === item.id ? "active" : ""}>{item.title}</li>)}
                                                                                            </ul>
                                                                                </div>
                                                                     </div>
                                                                     <div className="single-it-body">
                                                                                    { activeStuff.active_data.body_title && <h3>{activeStuff.active_data.body_title}</h3>}
                                                                                    { activeStuff.active_data.body_intro && <p>{activeStuff.active_data.body_intro}</p>}
                                                                                    { activeStuff.active_data.body_focus && <h4>{activeStuff.active_data.body_focus}</h4>}
                                                                                    { activeStuff.active_data.focus_description && <p>{activeStuff.active_data.focus_description}</p>}

                                                                                    { activeStuff.active_data.headings && activeStuff.active_data.headings.map(item => 
                                                                                              <div className="heading-box" key={item.id}>
                                                                                                           <h4>{item.title}</h4>
                                                                                                           <p>{item.text}</p>
                                                                                              </div>
                                                                                    )}
                                                                                    { activeStuff.active_data.services && <p>{activeStuff.active_data.services.intro}</p>}
                                                                                    <ol>
                                                                                               { activeStuff.active_data.services && activeStuff.active_data.services.list.map(item => 
                                                                                                     <li key={item.id}><span>{item.name}:</span>{item.description}</li>
                                                                                               )}
                                                                                    </ol>
                                                                     </div>
                                                        </div>
                                                   :  
                                              <div className="single-service-description">
                                                        { activeService.intro && <h3>{activeService.intro}</h3>}
                                                        { activeService.intro_description && <p>{activeService.intro_description}</p>}
                                                        { activeService.intro_extra && <p>{activeService.intro_extra}</p>}
                                                        { activeService.intro_choose && <p>{activeService.intro_choose}</p>}

                                                        { activeService.intro_text_title && <h4>{activeService.intro_text_title}</h4>}
                                                        { activeService.intro_text_description && <p>{activeService.intro_text_description}</p>}

                                                        { activeService.intro_text_title2 && <h4>{activeService.intro_text_title2}</h4>}
                                                        {activeService.intro_text_description2 && <p>{activeService.intro_text_description2}</p>}

                                                        { activeService.headings && activeService.headings.map(item => 
                                                                 <div className="extra-box" key={item.id}>
                                                                          <h4>{item.title}</h4>
                                                                          <p>{item.text}</p>
                                                                 </div>
                                                        )}

                                                        { activeService.intro_benefits && <p>{activeService.intro_benefits.title}</p>}
                                                        <ul>
                                                                { activeService.intro_benefits && activeService.intro_benefits.list.map(item => 
                                                                       <li key={item.id}>
                                                                                  <div className="benefit-box">
                                                                                              <h4>{item.name}</h4>
                                                                                              <p>{item.description}</p>
                                                                                 </div>
                                                                       </li>
                                                                )}
                                                        </ul>

                                                        { activeService.service_list && <p>{activeService.service_list.intro}</p>}
                                                        <ol>
                                                                 { activeService.service_list && activeService.service_list.list.length > 0 && activeService.service_list.list.map(service => 
                                                                        <li key={service.id}><span>{service.title} </span>{service.description}</li>
                                                                 )}
                                                        </ol>
                                                        { activeService.service_list && <p>{activeService.service_list.service_extra}</p>}

                                                        { activeService.final && <p>{activeService.final}</p>}

                                                        { activeService.extra_final && <p>{activeService.extra_final}</p>}
                                              </div>
                                            }
                                    </div>
                            </div>
                </div>
    </div>
  )
}

export default SingleServiceBody