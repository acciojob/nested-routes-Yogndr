import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    
    <main>
        <div className="main" >
       
       
          <h3>Index</h3>
          <Outlet/>
          
        
      
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          
        </ul>
      </nav> */}
      {/* <main>
        <div className="main">
          <h3>Index</h3>
          <Outlet />
        </div>
      </main> */}
    </div>
    </main>
   
  );
};

export default Home;
