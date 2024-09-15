import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import MyFavorites from "./pages/Profile/MyFavorites";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Authentication Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Product Detail Routes */}
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/airforceone" element={<Airforceone />} />
          <Route path="/airforcecherry" element={<Airforcecherry />} />
          <Route path="/airforcerainbow" element={<Airforcerainbow />} />

          {/* Product Listing Routes */}
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/menbestsellers" element={<MenBest />} />
          <Route path="/mendaily" element={<MenDaily />} />
          <Route path="/womenbestsellers" element={<WomenBest />} />
          <Route path="/womendaily" element={<WomenDaily />} />

          {/* Profile Route */}
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/myfavorites"
            element={user ? <MyFavorites /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
