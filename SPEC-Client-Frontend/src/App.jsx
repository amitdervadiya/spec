 import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/homepage";
import category from "./routes/category";




export default function App() {
  return (
   
   
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" Component={Homepage}></Route>
    <Route path="/categories" Component={category}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

  
