import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FiLogOut, FiUser } from 'react-icons/fi'
import { LuMenu } from 'react-icons/lu'
import { MdBusiness } from 'react-icons/md'

export default function Header() {
  return (
    <div>
      <div className='max-w-full grid grid-cols-[20%_auto]'>
        <div className=''> </div>

        {/* Second Grid Div Start */}
        <div className=' h-[92vh] '>
          <nav className="bg-white border-gray-200 dark:bg-gray-100">
            <div className="max-w-screen-xl flex flex-wrap-reverse  items-center justify-between mx-auto p-4">

              {/* <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                </button>
              </div> */}

              {/* <div class="items-center justify-between hidden w-full  md:flex md:w-auto md:order-1" id="navbar-user">
                <ul class="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li >
                    <a href="#" className="block  py-2 px-3 text-white bg-gray-700 rounded-sm md:bg-transparent md:text-gray-600 md:p-0 md:dark:text-gray-500" aria-current="page"><FaBars /></a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</a>
                  </li>
                </ul>
              </div> */}


              {/* Left: Menu and Title */}
              <div className='flex gap-[10px] items-center'>
                <LuMenu className='text-[25px] text-gray-500' />
                <h3 className='text-[20px] text-gray-500 font-bold'>Dashboard</h3>
              </div>

              {/* Right: Profile Dropdown */}
              <div className="relative inline-block text-left group">
                {/* Profile Image */}
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Profile"
                  className="rounded-[100%] w-[50px] h-[50px] cursor-pointer"
                />

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 border-1 border-[#ccc]">
                  <a
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b-1 border-[#ccc]"
                  >
                    <FiUser className="mr-2 " />
                    Profile
                  </a>
                  <a
                    href="/company-profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b-2 border-[#000000]"
                  >
                    <MdBusiness className="mr-2" />
                    Company Profile
                  </a>
                  <a
                    href="/logout"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiLogOut className="mr-2" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <div className='border-b-1'></div>
            <div className='mt-1 ps-1'>Home / User / view</div>
            <div className='border-b-1 mt-2'></div>
          </nav>
        </div>


        {/* Second Grid Div End */}
      </div>

    </div>
  )
}
