import { useState } from "react";
import "./Belt.css";

const belts = [
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  "https://images.unsplash.com/photo-1624222247344-550fb60583dc",
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34",
  "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7",
  "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
  "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
  "https://images.unsplash.com/photo-1601924638867-3ec2d5f7c0b0"
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
