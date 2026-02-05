import { useState } from "react";
import "./Jacket.css";

const womenJackets = [
  "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
  "https://images.unsplash.com/photo-1520975922323-38d9b1b2f3a7",
  "https://images.unsplash.com/photo-1519415943484-9fa1873496d4",
  "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543"
];

const menJackets = [
  "https://images.unsplash.com/photo-1520975698519-59a9b3b3b1c3",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  "https://images.unsplash.com/photo-1548883354-94bcfe321cbb",
  "https://images.unsplash.com/photo-1516822003754-cca485356ecb"
];

export default function Jacket() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="jackets-container">
      <h1 className="main-title">Leather Jackets</h1>

      <h2 className="section-title">Women Jackets</h2>
      <div className="jackets-grid">
        {womenJackets.map((img, i) => (
          <div key={i} className="jacket-card" onClick={() => setSelectedImg(img)}>
            <img src={img} alt="women leather jacket" />
          </div>
        ))}
      </div>

      <h2 className="section-title">Men Jackets</h2>
      <div className="jackets-grid">
        {menJackets.map((img, i) => (
          <div key={i} className="jacket-card" onClick={() => setSelectedImg(img)}>
            <img src={img} alt="men leather jacket" />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="preview-overlay" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="preview" className="preview-img" />
        </div>
      )}
    </div>
  );
}
