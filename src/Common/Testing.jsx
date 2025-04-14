import React, { useState } from 'react'
import { FaSlidersH, FaUserAlt } from 'react-icons/fa'
import { FaBagShopping, FaBarsStaggered, FaClockRotateLeft, FaMessage, FaUserPen } from 'react-icons/fa6'
import { FcFaq } from 'react-icons/fc'
import { IoMdRadioButtonOn } from 'react-icons/io'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { LuNotepadText } from 'react-icons/lu'
import { MdInvertColors } from 'react-icons/md'
import { SiMaterialdesign } from 'react-icons/si'
import { TbGpsFilled } from 'react-icons/tb'
import { Link } from 'react-router'
import { menulist } from '../Data/MenuList'
import { RiDashboard2Fill } from 'react-icons/ri'

export default function Testing() {
 

    let [currentId, setcurrentId] = useState(0)

    return (
        <div className='  overflow-y-scroll scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-200 w-[20%] h-[100vh] bg-gray-400 fixed top-0 left-0 lg:block hidden'>

            <div className='max-w-full p-4 mt-4 mx-1 '>
                <a href="home"><img className='bg-gray-200 mx-auto py-2' src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="" />
                </a>
                <div className='border-b-1 py-2 mx-1'></div>
                <ul className=" font-medium">
                    <a href="/dashboard">
                        <Link to={'/'} className="pb-3">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <RiDashboard2Fill />
                                <span className="ms-3">Dashboard</span>
                            </div>
                        </Link>
                    </a>
                    <div className='border-b-1 mx-1 mb-3'></div>
                    {menulist.map((items, index) => {
                        return (

                            <li  className="cursor-pointer">
                                <div onClick={() => setcurrentId(items.id == currentId ? 0 : items.id)} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {/* <FaUserAlt /> */} {items.icon}
                                    <span className="flex-1 ms-3 whitespace-nowrap">{items.menu}</span>
                                    <div> {(currentId == items.id) ? <IoChevronUp /> : <IoChevronDown />}  </div>
                                </div>
                                <ul className={`${currentId === items.id  ? "" : "hidden"}`}>
                                    
                                        {/* <Link to={`${items.name}`}> */}
                                        <Link to={`/${items.name}`}>
                                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-[13px]">
                                                {items.iconradio}
                                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">{items.submenu}</span>
                                            </button>
                                        </Link>
                                    
                              
                                        {/* <Link to={`${items.name2}`}> */}
                                        <Link to={`/${items.name2}`}>
                                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-[13px]">
                                                {items.iconradio}
                                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">{items.submenu2}</span></button>
                                        </Link>
                                
                                </ul>
                            </li>
                        )

                    })}
                  
                </ul>
            </div>
        </div>
    )
}
