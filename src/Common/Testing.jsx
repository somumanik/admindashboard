import React, { useState } from 'react'
import { FaSlidersH, FaUserAlt } from 'react-icons/fa'
import { FaBagShopping, FaBarsStaggered, FaClockRotateLeft, FaMessage, FaUserPen } from 'react-icons/fa6'
import { FcFaq } from 'react-icons/fc'
import { IoMdRadioButtonOn } from 'react-icons/io'
import { IoChevronDown } from 'react-icons/io5'
import { LuNotepadText } from 'react-icons/lu'
import { MdInvertColors } from 'react-icons/md'
import { SiMaterialdesign } from 'react-icons/si'
import { TbGpsFilled } from 'react-icons/tb'

export default function Testing() {
    let [passwordstatus, setPasswordstatus] = useState(false)
    let [passwordstatusEnq, setPasswordstatusEnq] = useState(false)
    let [passwordstatuscolor, setPasswordstatuscolor] = useState(false)
    let [passwordstatusMat, setPasswordstatusMat] = useState(false)
    let [passwordstatusParCa, setPasswordstatusParCa] = useState(false)
    let [passwordstatusSubCa, setPasswordstatusSubCa] = useState(false)
    let [passwordstatusSubSubCa, setpasswordstatusSubSubCa] = useState(false)
    let [passwordstatusProd, setpasswordstatusProd] = useState(false)
    let [passwordstatusWhyChooUs, setpasswordstatusWhyChooUs] = useState(false)
    let [passwordstatusOrde, setpasswordstatusOrde] = useState(false)
    let [passwordstatusSlider, setpasswordstatusSlider] = useState(false)
    let [passwordstatusCountr, setpasswordstatusCountr] = useState(false)
    let [passwordstatusTesti, setpasswordstatusTesti] = useState(false)
    let [passwordstatusFaq, setpasswordstatusFaq] = useState(false)
    let [passwordstatusTerms, setpasswordstatusTermsa] = useState(false)

    return (
        <div>
            <ul className=" font-medium">
                <a href="/dashboard">
                    <li className="pb-3">
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21"><path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"></path><path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"></path></svg><span className="ms-3">Dashboard</span>
                        </div>
                    </li>
                </a>
                <div className='border-b-1 mx-1 mb-3'></div>
                {/* FirstUser Link Start */}
                <li onClick={() => setPasswordstatus(!passwordstatus)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaUserAlt />
                        <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatus ? "block" : "hidden"}>
                        <a href="/user">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <div><IoMdRadioButtonOn /></div>
                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View User</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* FirstUser Link End */}
                {/* Enquiry Link Start */}
                <li onClick={() => setPasswordstatusEnq(!passwordstatusEnq)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaMessage />
                        <span className="flex-1 ms-3 whitespace-nowrap">Enquirys</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusEnq ? "block" : "hidden"}>
                        <a href="/enquiry">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />
                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Contact Enquirys</span>
                                </button>
                            </li>
                        </a>
                        <a href="/newsletter"><li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoMdRadioButtonOn />
                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Newsletters</span></button></li></a>
                    </ul>
                </li>
                {/* Enquiry Link End */}

                {/* Color Link Start */}
                <li onClick={() => setPasswordstatuscolor(!passwordstatuscolor)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <MdInvertColors />
                        <span className="flex-1 ms-3 whitespace-nowrap">Colors</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatuscolor ? "block" : "hidden"}>
                        <a href="/color/add">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />
                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Color</span>
                                </button>
                            </li>
                        </a>
                        <a href="/color/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />
                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Color</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Color Link End */}
                {/* Materials Link Start */}
                <li onClick={() => setPasswordstatusMat(!passwordstatusMat)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <SiMaterialdesign />
                        <span className="flex-1 ms-3 whitespace-nowrap">Materials</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusMat ? "block" : "hidden"}>
                        <a href="/material/add">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">   <IoMdRadioButtonOn /><span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Material</span></button>
                            </li></a>
                        <a href="/material/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">   <IoMdRadioButtonOn />
                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Material</span>
                                </button>
                            </li></a>
                    </ul>
                </li>
                {/* Materials Link End */}
                {/* Parent Categorys Link Start */}
                <li onClick={() => setPasswordstatusParCa(!passwordstatusParCa)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><FaBarsStaggered />
                        <span className="flex-1 ms-3 whitespace-nowrap">Parent Categorys</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusParCa ? "block" : "hidden"}>
                        <a href="/category/add">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />
                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Category</span>
                                </button>
                            </li></a>
                        <a href="/category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />
                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Category</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Parent Categorys Link End */}
                {/* Sub Categorys Link Start */}
                <li onClick={() => setPasswordstatusSubCa(!passwordstatusSubCa)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaBarsStaggered />
                        <span className="flex-1 ms-3 whitespace-nowrap">  Sub Categorys</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusSubCa ? "block" : "hidden"}>
                        <a href="/category/sub-category/add">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />
                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Sub Category</span></button>
                            </li></a>
                        <a href="/category/sub-category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />
                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Sub Category</span></button>
                            </li></a>
                    </ul>
                </li>
                {/* Sub Categorys Link End */}
                {/* Sub Sub Categorys Link Start */}
                <li onClick={() => setpasswordstatusSubSubCa(!passwordstatusSubSubCa)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaBarsStaggered />
                        <span className="flex-1 ms-3 whitespace-nowrap">Sub Sub Categorys</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusSubSubCa ? "block" : "hidden"}><a href="/category/sub-sub-category/add">
                        <li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoMdRadioButtonOn />
                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Sub Sub Category</span>
                            </button>
                        </li></a>
                        <a href="/category/sub-sub-category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />

                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Sub Sub Category</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Sub Sub Categorys Link End */}

                {/* Products Link Start */}
                <li onClick={() => setpasswordstatusProd(!passwordstatusProd)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaBagShopping />
                        <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusProd ? "block" : "hidden"}><a href="/category/sub-sub-category/add">
                        <li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoMdRadioButtonOn />
                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Product</span>
                            </button>
                        </li></a>
                        <a href="/category/sub-sub-category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />

                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Product</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Products Link End */}

                {/* Why Choose US Link Start */}
                <li onClick={() => setpasswordstatusWhyChooUs(!passwordstatusWhyChooUs)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaClockRotateLeft />
                        <span className="flex-1 ms-3 whitespace-nowrap">Why Choose US</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusWhyChooUs ? "block" : "hidden"}><a href="/category/sub-sub-category/add">
                        <li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoMdRadioButtonOn />
                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Why Choose US</span>
                            </button>
                        </li></a>
                        <a href="/category/sub-sub-category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />

                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Why Choose US</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Why Choose US Link Link End */}

                {/* Orders Link Start */}
                <li onClick={() => setpasswordstatusOrde(!passwordstatusOrde)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <LuNotepadText />
                        <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusOrde ? "block" : "hidden"}><a href="/category/sub-sub-category/add">
                        <li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoMdRadioButtonOn />
                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Orders</span>
                            </button>
                        </li></a>
                        <a href="/category/sub-sub-category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />

                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Orders</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Orders Link Link End */}

                {/* Sliders Link Start */}
                <li onClick={() => setpasswordstatusSlider(!passwordstatusSlider)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaSlidersH />
                        <span className="flex-1 ms-3 whitespace-nowrap">Sliders</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusSlider ? "block" : "hidden"}><a href="/category/sub-sub-category/add">
                        <li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoMdRadioButtonOn />
                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Sliders</span>
                            </button>
                        </li></a>
                        <a href="/category/sub-sub-category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />

                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Sliders</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Sliders Link Link End */}

                {/* Country Link Start */}
                <li onClick={() => setpasswordstatusCountr(!passwordstatusCountr)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <TbGpsFilled />
                        <span className="flex-1 ms-3 whitespace-nowrap">Country</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusCountr ? "block" : "hidden"}><a href="/category/sub-sub-category/add">
                        <li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoMdRadioButtonOn />
                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Country</span>
                            </button>
                        </li></a>
                        <a href="/category/sub-sub-category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />

                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Country</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Country Link End */}

                {/* Testimonials Link Start */}
                   <li onClick={() => setpasswordstatusTesti(!passwordstatusTesti)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaUserPen />
                        <span className="flex-1 ms-3 whitespace-nowrap">Testimonials</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusTesti ? "block" : "hidden"}><a href="/category/sub-sub-category/add">
                        <li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoMdRadioButtonOn />
                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Testimonials</span>
                            </button>
                        </li></a>
                        <a href="/category/sub-sub-category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />

                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Testimonials</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Testimonials Link Link End */}

                 {/* Faqs Link Start */}
                 <li onClick={() => setpasswordstatusFaq(!passwordstatusFaq)} className="cursor-pointer">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FcFaq />
                        <span className="flex-1 ms-3 whitespace-nowrap">Faqs</span>
                        <IoChevronDown />
                    </div>
                    <ul className={passwordstatusFaq ? "block" : "hidden"}><a href="/category/sub-sub-category/add">
                        <li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoMdRadioButtonOn />
                                <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">Add Faqs</span>
                            </button>
                        </li></a>
                        <a href="/category/sub-sub-category/view">
                            <li>
                                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <IoMdRadioButtonOn />

                                    <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">View Faqs</span>
                                </button>
                            </li>
                        </a>
                    </ul>
                </li>
                {/* Faqs Link Link End */}

            </ul>

        </div>
    )
}
