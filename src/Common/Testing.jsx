// Yeh First Method Ise Karne Ka

// import React, { useState } from 'react'
// import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
// import { Link } from 'react-router'
// import { menulist } from '../Data/MenuList'
// import { RiDashboard2Fill } from 'react-icons/ri'

// export default function Testing() {


//     let [currentId, setcurrentId] = useState(0)

//     return (
//         <div className='  overflow-y-scroll scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200 w-[20%] h-[100vh] bg-gray-400 fixed top-0 left-0 lg:block hidden'>

//             <div className='max-w-full p-4 mt-4 mx-1 '>
//                 <a href="home"><img className='bg-gray-200 mx-auto py-2' src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="" />
//                 </a>
//                 <div className='border-b-1 py-2 mx-1'></div>
//                 <ul className=" font-medium">
//                     <a href="/dashboard">
//                         <Link to={'/'} className="pb-3">
//                             <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                             <RiDashboard2Fill />
//                                 <span className="ms-3">Dashboard</span>
//                             </div>
//                         </Link>
//                     </a>
//                     <div className='border-b-1 mx-1 mb-3'></div>
//                     {menulist.map((items, index) => {
//                         return (

//                             <li  className="cursor-pointer">
//                                 <div onClick={() => setcurrentId(items.id == currentId ? 0 : items.id)} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                     {/* <FaUserAlt /> */} {items.icon}
//                                     <span className="flex-1 ms-3 whitespace-nowrap">{items.menu}</span>
//                                     <div> {(currentId == items.id) ? <IoChevronUp /> : <IoChevronDown />}  </div>
//                                 </div>
//                                 <ul className={`${currentId === items.id  ? "" : "hidden"}`}>

//                                         {/* <Link to={`${items.name}`}> */}
//                                         <Link to={`/${items.name}`}>
//                                             <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-[13px]">
//                                                 {items.iconradio}
//                                                 <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">{items.submenu}</span>
//                                             </button>
//                                         </Link>


//                                         {/* <Link to={`${items.name2}`}> */}
//                                         <Link to={`/${items.name2}`}>
//                                             <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-[13px]">
//                                                 {items.iconradio}
//                                                 <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">{items.submenu2}</span></button>
//                                         </Link>

//                                 </ul>
//                             </li>
//                         )

//                     })}

//                 </ul>
//             </div>
//         </div>
//     )
// }

//  yeh second method hai ise krne ka


// import React, { useState, useEffect } from 'react';
// import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
// //  Step 1: Import useLocation from react-router 
// import { Link, useLocation } from 'react-router';
// import { menulist } from '../Data/MenuList';
// import { RiDashboard2Fill } from 'react-icons/ri';

// export default function Testing() {
//     // Step 2: Add useLocation hook inside component
//     const location = useLocation();
//     const [activeMenu, setActiveMenu] = useState(null);

//     // Step 3: Use useEffect to keep submenu open based on route
//     useEffect(() => {
//         // Automatically open the menu based on current path
//         menulist.forEach(item => {
//             if (
//                 location.pathname === `/${item.name}` ||
//                 location.pathname === `/${item.name2}`
//             ) {
//                 setActiveMenu(item.id);
//             }
//         });
//     }, [location.pathname]);


//     const toggleMenu = (id) => {
//         setActiveMenu(prev => (prev === id ? null : id));
//     };



//     return (
//         <div className='overflow-y-scroll scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200 w-[20%] h-[100vh] bg-gray-400 fixed top-0 left-0 lg:block hidden'>
//             <div className='max-w-full p-4 mt-4 mx-1'>
//                 <a href="home">
//                     <img className='bg-gray-200 mx-auto py-2' src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="logo" />
//                 </a>
//                 <div className='border-b-1 py-2 mx-1'></div>
//                 <ul className="font-medium">
//                     <Link to='/'>
//                         <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                             <RiDashboard2Fill />
//                             <span className="ms-3">Dashboard</span>
//                         </div>
//                     </Link>
//                     <div className='border-b-1 mx-1 mb-3'></div>

//                     {menulist.map((items) => (
//                         <li key={items.id} className="cursor-pointer">
//                             <div
//                                 onClick={() => toggleMenu(items.id)}
//                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                             >
//                                 {items.icon}
//                                 <span className="flex-1 ms-3 whitespace-nowrap">{items.menu}</span>
//                                 <div>{activeMenu === items.id ? <IoChevronUp /> : <IoChevronDown />}</div>
//                             </div>

//                             {activeMenu === items.id && (
//                                 <ul>
//                                     <li>
//                                         <Link to={`/${items.name}`}>
//                                             <div className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-[13px]">
//                                                 {items.iconradio}
//                                                 <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">{items.submenu}</span>
//                                             </div>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to={`/${items.name2}`}>
//                                             <div className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-[13px]">
//                                                 {items.iconradio}
//                                                 <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">{items.submenu2}</span>
//                                             </div>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }


//  yeh third method hai ise krne ka

import React, { useState, useEffect } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
//  Step 1: Import useLocation from react-router 
import { Link, useLocation } from 'react-router';
import { menulist } from '../Data/MenuList';
import { RiDashboard2Fill } from 'react-icons/ri';

export default function Testing() {
    // Step 2: Add useLocation hook inside component
  const location = useLocation(); //  added for tracking route
  const [activeMenu, setActiveMenu] = useState(null);

  // Step 3: Use useEffect to keep submenu open based on route
  useEffect(() => {
    menulist.forEach(item => {
      if (
        location.pathname === `/${item.name}` ||
        location.pathname === `/${item.name2}`
      ) {
        setActiveMenu(item.id); //  open menu if path matches
      }
    });
  }, [location.pathname]);

  return (
    <div className='overflow-y-scroll scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200 w-[20%] h-[100vh] bg-gray-400 fixed top-0 left-0 lg:block hidden'>
      <div className='max-w-full p-4 mt-4 mx-1'>
        <a href="home">
          <img className='bg-gray-200 mx-auto py-2' src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="logo" />
        </a>
        <div className='border-b-1 py-2 mx-1'></div>
        <ul className="font-medium">
          <Link to='/'>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <RiDashboard2Fill />
              <span className="ms-3">Dashboard</span>
            </div>
          </Link>
          <div className='border-b-1 mx-1 mb-3'></div>

          {menulist.map((items) => (
            <li key={items.id} className="cursor-pointer">
              <div
                onClick={() => setActiveMenu(prev => (prev === items.id ? null : items.id))}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {items.icon}
                <span className="flex-1 ms-3 whitespace-nowrap">{items.menu}</span>
                <div>{activeMenu === items.id ? <IoChevronUp /> : <IoChevronDown />}</div>
              </div>

              {activeMenu === items.id && (
                <ul>
                  <li>
                    <Link to={`/${items.name}`}>
                      <div className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-[13px]">
                        {items.iconradio}
                        <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">{items.submenu}</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/${items.name2}`}>
                      <div className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-[13px]">
                        {items.iconradio}
                        <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">{items.submenu2}</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
