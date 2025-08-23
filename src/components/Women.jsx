import { Link, Outlet } from "react-router-dom";
import React from 'react';

const Women = () => {
  return (
    <div>
         <p>Women Items:</p>
         <ul>
     <li> <Link to="grooming">Grooming</Link></li>
      <li><Link to="shirt">Shirt</Link></li>
      <li><Link to="trouser">Trouser</Link></li>
      <li><Link to="jewellery">Jewellery</Link></li>
      </ul>

      {/* Nested components will render here */}
      <Outlet />
      {/* <p>Women Items:</p>
      <ul>
        <li>
          <Link to="grooming">Grooming</Link>
        </li>
        <li>
          <Link to="Shirt">Shirt</Link>
        </li>
        <li>
          <Link to="trouser">Trouser</Link>
        </li>
        <li>
          <Link to="jewellery">Jewellery</Link>
        </li>
      </ul>
      <Outlet /> */}
    </div>
  );
};

export default Women;
