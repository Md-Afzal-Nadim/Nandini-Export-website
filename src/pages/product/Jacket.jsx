import { useState } from "react";
import "./Jacket.css";

const womenJackets = [
  "/Ladies jacket/image1.png",
  "/Ladies jacket/image2.png",
  "/Ladies jacket/image3.png",
  "/Ladies jacket/image5.png",
  "/Ladies jacket/image6.png",
  "/Ladies jacket/image7.png",
];

const menJackets = [
  "/Men jacket image/image1.png",
  "/Men jacket image/image2.png",
  "/Men jacket image/image3.png",
  "/Men jacket image/image4.png",
  "/Men jacket image/image5.png",
  "/Men jacket image/image6.png",
  "/Men jacket image/image7.png",

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
