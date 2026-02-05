import { useState } from "react";
import "./Skirts.css";

const wallets = [
  "/Wallet image/image1.png",
  "/Wallet image/image2.png",
  "/Wallet image/image3.png",
  "/Wallet image/image4.png",
  "/Wallet image/image5.png",
];

export default function Skirts() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="wallets-container">
      <h1 className="wallets-title">Men Wallets</h1>

      <div className="wallets-grid">
        {wallets.map((img, index) => (
          <div key={index} className="wallet-card" onClick={() => setSelectedImg(img)}>
            <img src={img} alt="men wallet" />
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
