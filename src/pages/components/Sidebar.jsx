
import Link from 'next/link';


const Sidebar = () => {
  return (
    <div className="bg-black text-white w-64 h-screen p-5">
      <div className="pt-5 flex ">
  <div>
  <p className=" font-bold text-2xl">SHOPYANGU</p>
  </div>
  
      </div>
      <ul className='pt-10'>
      
        <li className="mb-4 flex group  gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
        <svg class="size-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
          <Link href="/">
            Dashboard
          </Link>
        </li>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <li className="mb-4 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
        <ion-icon name="bar-chart-outline" style={{ fontSize: '24px' }}></ion-icon>
          <Link href="/shop-management">
            Shop Management
          </Link>
        </li>
        <li className="mb-4 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
        <ion-icon name="cart-outline" style={{ fontSize: '24px' }}></ion-icon>
          <Link href="/product-management">
            Product Management
          </Link>
        </li>
        <li className="mb-4 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
        <svg class="size-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>
          <Link href="/reports">
            Reports
          </Link>
        </li>
        <li className="mb-4 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
        <ion-icon name="settings" style={{ fontSize: '24px' }}></ion-icon>
          <Link href="/settings">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
