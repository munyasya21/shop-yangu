// src/pages/shop-management.js
import ShopTable from "../pages/components/ShopTable";



const ShopManagementPage = ({ data }) => {
 
 

  return (
    <div className="p-4 bg-black text-white">
      <ShopTable data={data} /> 
      <div>
       
      </div>
    </div>
  );
  
};

export default ShopManagementPage;
export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/shops');
  const data = await fetchData(context.params.id)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
      props: {
          data,
      },
  };
}