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
import Cart from "./pages/Profile/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ToastContainer position="top-left" autoClose={700} />
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
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/men-best-sellers" element={<MenBest />} />
          <Route path="/men-daily" element={<MenDaily />} />
          <Route path="/women-best-sellers" element={<WomenBest />} />
          <Route path="/women-daily" element={<WomenDaily />} />

          {/* Profile Route */}
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/my-favorites"
            element={user ? <MyFavorites /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={user ? <Cart /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
