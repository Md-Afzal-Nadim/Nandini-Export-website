import { useState } from "react";
import "./Bags.css";

const bags = [
  "/Women bags/image1.png",
  "/Women bags/image2.png",
  "/Women bags/image3.png",
  "/Women bags/image4.png",
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
