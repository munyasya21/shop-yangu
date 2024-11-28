import Link from "next/link";




export default function Sidebar() {
    return (
<div>
<div class="flex grow flex-col gap-y-5 overflow-y-auto max-h-full  px-6 w-60 pl-10">
  <div class="flex ">
   </div>
  <nav class="flex flex-1 flex-col ">
    <ul role="list" class="flex flex-1 flex-col gap-y-7">
      <li>
        <ul role="list" class="-mx-2 space-y-1">
          <li>
           
            <a href="" class="group flex gap-x-3 rounded-md bg-gray-800 p-2 text-sm/6 font-semibold text-white">
              <svg class="size-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Dashboard
              
            </a>
          </li>
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
          <li>
            <a href="" class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
            <ion-icon name="bar-chart-outline" style={{ fontSize: '24px' }}></ion-icon>
              Shop Management
            </a>
          </li>
          <li>
            <a href="" class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
            <ion-icon name="cart-outline" style={{ fontSize: '24px' }}></ion-icon>
              Product Management
  
            </a>
          </li>
          
          <li>
            <a href="#" class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
              <svg class="size-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>
              Reports
            </a>
          </li>
          <li>
            <a href="#" class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
            <ion-icon name="settings" style={{ fontSize: '24px' }}></ion-icon>
              Settings
            </a>
          </li>
        </ul>
      </li>
     </ul>
  </nav>
</div>

</div>

    )
    
    
    
}






