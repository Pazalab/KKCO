import about1 from "../../assets/cta.jpg"
import about2 from "../../assets/cta2.jpg"
import about3 from "../../assets/video-bg.jpg"
const AboutBackground = () => {
  return (
    <div className="about-background">
            <div className="inner-row">
                       <div className="about-background-images">
                                 <img src={about1} alt="" />
                                 <img src={about2} alt="" />
                                 <img src={about3} alt="" />
                       </div>

                       <div className="about-story">
                                 <div className="intro">
                                         <h3>Our Story</h3>
                                         <h2>KKCO Journey since Inception</h2>
                                 </div>
                                 <div className="about-story-row">
                                             <div className="about-story-column">
                                                       <p>In 1985, two visionary leaders, Isaiah Kimani and Joshua Kerrets, laid the foundation for what would become a transformative force in accounting and advisory services. What started as Kimani Kerrets & Co. in Kenya evolved over time, rebrandind in 2015 as KKCO East Africa LLP - a firm committed to driving growth not just for its clients, but across the continent of Africa.</p>
                                                       <p>From its inception, KKCO has focused on more than just numbers. With a core mission to provide business solutions tailored to each client&apos;s unique needs, the firm has cultivated a culture of growth, wealth creation, and opportunity - both for investors and for the talented professionals it nurtures.</p>
                                             </div>
                                             <div className="about-story-column">
                                                        <p>What truly sets KKCO East Africa LLP apart is its unwavering commitment to understanding client&apos;s challenges, assembling the right team, and delivering solutions with integrity and excellence. This hands-on, pragramatic approach has earned the firm the trust and respect of a diverse client base over the years.</p>
                                                        <p>Driven by a clear vision for growth and a dedication to service excellence, we continue to stand out as a leader in the industry. The firm&apos;s reputation is not just built on its expertise, but on the meaningful relationships it has formed with clients, empowering them to thrive in a constantly evolving business environment.</p>
                                             </div>
                                 </div>
                       </div>
            </div>
    </div>
  )
}

export default AboutBackground