import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import CategoryPage from "./routes/CategoryPage";
import ContactPage from "./routes/ContactPage";
import Product from "./routes/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products" element={<Product/>}/>
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
