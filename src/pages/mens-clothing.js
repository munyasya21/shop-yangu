import MensClothing from "../pages/components/MensClothing.jsx";



const MensClothingPage = () => {
  return (
    <div className="p-4 bg-black text-white">
      <MensClothing/> 
      <div className="pt-20 pl-20 flex gap-10">
        <div>
       <Image src={img1}
       alt="blazer"
       className="w-64 h-64 rounded-lg"/>
       <p className="pt-5 pl-20">T-Shirt</p>
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
       <p className="pt-5 pl-20">Blazers</p>
       <p className="pt-5 pl-20">$20</p>
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

export default MensClothingPage;