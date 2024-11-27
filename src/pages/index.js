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
 <div className=" pl-20  pt-8  gap-8 flex     ">
          <div className="flex bg-gray-300 rounded-lg  justify-center gap-4 w-96 h-72  p-4 ">
            <div className=" rounded-full  p-3  justify-center items-center  ">
               </div>
              
               <h2 className="pr-20 pt-20 font-bold text-4xl">Total Shops
                <br/>150
               </h2>
               
            </div>
          <div className="flex  bg-gray-300 rounded-lg  justify-center gap-4 w-96 p-4 h-72">
           <div className=" rounded-full  p-3  justify-center items-center  ">
                </div>
            </div>
            <div className="flex bg-gray-300 rounded-lg  justify-center gap-4 w-96 p-4 h-72">
           <div className=" rounded-full  p-3  justify-center items-center  ">
                </div>
            </div>
 </div>
      
    </div>

      </div>
 
 
    </div>
  );
}
