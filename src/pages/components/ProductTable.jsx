
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

  const handleDelete = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (priceFilter ? product.price <= priceFilter : true) &&
      (stockFilter ? product.stockLevel >= stockFilter : true)
    );
  });
    

    return (
        <div className='text-black'>
       <h1 className="text-2xl font-bold mb-4 text-black">Product Inventory</h1>
       <form onSubmit={handleSubmit} className="mb-4">
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
        </div>
    )
}
export default ProductTable;