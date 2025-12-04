 import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Category from "./routes/category";




export default function App() {
  return (
   
   
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={Homepage}></Route>
    <Route path="/categories" element={Category}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

  
