import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import { industries, services } from "../data/options"
const BookConsultation = () => {
  return (
    <>
             <Navbar />
             <div className="booking-hero">
                        <div className="inner-row">
                                   <div className="booking-hero-content">
                                             <h1>Transform your Business with Expert Audit and Business Advisory Services</h1>
                                             <p>Whether you need compliance support, strategic financial planning, or risk management insights, our experienced professionals deliver customized solutions to meet your business goals and ensure success in a competitive market. Let us help you make informed decisions and unlock your business&apos;s full potential</p>
                                   </div>
                        </div>
             </div>
             <div className="booking-form">
                        <div className="inner-row">
                                    <div className="booking-form-content">
                                                <h2>Fill in the form below to book a consultation with us</h2>

                                                <form>
                                                          <div className="form-row grid">
                                                                     <div className="form-column">
                                                                             <label htmlFor="name">Name</label>
                                                                             <input type="text" className="form-control" />
                                                                     </div>
                                                                     <div className="form-column">
                                                                               <label htmlFor="email">Email</label>
                                                                               <input type="email" className="form-control" />
                                                                     </div>
                                                          </div>
                                                          <div className="form-row">
                                                                      <label htmlFor="phone">Phone Number</label>
                                                                      <input type="number" className="form-control" pattern="+[0,9]" />
                                                          </div>
                                                          <div className="form-row">
                                                                      <label htmlFor="industry">Industry Classification</label>
                                                                       <select className="form-control">
                                                                                    { industries.map(item => <option key={item}>{item}</option>)}
                                                                       </select>
                                                          </div>
                                                          <div className="form-row">
                                                                      <label htmlFor="service">Service interested in</label>
                                                                      <select className="form-control">
                                                                              { services.map(item => <option key={item.id}>{item.name}</option>)}
                                                                      </select>
                                                          </div>
                                                          <div className="form-row">
                                                                      <label htmlFor="extra-info">Additional Information</label>
                                                                      <textarea placeholder="Any additional info you'd like to add?" className="form-text-control"></textarea>
                                                          </div>
                                                          <div className="form-btn">
                                                                   <button type="submit">Book Now</button>
                                                          </div>
                                               </form>
                                    </div>
                        </div>
             </div>

             <Footer />
    </>
  )
}

export default BookConsultation