// ShopTable.jsx
import React from 'react';
import Image from 'next/image';





const ShopTable = () => {
    
  
   
  return (
    <div className='bg-black text-white  '>
    <h1 className="text-4xl font-bold pt-10 px-4">Shops</h1>
    
    {/* Your table and other components go here */}
    <div class="px-4 py-3 @container pt-10">
              <div class="flex overflow-hidden rounded-xl  border border-[#3b4954] bg-[#111518]">
                <table class="flex-1">
                  <thead>
                  <tr class="bg-[#1b2227]">
                      <th class=" px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Shop Name</th>
                      <th class=" px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Shop Description</th>
                      <th class=" px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">Shop Logo</th>
                      <th class="px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal"></th>
                      <th class="px-4 py-3 text-left text-white w-60  text-sm font-medium leading-normal">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-t border-t-[#3b4954]">
                      <td class=" h-16 px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">Bosschiq</td>
                      <td class=" h-16 px-4 py-2 w-[400px] text-gray-400 text-sm font-normal leading-normal">Where you meet Boss Ladies Wear</td>
                      <td class=" h-16 px-4 py-2 w-60 text-sm font-normal leading-normal">
                        
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
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4  bg-red-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Delete</span>
                        </button>
                      </td>
                      
                      
                    </tr>
                    <tr class="border-t border-t-gray-600">
                      <td class=" h-[72px] px-4 py-2 w-96 text-white text-sm font-normal leading-normal">KakaLuxe</td>
                      <td class=" h-[72px] px-4 py-2 w-96 text-[#9cacba] text-sm font-normal leading-normal">Where you meet MenLuxe Wear</td>
                      <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        
                      </td>
                      <td class=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-700 text-white text-sm font-medium leading-normal w-full"
                        >
                          <span class="truncate">Edit</span>
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