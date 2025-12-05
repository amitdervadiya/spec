import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import CategoryPage from "./routes/CategoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
