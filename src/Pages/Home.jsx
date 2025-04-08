import React from 'react'
import { FaChevronDown, FaUser } from 'react-icons/fa'
import { IoMdRadioButtonOn } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import Testing from '../Common/Testing'

export default function Home() {
    return (
        <div className='max-w-full grid grid-cols-[20%_auto]'>
            <div className='  overflow-y-scroll w-[20%] h-[100vh] bg-amber-200 fixed top-0 left-0 lg:block hidden'>
                <div >
                    <a href="home"><img className=' mx-auto py-2' src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="" />
                    </a>
                    <div className='border-b-1 py-2 mx-1'></div>
                    <div className='max-w-full p-4 mt-4 mx-1 '>
                        <Testing />
                    </div>
                </div>
            </div>


{/* Second Div Blank */}
            <div>
            </div>
        </div>
    )
}
