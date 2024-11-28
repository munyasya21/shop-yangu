import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Sidebar from "../pages/components/Sidebar.jsx";
import Navbar from "../pages/components/Navbar.jsx";
import Dashboard from "../pages/components/Dashboard.jsx";



export default function Home() {
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
 
 
    </div>
  );
}
