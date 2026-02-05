import { Link, Outlet } from "react-router-dom";
import "./Products.css";

function Products() {
  return (
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>

      <div className="product-links">
        <Link to="bags" className="product-card">👜 Bags</Link>
        <Link to="belt" className="product-card">👔 Belt</Link>
        <Link to="skirts" className="product-card"> 💼 Wallet</Link>
        <Link to="jacket" className="product-card">🧥 Jacket</Link>
      </div>

      <div className="product-outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
