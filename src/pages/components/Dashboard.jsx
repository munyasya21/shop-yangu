export default function Dashboard() {
    return (
      <div className="pt-10 pl-20  ">
      <h2 className="text-black text-2xl font-bold">Good Evening Our Customers</h2>
      <p className="text-lg  font-light">We Are Here To Serve You!</p>


      <div className="  pt-8  gap-8 flex     ">
          <div className="flex bg-gray-300 rounded-lg  justify-center gap-4 w-60 h-64  p-4 ">
            <div className=" rounded-full  p-3  justify-center items-center  ">
            <h2 className="text-lg font-bold pt-14">
               Total Shops
               </h2>
               <p className="font-semibold">2</p>
                </div>
           </div>
          <div className="flex  bg-gray-300 rounded-lg  justify-center gap-4 w-60 p-4 h-64">
           <div className=" rounded-full  p-3  justify-center items-center  ">
           <h2 className="text-lg font-bold pt-14">
               Total Products
               </h2>
               <p className="font-semibold">2</p>
                </div>
            </div>
            <div className="flex bg-gray-300 rounded-lg  justify-center gap-4 w-60 p-4 h-64">
           <div className=" rounded-full  p-3  justify-center items-center  ">
           <h2 className="text-lg font-bold pt-14">
               Total Value Of Products
               </h2>
               <p className="font-semibold">2</p>
                </div>
            </div>
            <div className="flex bg-gray-300 rounded-lg  justify-center gap-4 w-60 p-4 h-64">
           <div className=" rounded-full  p-3  justify-center items-center  ">
           <h2 className="text-lg font-bold pt-14">
               Total Stock Level
               </h2>
               <p className="font-semibold">2</p>
                </div>
            </div>
 </div>
      </div>
    )
    }

