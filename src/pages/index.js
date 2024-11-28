import Image from "next/image";
import React from 'react';

import Sidebar from "../pages/components/Sidebar.jsx";
import Navbar from "../pages/components/Navbar.jsx";
import Dashboard from "../pages/components/Dashboard.jsx";
import StockStatusChart from "../pages/components/StockStatusChart.jsx";





  // pages/index.js


const HomePage = () => {
  return (
    <div className="bg-white text-black flex ">
      <div className="flex-col">
<div>
  <Navbar/>
  </div>
      <div>
        <Sidebar/>
      </div>
      </div>

<div className="flex flex-col">
       <Dashboard/>
         </div>
         <div>
<StockStatusChart/>
         </div>
         
          </div>
  );
};

export default HomePage;
