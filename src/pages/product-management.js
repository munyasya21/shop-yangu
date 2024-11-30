import ProductTable from "../pages/components/ProductTable";

const ProductManagementPage = ({data}) => {
    return (
      <div className="p-4">
        <ProductTable data={data} />
      </div>
    );
  };


export default ProductManagementPage;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/products');


  const data = await res.json();

  return {
      props: {
          data
      },
  };
}