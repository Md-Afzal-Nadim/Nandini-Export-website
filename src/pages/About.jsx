import { useEffect, useRef, useState } from "react";
import "./About.css";

export default function About() {
  const visionSectionRef = useRef(null);
  const missionSectionRef = useRef(null);
  const globalSectionRef = useRef(null);
  
  const [visionVisible, setVisionVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [globalVisible, setGlobalVisible] = useState(false);

  // Vision Section Observer
  useEffect(() => {
    const visionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log("Vision section visible!");
            setVisionVisible(true);
            visionObserver.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1, // 10% visible होने पर trigger
        rootMargin: "0px 0px -100px 0px" // थोड़ा पहले trigger करने के लिए
      }
    );

    if (visionSectionRef.current) {
      console.log("Setting up vision observer");
      visionObserver.observe(visionSectionRef.current);
    }
    
    return () => {
      if (visionSectionRef.current) {
        visionObserver.disconnect();
      }
    };
  }, []);

  // Mission Section Observer
  useEffect(() => {
    const missionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log("Mission section visible!");
            setMissionVisible(true);
            missionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (missionSectionRef.current) {
      missionObserver.observe(missionSectionRef.current);
    }
    
    return () => {
      if (missionSectionRef.current) {
        missionObserver.disconnect();
      }
    };
  }, []);

  // Global Section Observer
  useEffect(() => {
    const globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log("Global section visible!");
            setGlobalVisible(true);
            globalObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (globalSectionRef.current) {
      globalObserver.observe(globalSectionRef.current);
    }
    
    return () => {
      if (globalSectionRef.current) {
        globalObserver.disconnect();
      }
    };
  }, []);

  return (
    <section className="vision-mission-section" id="vision-mission">
      <div className="container">
        {/* Vision Section */}
        <div className="vision-section" ref={visionSectionRef}>
          <div className="section-header">
            <span className="section-label">OUR VISION</span>
            <h2 className="section-title">COMMITMENT TO QUALITY AND EXCELLENCE</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="vision-content">
            {/* Vision Image with Animation */}
            <div className={`vision-image-wrapper ${visionVisible ? 'animate' : ''}`}>
              <div className="vision-image">
                <img
                  src="/Men jacket image/image2.png"
                  alt="Quality and Excellence Vision"
                  className="vision-main-img"
                />
                <div className="vision-overlay">
                  <h3>Crafting Excellence Since 2005</h3>
                </div>
              </div>
            </div>
            
            {/* Vision Principles with Staggered Animation */}
            <div className="vision-principles">
              <div className={`principle ${visionVisible ? 'animate' : ''}`} style={{animationDelay: '0.1s'}}>
                <div className="principle-icon">✦</div>
                <div className="principle-content">
                  <h4>HURTFUL PREMIUM</h4>
                  <p>Honoring customers and making their lives easier with modern design and global standards.</p>
                </div>
              </div>
              
              <div className={`principle ${visionVisible ? 'animate' : ''}`} style={{animationDelay: '0.2s'}}>
                <div className="principle-icon">✦</div>
                <div className="principle-content">
                  <h4>SUPPLIER OF CHOICE</h4>
                  <p>Building long-term partnerships through wholesale sourcing, advanced delivery.</p>
                </div>
              </div>
              
              <div className={`principle ${visionVisible ? 'animate' : ''}`} style={{animationDelay: '0.3s'}}>
                <div className="principle-icon">✦</div>
                <div className="principle-content">
                  <h4>COLLABORATIVE PLANNING</h4>
                  <p>Encouraging open communication and shared decision-making across teams and partners.</p>
                </div>
              </div>
              
              <div className={`principle ${visionVisible ? 'animate' : ''}`} style={{animationDelay: '0.4s'}}>
                <div className="principle-icon">✦</div>
                <div className="principle-content">
                  <h4>QUALITY COMMITMENT</h4>
                  <p>Delivering products that meet customer expectations.</p>
                </div>
              </div>
              
              <div className={`principle ${visionVisible ? 'animate' : ''}`} style={{animationDelay: '0.5s'}}>
                <div className="principle-icon">✦</div>
                <div className="principle-content">
                  <h4>TEAM WORK FOCUS</h4>
                  <p>Working collaboratively with a shared purpose to achieve sustainable growth and success.</p>
                </div>
              </div>
              
              <div className={`principle ${visionVisible ? 'animate' : ''}`} style={{animationDelay: '0.6s'}}>
                <div className="principle-icon">✦</div>
                <div className="principle-content">
                  <h4>RESPECT & DIGNITY</h4>
                  <p>Fostering equal respect for clients, employees, and suppliers at every level.</p>
                </div>
              </div>
              
              <div className={`principle ${visionVisible ? 'animate' : ''}`} style={{animationDelay: '0.7s'}}>
                <div className="principle-icon">✦</div>
                <div className="principle-content">
                  <h4>INNOVATION DRIVE</h4>
                  <p>Continually improving processes and designs to create added value.</p>
                </div>
              </div>
              
              <div className={`principle ${visionVisible ? 'animate' : ''}`} style={{animationDelay: '0.8s'}}>
                <div className="principle-icon">✦</div>
                <div className="principle-content">
                  <h4>SUSTAINABLE SOURCING</h4>
                  <p>Prioritizing responsible sourcing and ethical production for a better future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section" ref={missionSectionRef}>
          <div className="section-header">
            <span className="section-label">OUR MISSION</span>
            <h2 className="section-title">Our Commitment to Quality, Integrity, and Craftsmanship</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="mission-content">
            <div className="mission-grid">
              {/* Left side - Image */}
              <div className={`mission-image-container ${missionVisible ? 'animate' : ''}`}>
                <img
                  src="mission image.png"
                  alt="Mission Craftsmanship"
                  className="mission-image"
                />
                <div className="mission-image-overlay">
                  <span>Precision Craftsmanship</span>
                </div>
              </div>
              
              {/* Right side - Mission Points */}
              <div className="mission-points">
                <div className={`mission-point ${missionVisible ? 'animate' : ''}`} style={{animationDelay: '0.1s'}}>
                  <div className="point-number">01</div>
                  <div className="point-content">
                    <h3>QUALITY DEFINES MANUFACTURING</h3>
                    <p>We prioritize strong operational systems that ensure consistency, reliability, and refined finishing across every product. From materials to final inspection, quality remains central to everything we produce.</p>
                  </div>
                </div>
                
                <div className={`mission-point ${missionVisible ? 'animate' : ''}`} style={{animationDelay: '0.2s'}}>
                  <div className="point-number">02</div>
                  <div className="point-content">
                    <h3>CUSTOMER-CENTRIC APPROACH</h3>
                    <p>Our clients are at the heart of our business. We work with integrity and responsiveness to understand requirements clearly and deliver solutions that build trust and satisfaction.</p>
                  </div>
                </div>
                
                <div className={`mission-point ${missionVisible ? 'animate' : ''}`} style={{animationDelay: '0.3s'}}>
                  <div className="point-number">03</div>
                  <div className="point-content">
                    <h3>CONTINUOUS IMPROVEMENT</h3>
                    <p>We believe growth comes through learning. By investing in our people, processes, and technologies, we continuously improve efficiency, design creativity, and service experience.</p>
                  </div>
                </div>
                
                <div className={`mission-point ${missionVisible ? 'animate' : ''}`} style={{animationDelay: '0.4s'}}>
                  <div className="point-number">04</div>
                  <div className="point-content">
                    <h3>SUSTAINABLE & RESPONSIBLE GROWTH</h3>
                    <p>Profitability is approached responsibly—taking key factors growth with ethical practices that benefit employees, partners, and the wider community.</p>
                  </div>
                </div>
                
                <div className={`mission-point ${missionVisible ? 'animate' : ''}`} style={{animationDelay: '0.5s'}}>
                  <div className="point-number">05</div>
                  <div className="point-content">
                    <h3>STRONG TEAM COLLABORATION</h3>
                    <p>Our success is built on teamwork. Engineers, technicians, and production teams work together seamlessly to achieve shared goals and deliver consistent results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Go Global Section */}
        <div className="global-section" ref={globalSectionRef}>
          <div className="global-header">
            <h2 className="global-title">GO GLOBAL</h2>
            <div className="global-divider">
              <div className="divider-line"></div>
              <div className="divider-icon">🌍</div>
              <div className="divider-line"></div>
            </div>
          </div>
          
          <div className="global-content">
            <div className={`global-concept ${globalVisible ? 'animate' : ''}`}>
              <h3>NEW CONCEPT</h3>
              <p>
                At Nandini Expo House, the concept of "Go Global" is deeply embedded in the way we work. By maintaining an open source mindset and pursuing excellence, we aspire to become a global leader in eyewear technology. Our approach reflects our commitment to providing high-quality products and services that exceed customer expectations.
              </p>
              <p>
                Head to head collaboration is pivotal as we strive to bring cutting-edge technology and innovation to market. Nandini Expo House embodies this ethos by fostering a culture of continuous improvement. Each team member is empowered to identify areas for enhancement, ensuring that our products remain at the forefront of technological advancements.
              </p>
              <p>
                The new concept not only enhances our brand identity but also underscores our commitment to sustainability. Through innovative design and eco-friendly manufacturing processes, we aim to minimize our environmental impact while delivering exceptional performance.
              </p>
              <p>
                As we embark on this journey, we invite you to join us in embracing the future of eyewear. Together, let's redefine what it means to be a global eyewear brand.
              </p>
            </div>
            
            <div className={`global-image ${globalVisible ? 'animate' : ''}`}>
              <img
                src="image 2.png"
                alt="Global Reach"
                className="global-img"
              />
              <div className="global-image-badge">
                <span>Global Presence</span>
                <span>25+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}