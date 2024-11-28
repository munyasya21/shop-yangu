// ShopTable.jsx
import React from 'react';

const ShopTable = () => {
  return (
    <div className='"bg-white text-black '>
    <h1 className="text-2xl font-bold">Shop Management</h1>
    <p className='text-xl font-semibold'>Shop List</p>
    {/* Your table and other components go here */}
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Item</th>
          <th className="border border-gray-300 p-2">Price</th>
          <th className="border border-gray-300 p-2">Quantity</th>
          <th className="border border-gray-300 p-2">Quantity</th>
          <th className="border border-gray-300 p-2">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">Example Item</td>
          <td className="border border-gray-300 p-2">$10.00</td>
          <td className="border border-gray-300 p-2">5</td>
          <td className="border border-gray-300 p-2">5</td>
          <td className="border border-gray-300 p-2">5</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Example Item</td>
          <td className="border border-gray-300 p-2">$10.00</td>
          <td className="border border-gray-300 p-2">5</td>
          <td className="border border-gray-300 p-2">5</td>
          <td className="border border-gray-300 p-2">5</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
  );
};

export default ShopTable;