// ShopTable.jsx
import React from 'react';

const ShopTable = () => {
    const data = [
        { id: 1, item: 'Item 1', price: '$10.00', quantity: 5 },
        { id: 2, item: 'Item 2', price: '$15.00', quantity: 3 },
        { id: 3, item: 'Item 3', price: '$20.00', quantity: 8 },
        // Add more items as needed
      ];
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

  return (
    <div className='"bg-white text-black '>
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
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">{item.description}</td>
              <td className="border border-gray-300 p-2">{item.logo}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
            
          ))}
      </tbody>
    </table>
    {/* Pagination Controls */}
    <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    
  </div>
  );
};

export default ShopTable;