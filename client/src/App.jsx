import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

/**
 * 应用主入口，包含路由和导航
 */
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 