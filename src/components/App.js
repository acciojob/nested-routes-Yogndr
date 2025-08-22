import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './../styles/App.css';
import Grooming from "./Grooming";
import Home from "./Home";
import Women from "./Women";

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="women" element={<Women />}>
            <Route path=":item" element={<Grooming />} />
          </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
