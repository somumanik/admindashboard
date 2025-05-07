import React from 'react'

export default function Heeder() {
    return (
        <div>

            <div className='w-full'>
                <nav className='bg-white border-gray-200 lg:px-6 py-[15px] border-b-2'>
                    <div className='flex justify-between items-center'>
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
                </nav>
            </div>
        </div>
    )
}
