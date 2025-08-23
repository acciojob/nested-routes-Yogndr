import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './../styles/App.css';
import Grooming from "./Grooming";
import Home from "./Home";
import Women from "./Women";
import Shirt from './Shirt';
import Trouser from './Trouser';
import Jewellery from './Jewellery';

const App = () => {
  return (
   <BrowserRouter>
   <div>
    
    <nav>
      <ul> 
        <li><Link to="/">Home</Link></li>
        
       <li> <Link to="/women">Women</Link></li>
        
      </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} >

          {/* Nested Routes for Women */}
          <Route path="/women" element={<Women />}>
            <Route path="grooming" element={<Grooming />} />
            <Route path="Shirt" element={<Shirt/>} />
            <Route path="trouser" element={<Trouser />} />
            <Route path="jewellery" element={<Jewellery/>} />
          </Route>
          </Route>
        </Routes>
       </div>
      {/* <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="women" element={<Women />}>
            <Route path=":item" element={<Grooming />} />
          </Route>
          </Route>
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
