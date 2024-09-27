
const ContactBody = () => {
  return (
    <div className="contact-body-section">
               <div className="inner-row">
                        <div className="contact-body-content">
                                     <div className="contact-body-texts">
                                                <div className="contact-texts-top">
                                                          <h2>We&apos;d like to hear from you</h2>
                                                          <p>Submit your details and inquiry through the form, and let us know how we can help. Whatever your business challenge or goal, we are fully committed to guiding and supporting you every step of the way.</p>
                                                </div>
                                                <div className="contact-texts-bottom">
                                                           <div className="text-box">
                                                                   <h3>Call Us</h3>
                                                                   <p>+254 702 703 535</p>
                                                                   <p>+254 272 8388</p>
                                                                   <p>+254 273 0452</p>
                                                           </div>
                                                           <div className="text-box">
                                                                     <h3>Email</h3>
                                                                     <p>consulting@kkcoeastafrica.com</p>
                                                                     
                                                           </div>
                                                           <div className="text-box">
                                                                      <h3>Office Location</h3>
                                                                      <p>Scripture Union Centre, Hurlingham, 1st Floor, Argwings Kodhek Rd - Nairobi, Kenya</p>
                                                           </div>
                                                </div>
                                     </div>
                                     <div className="contact-form">
                                                <form action="">
                                                          <div className="form-row grid">
                                                                   <div className="form-column">
                                                                            <label htmlFor="name">Name <span>*</span></label>
                                                                            <input type="text" className="form-control" placeholder="Enter your full name" />
                                                                   </div>
                                                                   <div className="form-column">
                                                                             <label htmlFor="email">Work Email <span>*</span></label>
                                                                             <input type="email" className="form-control" placeholder="Enter your email address" />
                                                                  </div>
                                                          </div>
                                                          <div className="form-row">
                                                                     <label htmlFor="company name">Company Name</label>
                                                                     <input type="text" className="form-control" placeholder="Representing company" />
                                                          </div>
                                                          <div className="form-row">
                                                                    <label htmlFor="consulting area">Subject of Inquiry <span>*</span></label>
                                                                    <input type="text" className="form-control" placeholder="Enter your subject interest" />
                                                          </div>
                                                          <div className="form-row">
                                                                    <label htmlFor="message">Write your Message <span>*</span></label>
                                                                    <textarea placeholder="How can we help you?" className="form-text-control"></textarea>
                                                          </div>
                                                          <div className="form-btn">
                                                                   <button type="submit">Submit Now</button>
                                                          </div>
                                                </form>
                                     </div>
                        </div>
               </div>
    </div>
  )
}

export default ContactBody