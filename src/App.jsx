import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Airforceone from "./pages/Products/SingleShoes/Airforceone";
import Airforcecherry from "./pages/Products/SingleShoes/Airforcecherry";
import Airforcerainbow from "./pages/Products/SingleShoes/Airforcerainbow";
import AllProducts from "./pages/Products/Allproducts/AllProducts";
import MenBest from "./pages/Products/Men/MenBest";
import MenDaily from "./pages/Products/Men/MenDaily";
import WomenDaily from "./pages/Products/Women/WomenDaily";
import WomenBest from "./pages/Products/Women/WomenBest";
import ProductDetail from "./pages/Products/ProductDetail/ProductDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airforceone" element={<Airforceone />} />
        <Route path="/airforcecherry" element={<Airforcecherry />} />
        <Route path="/airforcerainbow" element={<Airforcerainbow />} />
        <Route path="/menbestsellers" element={<MenBest />} />
        <Route path="/mendaily" element={<MenDaily />} />
        <Route path="/womenbestsellers" element={<WomenBest />} />
        <Route path="/womendaily" element={<WomenDaily />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
