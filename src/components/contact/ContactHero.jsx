import contact from "../../assets/contact.jpg"
const ContactHero = () => {
  return (
    <div className="contact-hero">
             <div className="inner-row">
                        <div className="contact-hero-content">
                                   <div className="contact-hero-texts"> 
                                             <h1>Get in Touch</h1>
                                             <p>Whether you have a specific project in mind or are unsure of where to begin, our dedicated team is here to provide expert guidance and personalized support. From initial consultation to strategic execution, we are committed to understanding your unique needs and delivering tailored solutions that drive real results.</p>
                                   </div>
                                   <img src={contact} alt="" />
                        </div>
             </div>
    </div>
  )
}

export default ContactHero