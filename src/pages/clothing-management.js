import ClothingTable from "./components/ClothingTable.jsx";
import Image from "next/image.js";
import dress from "../assets/images/dress.jpg"
import jeans from "../assets/images/jeans.jpg"
import skirt from "../assets/images/skirt.jpg"
import lsneakers from "../assets/images/lsneakers.jpg"



const ClothingTablePage = ({data}) => {
  return (
    <div className="p-4 bg-black text-white ">
      <ClothingTable  data={data}/> 
      <div className="pt-20 pl-20 flex gap-10">
        <div>
       <Image src={dress}
       alt="dress"
       className="w-64 h-64 rounded-lg"/>
       <p className="pt-5 pl-20">Dresses</p>
       <p className="pt-5 pl-20">$15</p>
       </div>
       <div className="">
       <Image src={jeans}
       alt="jeans"
       className="w-64 h-64 rounded-lg"/>
       <p className="pt-5 pl-20">Jeans</p>
       <p className="pt-5 pl-20">$18</p>
       </div>
       <div className="">
       <Image src={skirt}
       alt="skirt"
       className="w-64 h-64 rounded-lg"/>
       <p className="pt-5 pl-20">Skirts</p>
       <p className="pt-5 pl-20">$12</p>
       </div>
       <div className="">
       <Image src={lsneakers}
       alt="lsneakers"
       className="w-64 h-64 rounded-lg"/>
       <p className="pt-5 pl-20">Sneakers</p>
       <p className="pt-5 pl-20">$25</p>
       </div>
      </div>
      

    </div>
  );
};

export default ClothingTablePage;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/bosschiq_products');


  const data = await res.json();

  return {
      props: {
          data
      },
  };
}