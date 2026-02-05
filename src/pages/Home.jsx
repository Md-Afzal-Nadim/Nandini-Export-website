import { useEffect, useState } from "react";
import "./Home.css";
import Aboutb from "./Aboutb";
import About from "./About";
import Contact from "./Contact";

const images = [
  "https://cdn.luxe.digital/media/20221013105613/best-leather-jackets-women-acne-studios-review-luxe-digital.jpg",
  "http://sc04.alicdn.com/kf/Uf990985c6f0c488ba2fb7e21d387e1afw.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2023/3/MS/EK/LY/55911486/023a3470-500x500.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
    <div className="slider">
      
      {images.map((img, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${img})` }}
        >
          {index === current && (
            <div className="content">
              <h1>NANDANI EXPO HOUSE</h1>
              <p>I am item content. Click edit button to change this text.</p>
              <button className="hero-btn">Explore More</button>
            </div>
          )}
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
    <Aboutb />
    
    <Contact />
    </>
  );
}
