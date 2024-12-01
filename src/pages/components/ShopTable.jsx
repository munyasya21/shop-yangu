// ShopTable.jsx
import React, { useState } from 'react';





const ShopTable = ({data}) => {
    
// console.log('data in table',data)

  const [name, setName] = useState('John Doe');
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  const handleEditClick = () => {
      setInputValue(name); // Set input value to current name
      setIsEditing(true);  // Switch to editing mode
  };

  const handleSaveClick = () => {
      setName(inputValue);  // Update the displayed name
      setIsEditing(false);   // Exit editing mode
  };
   // Add product to the database

   const addProduct = async () => {
    try {
      const response = await fetch('http://localhost:3000/shop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      console.log('shop added:', data);
      alert('shop added successfully!');
      window.location.reload();
      setNewShop({ name: '', description: '', logo: '', });

    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product!');
    }
  };

  // Delete product by ID

  const deleteShop = async (shopId,shopStock) => {
    if (shopStock > 0) {
      alert('Product has stock. Cannot delete product.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/products/${shopId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Product with ID ${shopId} deleted successfully.`);
        alert(`Product with ID ${shopId} deleted successfully.`);
        window.location.reload();
      } else {
        console.error(`Failed to delete shop with ID ${shopId}.`);
        alert(`Failed to delete shop with ID ${shopId}.`);
      }
    } catch (error) {
      console.error('Error deleting shop:', error);
      alert('An error occurred while deleting the product.');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    addShop();
  };

   
  return (
    <div className='bg-black text-white  '>
    <h1 className="text-4xl font-bold pt-10 px-4">Shops</h1>
    
    {/* Your table and other components go here */}
    <div class="px-4 py-3 @container pt-10">
              <div class="flex overflow-hidden rounded-xl  border border-[#3b4954] bg-[#111518]">
                <table class="flex-1">
                  <thead>
                  <tr class="bg-[#1b2227]">
                      <th class=" px-4 py-3 text-left text-white w-96 text-sm font-medium leading-normal">Shop name</th>
                      <th class=" px-4 py-3 text-left text-white w-96 text-sm font-medium leading-normal">Shop Description</th>
                      <th class=" px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">Shop Logo</th>
                      <th class="px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">Shop Logo</th>
                      <th class="px-4 py-3 text-left text-white w-60  text-sm font-medium leading-normal">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data?.map((shop,index) => 
                      (
                        <tr key={index} class="border-t border-t-[#d0dae2]">
                        <td class=" h-16 px-4 py-2 w-96 text-white text-sm font-normal leading-normal">
                        <a href="/clothing-management" class="text-white hover:underline">{shop.title}</a>
                        </td>
                        <td class=" h-16 px-4 py-2 w-96 text-gray-400 text-sm font-normal leading-normal">Where you meet Boss Ladies Wear</td>
                        <td class=" h-16 px-4 py-2 w-60 text-sm font-serif leading-normal">
                          Classic
                        </td>
                        <td class="table-c8234f4f-1a99-455f-8192-13d7066d4fcb-column-480 h-16 px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button
                            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4  bg-gray-700 text-white text-sm font-medium leading-normal w-full"
                          >
                            <span class="truncate">Edit</span>
                          </button>
                        </td>
                        <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button
                           onClick={() => deleteShop(shop.id)}
                            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4  bg-red-700 text-white text-sm font-medium leading-normal w-full"
                          >
                            <span class="truncate">Delete</span>
                          </button>
                        </td>
                        
                        
                      </tr>
                      )
                    )}

                  </tbody>
                </table>
              </div>
             
            </div>
            <div class="flex px-4 py-3 justify-end">
              <button
                class="flex min-w-20 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-blue-500 text-white gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <div class="text-white" data-icon="Plus" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </div>
                <span class="truncate">Create Shop</span>
              </button>
            </div>
    
    
  </div>
  );
  
};



export default ShopTable;