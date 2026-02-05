import { useState } from "react";
import "./Bags.css";

const bags = [
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  "https://images.unsplash.com/photo-1591561954557-26941169b49e",
  "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114",
  "https://images.unsplash.com/photo-1593032465171-8f5b1b5f6c4a",
];

export default function WomenBags() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bags-container">
      <h1 className="bags-title">Women Bags</h1>

      <div className="bags-grid">
        {bags.map((img, index) => (
          <div key={index} className="bag-card" onClick={() => setSelectedImg(img)}>
            <img src={img} alt="bag" />
          </div>
        ))}
      </div>

      {/* Popup Preview */}
      {selectedImg && (
        <div className="preview-overlay" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="preview" className="preview-img" />
        </div>
      )}
    </div>
  );
}
