import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutb from "./pages/Aboutb";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Bags from "./pages/product/Bags";
import Belt from "./pages/product/Belt";
import Skirts from "./pages/product/Skirts";
import Jacket from "./pages/product/Jacket";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutb />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />}>
          <Route path="bags" element={<Bags />} />
          <Route path="belt" element={<Belt />} />
          <Route path="skirts" element={<Skirts />} />
          <Route path="jacket" element={<Jacket />} />
        </Route>
      </Routes>

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/919716929878?text=Hello%20I%20want%20to%20know%20about%20your%20products"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp Chat"
        />
      </a>

      <Footer />
    </>
  );
}

export default App;
