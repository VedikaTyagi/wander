import "styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "Home";
import About from "About";
import Contact from "Contact";
import Service from "Service";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
