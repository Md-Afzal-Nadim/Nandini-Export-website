import { useState } from "react";
import "./Belt.css";

const belts = [
  "/Belt image/image1.png",
  "/Belt image/image2.png",
  "/Belt image/image3.png",
  
];

export default function Belt() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="belts-container">
      <h1 className="belts-title">Belts</h1>

      <div className="belts-grid">
        {belts.map((img, index) => (
          <div key={index} className="belt-card" onClick={() => setSelectedImg(img)}>
            <img src={img} alt="belt" />
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
