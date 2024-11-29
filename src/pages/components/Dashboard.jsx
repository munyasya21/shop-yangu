import React, { useState } from 'react';



const Dashboard = () => {
  
    return (

      <div className="pt-20 pl-10 ">

      
        <div className='flex '>
            <div> 
      <h2 className="text-white text-2xl font-bold  ">Good Evening Our Customers</h2>
      <p className="text-lg  text-white font-light">We Are Here To Serve You!</p>
      </div>
     <div className='flex pl-60'>
     <select onChange={(e) => setPriceFilter(e.target.value)} className="bg-white rounded py-2 px-2 mr-2">
          <option value="">Filter by Shop</option>
          <option value="10">Up to $10</option>
          <option value="20">Up to $20</option>
          <option value="50">Up to $50</option>
        </select>
        <select onChange={(e) => setPriceFilter(e.target.value)} className="bg-white rounded py-2 px-2 mr-2">
          <option name="">Filter by Price</option>
          <option name="10">Up to $10</option>
          <option value="20">Up to $20</option>
          <option value="50">Up to $50</option>
        </select>
        <select onChange={(e) => setStockFilter(e.target.value)} className=" bg-white rounded p-2">
          <option value="">Filter by Stock Level</option>
          <option value="5">5 or more</option>
          <option value="10">10 or more</option>
        </select>
        </div>
     </div>
      <div className="  pt-8  gap-8 flex  text-black   ">
          <a href='/shop-management' className="flex bg-white rounded-lg  justify-center gap-4 w-60 h-44  p-4 ">
            <div className=" rounded-full  p-3  justify-center items-center  ">
            <p className="font-bold text-3xl">2</p>
            
            <h2 className="text-3xl font-semibold pt-8">
               Total Shops
               </h2>
               
                </div>
           </a>
          <a href='/product-management' className="flex  bg-white rounded-lg  justify-center gap-4 w-60 p-4 h-44">
           <div className=" rounded-full  p-3  justify-center items-center  ">
           <p className="font-semibold">10</p>
           <h2 className="text-3xl font-semibold pt-8">
               Total Products
               </h2>
               
                </div>
            </a>
            <a href="/product-management" className="flex bg-white rounded-lg  justify-center gap-4 w-60 p-4 h-44">
           <div className=" rounded-full  p-3  justify-center items-center  ">
           <p className="font-semibold">$5000</p>
           <h2 className="text-3xl font-semibold pt-8">
               Total Value Of Products
              
               </h2>
              
                </div>
            </a>
            <div className="flex bg-white rounded-lg  justify-center gap-4 w-60 p-4 h-44">
           <div className=" rounded-full  p-3  justify-center items-center  ">
           <p className="font-semibold">20</p>
           <h2 className="text-3xl font-semibold pt-8">
               Total Stock Level
               </h2>
             
                </div>
            </div>
 </div>
 <div class="flex flex-wrap gap-4 px-4 py-6">
              <div class="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#3b4954] p-6">
                <p class="text-white text-base font-medium leading-normal">Sales in the last 30 days</p>
                <div class="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#9cacba"
                      stroke-width="3"
                      stroke-linecap="round"
                    ></path>
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#283139"></stop>
                        <stop offset="1" stop-color="#283139" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="flex justify-around">
                    <p class=" text-gray-400 text-sm font-bold leading-normal tracking-[0.015em]">Jun 1</p>
                    <p class= "text-gray-400 text-sm font-bold leading-normal tracking-[0.015em]">Jun 8</p>
                    <p class=" text-gray-400 text-sm font-bold leading-normal tracking-[0.015em]">Jun 15</p>
                    <p class=" text-gray-400 text-sm font-bold leading-normal tracking-[0.015em]">Jun 22</p>
                    <p class=" text-gray-400 text-sm font-bold leading-normal tracking-[0.015em]">Jun 29</p>
                  </div>
                </div>
              </div>
              <div class="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#3b4954] p-6">
                <p class="text-white text-base font-medium leading-normal">Orders in the last 30 days</p>
                
              </div>
              </div>
              
      </div>
    )
    }

    export default Dashboard;