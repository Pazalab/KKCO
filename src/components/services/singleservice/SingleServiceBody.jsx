import { useParams } from "react-router-dom"
import { services } from "../../../data/services";
import { useState } from "react";

const SingleServiceBody = () => {
    const { name } = useParams();
    const activeService = services.find(item => item.url_param === name);
    const [ activeStuff, setActiveStuff ] = useState({
           active_id: 0,
           active_data: activeService.subcategories.find(item => item.id === 0)
    })

  //Switch Tabs
  const switchTabs = (id) => {
           const newStuff = activeService.subcategories.find(item => item.id === id);
           setActiveStuff({
                 active_id: id,
                 active_data: newStuff
           })
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
                                                                                    <h3>{activeStuff.active_data.title}</h3>
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

                                                        { activeService.service_list && <p>{activeService.service_list.intro}</p>}
                                                        <ol>
                                                                 { activeService.service_list && activeService.service_list.list.length > 0 && activeService.service_list.list.map(service => 
                                                                        <li key={service.id}><span>{service.title}: </span>{service.description}</li>
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