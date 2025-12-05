 import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage"
import Category from "./routes/CategoryPage";




export default function App() {
  return (
   
   
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" Component={Homepage}></Route>
    <Route path="/categories" Component={Category}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

  
