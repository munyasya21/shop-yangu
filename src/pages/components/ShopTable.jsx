// ShopTable.jsx
import React from 'react';
import Image from 'next/image';



const ShopTable = () => {
    const [data, setData] = React.useState([
      { id: 1, name: 'Chiq Botique', description: 'Chic Boutique is a stylish retail shop that offers a curated selection of fashionable clothing, accessories, and jewelry, catering primarily to women.',logo: '' },
      { id: 2, name: 'Sweet Tooth Bakery', description: 'Sweet Tooth Bakery has been delighting customers, all crafted from high-quality ingredients and tailored to suit any occasion.',logo: '' },
      // Add more items as needed
    ]);
  
    // Pagination state
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 2; // Number of items per page
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    // Handlers for pagination
    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    // Handler for Edit button
    const handleEdit = (id) => {
      const itemToEdit = data.find(item => item.id === id);
      // Implement your edit logic here (e.g., open a modal or navigate to an edit page)
      alert(`Edit item: ${itemToEdit.name}`);
    };
  
    // Handler for Delete button
    const handleDelete = (id) => {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      alert(`Deleted item with id: ${id}`);
    };

  return (
    <div className='bg-white text-black '>
    <h1 className="text-2xl font-bold">Shop Management</h1>
    <p className='text-xl font-semibold'>Shop List</p>
    {/* Your table and other components go here */}
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Shop Name</th>
          <th className="border border-gray-300 p-2">Shop Description</th>
          <th className="border border-gray-300 p-2">Shop Logo</th>
          <th className="border border-gray-300 p-2">Actions</th>
        
        </tr>
        
      </thead>
      <tbody>
      {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2"> {item.name}
                </td>
              <td className="border border-gray-300 p-2">{item.description}</td>
              <td className="border border-gray-300 p-2">{item.logo}
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
    <div className="mt-4  justify-center items-center">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
          Add New Shop
        </button>
      </div>
    
  </div>
  );
};

export default ShopTable;