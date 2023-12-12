import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import DisplayItemList from "./components/DisplayProducts/DisplayItemList";
import ItemDet from "./components/Itemdata/ItemDet";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:category" element={<DisplayItemList />} />
          <Route path="/products/:category/:id" element={<ItemDet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
