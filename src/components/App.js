
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";
import Grooming from "./Grooming";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";

const App = () => {
  return (
   <BrowserRouter>
   <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/women">Women</Link>
      <br/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/women" element={<Women />}>
            <Route path="grooming" element={<Grooming />} />
            <Route path="shirt" element={<Shirt />} />
            <Route path="trouser" element={<Trouser />} />
            <Route path="jewellery" element={<Jewellery />} />
          </Route>
      </Routes>
        
    </div>
    </BrowserRouter>
  )
}

export default App
