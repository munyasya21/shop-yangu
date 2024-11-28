import Image from "next/image";
import React from 'react';
import Link from "next/link";
import Sidebar from "../pages/components/Sidebar.jsx";
import Navbar from "../pages/components/Navbar.jsx";
import Dashboard from "../pages/components/Dashboard.jsx";
import ShopTable from "../pages/components/ShopTable.jsx"




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
       <div>
 
      
    </div>

      </div>
 <div>
  <ShopTable/>
 </div>
 
    </div>
  );
};

export default HomePage;
