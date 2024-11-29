import React, { useState } from 'react';

const ProductTable = () => {
    
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stockLevel: '',
    description: '',
    image: null,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) => [...prev, newProduct]);
    setNewProduct({ name: '', price: '', stockLevel: '', description: '', image: null });
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
          <th className="border border-gray-300 p-2">Product Name</th>
          <th className="border border-gray-300 p-2">Price</th>
          <th className="border border-gray-300 p-2">Stock Level</th>
          <th className="border border-gray-300 p-2">Product Image</th>
          <th className="border border-gray-300 p-2">Actions</th>
        
        </tr>
        
      </thead>
      <tbody>
        <tr>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">Blazers</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">$20</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">1</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal"></td>
        <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Update</span>
                        </button>
                      </td>
                      <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-red-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Delete</span>
                        </button>
                      </td>
        </tr>
        
 </tbody>
 <tbody>
        <tr>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">T-Shirt</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">$15</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">5</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal"></td>
        <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Update</span>
                        </button>
                      </td>
                      <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-red-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Delete</span>
                        </button>
                      </td>
        </tr>
        
 </tbody>
 <tbody>
        <tr>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">Sneakers</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">$25</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">0</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal"></td>
        <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Update</span>
                        </button>
                      </td>
                      <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-red-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Delete</span>
                        </button>
                      </td>
        </tr>
        
 </tbody>
 <tbody>
        <tr>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">Jeans</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">$18</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">90</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal"></td>
        <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Update</span>
                        </button>
                      </td>
                      <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-red-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Delete</span>
                        </button>
                      </td>
        </tr>
        
 </tbody>
 <tbody>
        <tr>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">Skirts</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">$12</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">50</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal"></td>
        <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Update</span>
                        </button>
                      </td>
                      <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-red-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Delete</span>
                        </button>
                      </td>
        </tr>
        
 </tbody>
 <tbody>
        <tr>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">Dresses</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">$15</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal">20</td>
        <td class=" h-16 px-4 py-2 w-[400px] text-black text-sm font-normal leading-normal"></td>
        <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Update</span>
                        </button>
                      </td>
                      <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-red-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Delete</span>
                        </button>
                      </td>
        </tr>
        
 </tbody>
 
       </table>
    
      </div>
        </div>
    )
}
export default ProductTable;