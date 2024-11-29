import ClothingTable from "./components/ClothingTable.jsx";
import Image from "next/image.js";
import img1 from "../assets/images/img1.jpg"



const ClothingTablePage = () => {
  return (
    <div className="p-4 bg-black text-white ">
      <ClothingTable/> 
      <div className="pt-20 pl-20 flex gap-10">
        <div>
       <Image src={img1}
       alt="blazer"
       className="w-64 h-64 rounded-lg"/>
       <p className="pt-5 pl-20">Dresses</p>
       <p className="pt-5 pl-20">$15</p>
       </div>
       <div className="">
       <Image src={img1}
       alt="blazer"
       className="w-64 h-64 rounded-lg"/>
       <p className="pt-5 pl-20">Jeans</p>
       <p className="pt-5 pl-20">$18</p>
       </div>
       <div className="">
       <Image src={img1}
       alt="blazer"
       className="w-64 h-64 rounded-lg"/>
       <p className="pt-5 pl-20">Skirts</p>
       <p className="pt-5 pl-20">$12</p>
       </div>
       <div className="">
       <Image src={img1}
       alt="blazer"
       className="w-64 h-64 rounded-lg"/>
       <p className="pt-5 pl-20">Sneakers</p>
       <p className="pt-5 pl-20">$25</p>
       </div>
      </div>
      

    </div>
  );
};

export default ClothingTablePage;