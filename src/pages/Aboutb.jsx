import { useEffect, useRef, useState } from "react";
import "./Aboutb.css";
import About from "./About.jsx";

export default function Aboutb() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
    <section className="about-section" ref={sectionRef} id="about">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className={`image-container ${visible ? "slide-in-left" : ""}`}>
          <div className="image-wrapper">
            <img
              src="About image.png"
              alt="Nandini Expo House Leather Manufacturing"
              className="about-image"
            />
            <div className="image-overlay">
              <span>Premium Leather Craftsmanship</span>
            </div>
          </div>
          
          {/* Image caption badge */}
          <div className="image-badge">
            <div className="badge-content">
              <span className="badge-number">5+</span>
              <span className="badge-text">Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`content-container ${visible ? "slide-in-right" : ""}`}>
          <div className="section-header">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="section-title">ABOUT NANDINI EXPO HOUSE</h2>
            <div className="title-underline"></div>
          </div>

          <div className="content-text">
            <p className="intro-text">
              NANDINI EXPO HOUSE IS A LEATHER MANUFACTURING COMPANY SPECIALIZING IN THE DESIGN AND PRODUCTION OF PREMIUM LEATHER JACKETS, GARMENTS, BAGS, AND ACCESSORIES FOR GLOBAL MARKETS.
            </p>
            
            <div className="highlight-box">
              <div className="highlight-icon">✧</div>
              <p>
                Built on strong manufacturing expertise, the company combines skilled craftsmanship with modern production standards to deliver consistent quality and refined detailing across every product.
              </p>
            </div>
            
            <p>
              With an integrated production process, Nandini Expo House oversees each stage of manufacturing—from design development to final finishing—ensuring precision, reliability, and controlled quality.
            </p>
            
            <p>
              The company's versatile product range supports diverse fashion and lifestyle collections, offering flexibility in design, materials, and customization.
            </p>
            
            <div className="mission-statement">
              <h3>OUR COMMITMENT</h3>
              <p>
                Committed to responsible manufacturing and long-term partnerships, Nandini Expo House delivers leather products that reflect durability, craftsmanship, and enduring value.
              </p>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Premium Quality</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Global Standards</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">Custom Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <About />
    </>
  );
}