import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import Testing from '../Common/Testing'

export default function ViewUser() {
    return (
        <div className='max-w-full grid grid-cols-[20%_auto]'>

                 <div className='  overflow-y-scroll w-[20%] h-[100vh]  fixed top-0 left-0 lg:block hidden'>
                                <div >
                                    <a href="home"><img className=' mx-auto py-2' src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="" />
                                    </a>
                                    <div className='border-b-1 py-2 mx-1'></div>
                                    <div className='max-w-full p-4 mt-4 mx-1 '>
                                        <Testing/>
                                    </div>
                                </div>
                            </div>



            <div className='fixed top-[15%] left-[20%] p-5 lg:w-[80%]  mx-auto'>
                <div className=' grid grid-cols-3 my-5 gap-4'>

                    <div className='bg-indigo-500 rounded-[10px] h-[200px]'>
                        <div className='flex justify-between pt-4 px-4 items-center'>
                            <h1 className='text-[25px] font-bold text-white'>26K <span className='text-[20px]'>(-12.4% ↓)</span></h1>
                            <CiMenuKebab className='text-[20px] font-bold text-white' />
                        </div>
                        <p className='text-[25px] font-semibold text-white px-4'>Users</p>
                    </div>

                    <div className='bg-blue-400 rounded-[10px] h-[200px]'>
                        <div className='flex justify-between pt-4 px-4 items-center'>
                            <h1 className='text-[25px] font-bold text-white'>$6,200  <span className='text-[20px]'>(40.9% ↑)</span></h1>
                            <CiMenuKebab className='text-[20px] font-bold text-white' />
                        </div>
                        <p className='text-[25px] font-semibold text-white px-4'>Product</p>
                    </div>

                    <div className='bg-yellow-300 rounded-[10px] h-[200px]'>
                        <div className='flex justify-between pt-4 px-4 items-center'>
                            <h1 className='text-[25px] font-bold text-white'>2.49%<span className='text-[20px]'>(84.7% ↑)</span></h1>
                            <CiMenuKebab className='text-[20px] font-bold text-white' />
                        </div>
                        <p className='text-[25px] font-semibold text-white px-4'>Category</p>
                    </div>

                    <div className='bg-red-500 rounded-[10px] h-[200px]'>
                        <div className='flex justify-between pt-4 px-4 items-center'>
                            <h1 className='text-[25px] font-bold text-white'>44K  <span className='text-[20px]'>(-23.6% ↓)</span></h1>
                            <CiMenuKebab className='text-[20px] font-bold text-white' />
                        </div>
                        <p className='text-[25px] font-semibold text-white px-4'>Orders</p>
                    </div>
                </div>



            </div>

        </div>
    )
}
