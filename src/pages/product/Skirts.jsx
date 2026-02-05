import { useState } from "react";
import "./Skirts.css";

const wallets = [
  "https://images.unsplash.com/photo-1618354691438-25bc04584c23",
  "https://images.unsplash.com/photo-1627123424574-724758594e93",
  "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
  "https://images.unsplash.com/photo-1606503153255-59d8b8b5c1c0",
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
