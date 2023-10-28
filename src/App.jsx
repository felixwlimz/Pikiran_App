import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Consult from "./pages/Consult";
import Pricing from "./pages/Pricing";
import Article from "./pages/Article";


export default function App(){


  return (
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/consult" element={<Consult/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path='/articles' element={<Article/>}/>
     </Routes>
  )
}