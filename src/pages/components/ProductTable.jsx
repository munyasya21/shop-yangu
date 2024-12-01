import React, { useState } from 'react';

const ProductTable = ({data}) => {
    
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: '',
    price: '',
    // image: null,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [stockFilter, setStockFilter] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setNewProduct((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  // Add product to the database

  const addProduct = async () => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      console.log('Product added:', data);
      alert('Product added successfully!');
      window.location.reload();
      setNewProduct({ name: '', price: '', stockLevel: '', description: '', });

    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product!');
    }
  };

  // Delete product by ID

  const deleteProduct = async (productId,productStock) => {
    if (productStock > 0) {
      alert('Product has stock. Cannot delete product.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Product with ID ${productId} deleted successfully.`);
        alert(`Product with ID ${productId} deleted successfully.`);
        window.location.reload();
      } else {
        console.error(`Failed to delete product with ID ${productId}.`);
        alert(`Failed to delete product with ID ${productId}.`);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('An error occurred while deleting the product.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct();
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (priceFilter ? product.price <= priceFilter : true) &&
      (stockFilter ? product.stockLevel >= stockFilter : true)
    );
   
  });
  // Define currentItems based on filteredProducts
  const currentItems = filteredProducts;
    

    return (
        <div className=' overflow-hidden rounded-xl   bg-black '>
       <h1 className="text-2xl font-bold mb-4 text-white">Product Inventory</h1>
       <form onSubmit={handleSubmit} className="mb-4">
       <div className="flex mb-4 text-black">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 py-4 pl-4 bg-gray-900 rounded p-2 mr-2 flex-grow text-black"
        />
      </div>
      <div className="flex mb-4 gap-2 text-black">
       
       
      
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 mr-2 text-black"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 mr-2"
          required
        />
        <input
          type="number"
          name="stockLevel"
          placeholder="Stock Level"
          value={newProduct.stockLevel}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 mr-2 text-black "
          required
        />
       <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 mr-2"
        />
       
        <input
          type="file"
          onChange={handleImageChange}
          className="border border-gray-300 rounded p-2 mr-2"
        />
      
        <button type="submit" className="bg-blue-500 text-white px-4 py-3 rounded">Add Product</button>
        </div>
      </form> 
      
      
      
          
      <div className='bg-white text-black '>
    
    {/* Your table and other components go here */}
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 text-left px-4 p-2">Product Name</th>
          <th className="border border-gray-300 text-left p-2">Price</th>
          <th className="border border-gray-300  text-left p-2">Stock Level</th>
          <th className="border border-gray-300  text-left p-2">Product Image</th>
          <th className="border border-gray-300  text-left p-2">Shop</th>
          <th className="border border-gray-300 p-2">Actions</th>
        
        </tr>
        
      </thead>
      <tbody>
        {data?.map((product) => (
        <tr>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">{product.name}</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">$20</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">{product.stock}</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal"></td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">{product.shop}</td>
        <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-20 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Update</span>
                        </button>
                      </td>
                      <td class=" h-16 px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                        onClick={() => deleteProduct(product.id,product.stock)}
                          class="flex min-w-20 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-red-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Delete</span>
                        </button>
                      </td>
        </tr>
        ))}

        
 </tbody>

 
       </table>
    
      </div>
        </div>
    )
}
export default ProductTable;