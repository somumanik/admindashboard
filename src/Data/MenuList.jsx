import { FaSlidersH, FaUserAlt } from 'react-icons/fa'
import { FaBagShopping, FaBarsStaggered, FaClockRotateLeft, FaMessage, FaUserPen } from 'react-icons/fa6'
import { FcFaq } from 'react-icons/fc'
import { IoMdRadioButtonOn } from 'react-icons/io'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { LuNotepadText } from 'react-icons/lu'
import { MdInvertColors } from 'react-icons/md'
import { SiMaterialdesign } from 'react-icons/si'
import { TbGpsFilled } from 'react-icons/tb'
export const menulist =
    [

        {
            id: 1,
            menu: "Users",
            // submenu: [
            //     {
            //         title: "Add User",
            //         path: "/adduser"
            //     },
            //     {
            //         title1: "View User",
            //         path1: "/viewuser"
            //     }
            // ],
            submenu: "Add User",
            submenu2: "View User",
            icon: <FaUserAlt />,
            iconradio: <IoMdRadioButtonOn />,
            name: "adduser",
            name2: "viewuser",

        },
        {
            id: 2,
            menu: "Enquirys",
            submenu: "Contact Enquiry",
            submenu2: "Newsletters",
            icon: <FaMessage />,
            iconradio: <IoMdRadioButtonOn />,
            name: "contact-enquiry",
            name2: "newsletters",
        },
        {
            id: 3,
            menu: "Colors",
            submenu: "Add Color",
            submenu2: "View Color",
            icon: <MdInvertColors />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-color",
            name2: "view-color",
        },
        {
            id: 4,
            menu: "Materials",
            submenu: "Add Materials",
            submenu2: "View Materials",
            icon: <SiMaterialdesign />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-material",
            name2: "view-material",
        },
        {
            id: 5,
            menu: "Parent Categorys",
            submenu: "Add Categorys",
            submenu2: "View Categorys",
            icon: <FaBarsStaggered />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-category",
            name2: "view-category",
        },
        {
            id: 6,
            menu: "Sub Categorys",
            submenu: "Add Categorys",
            submenu2: "View Categorys",
            icon: <FaBarsStaggered />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-category",
            name2: "view-category",
        },
        {
            id: 7,
            menu: "Sub Sub Categorys",
            submenu: "Add Sub Categorys",
            submenu2: "View Sub Categorys",
            icon: <FaBarsStaggered />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-sub-categorys",
            name2: "view-sub-category",

        },
        {
            id: 8,
            menu: "Products",
            submenu: "Add Product",
            submenu2: "View Product",
            icon: <FaBagShopping />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-product",
            name2: "view-product",
        },
        {
            id: 9,
            menu: "Why Choose Us",
            submenu: "Add Why Choose Us",
            submenu2: "View Why Choose Us",
            icon: <FaClockRotateLeft />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-why-choose-us",
            name2: "view-why-choose-us",
        },
        {
            id: 10,
            menu: "Orders",
            submenu: "orders",
            icon: <LuNotepadText />,
            iconradio: <IoMdRadioButtonOn />,
            name: "orders",
            name2: "-",

        },
        {
            id: 11,
            menu: "Sliders",
            submenu: "Add Slider",
            submenu2: "View Slider",
            icon: <FaSlidersH />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-slider",
            name2: "view-slider",
        },
        {
            id: 12,
            menu: "Country",
            submenu: "Add Country",
            submenu2: "View Country",
            icon: <TbGpsFilled />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-country",
            name2: "view-country",
        },
        {
            id: 13,
            menu: "Testimonials",
            submenu: "Add Testimonials",
            submenu2: "View Testimonials",
            icon: <FaUserPen />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-testimonials",
            name2: "view-testimonials",
        },
        {
            id: 14,
            menu: "Faqs",
            submenu: "Add Faq",
            submenu2: "View Faq",
            icon: <FcFaq />,
            iconradio: <IoMdRadioButtonOn />,
            name: "add-faq",
            name2: "view-faq",
        },
        {
            id: 15,
            menu: "Terms & Conditions",
            submenu: "Conditions",
            icon: <FaUserAlt />,
            iconradio: <IoMdRadioButtonOn />,
            name: "conditions",
            name2: "-",
        },
    ]