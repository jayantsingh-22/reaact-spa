import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import WelcomeNewUser from "./pages/WelcomeNewUser";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/welcome/new-user" element={<WelcomeNewUser />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
