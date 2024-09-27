import hero1 from "../../assets/conf.avif"
const ServicesHero = () => {
  return (
    <div className="services-hero">
              <div className="inner-row">
                         <div className="services-hero-content">
                                    <div className="services-hero-intro">
                                                  <h1>Empowering Growth with Precision, Insight on Strategic Audit, Tax and Business Advisory Excellence.</h1>
                                                  <div className="services-hero-grid">
                                                              <p>We specialize in comprehensive accounting, auditing, tax and advisory services that empower businesses to thrive. Our expertise goes beyond the numbers, since we provide the insights and guidance needed to drive growth, ensure compliance, and achieve lasting success. Discover how our tailored approach can transform your operations and elevate your business.</p>
                                                              <img src={hero1} alt="" />
                                                  </div>
                                    </div>
                         </div>
              </div>
    </div>
  )
}

export default ServicesHero