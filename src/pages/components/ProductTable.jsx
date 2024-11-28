
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
        <div className='text-black'>
       <h1 className="text-2xl font-bold mb-4 text-black">Product Inventory</h1>
       <form onSubmit={handleSubmit} className="mb-4">
       <div className="flex mb-4 text-black">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded p-2 mr-2 flex-grow text-black"
        />
      </div>
      <div className="flex mb-4 text-black">
        <select onChange={(e) => setPriceFilter(e.target.value)} className="border border-gray-300 rounded p-2 mr-2">
          <option value="">Filter by Price</option>
          <option value="10">Up to $10</option>
          <option value="20">Up to $20</option>
          <option value="50">Up to $50</option>
        </select>
        <select onChange={(e) => setStockFilter(e.target.value)} className="border border-gray-300 rounded p-2">
          <option value="">Filter by Stock Level</option>
          <option value="5">5 or more</option>
          <option value="10">10 or more</option>
        </select>
      </div>
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
      {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2"> {item.name}</td>
              <td className="border border-gray-300 p-2">{item.price}</td>
              <td className="border border-gray-300 p-2">{item.level}</td>
              <td className="border border-gray-300 p-2">{item.image}
              <img 
                 alt={`logo`} 
                  src={`img1.png`} // Replace with the actual path to your logo images
                  className="h-12 w-12 object-cover flex" 
                />
              </td>
              <td className="border border-gray-300 p-2">
                <button onClick={() => handleEdit(item.id)}
                 className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                  Edit
                </button>
                <button onClick={() => handleEdit(item.id)} 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
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