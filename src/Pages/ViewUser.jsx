import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import Testing from '../Common/Testing'

export default function ViewUser() {
    return (
        <div className='max-w-full grid grid-cols-[20%_auto]'>

            <Testing />


            <div className='fixed top-[16.4%] left-[25%] py-5 lg:w-[70%]  mx-auto bg-white'>
                {/* <div className=' grid grid-cols-3 my-5 gap-4'>

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
                    <div className='bg-red-500 rounded-[10px] h-[200px]'>
                        <div className='flex justify-between pt-4 px-4 items-center'>
                            <h1 className='text-[25px] font-bold text-white'>44K  <span className='text-[20px]'>(-23.6% ↓)</span></h1>
                            <CiMenuKebab className='text-[20px] font-bold text-white' />
                        </div>
                        <p className='text-[25px] font-semibold text-white px-4'>Orders</p>
                    </div>
                    <div className='bg-red-500 rounded-[10px] h-[200px]'>
                        <div className='flex justify-between pt-4 px-4 items-center'>
                            <h1 className='text-[25px] font-bold text-white'>44K  <span className='text-[20px]'>(-23.6% ↓)</span></h1>
                            <CiMenuKebab className='text-[20px] font-bold text-white' />
                        </div>
                        <p className='text-[25px] font-semibold text-white px-4'>Orders</p>
                    </div>
                    <div className='bg-red-500 rounded-[10px] h-[200px]'>
                        <div className='flex justify-between pt-4 px-4 items-center'>
                            <h1 className='text-[25px] font-bold text-white'>44K  <span className='text-[20px]'>(-23.6% ↓)</span></h1>
                            <CiMenuKebab className='text-[20px] font-bold text-white' />
                        </div>
                        <p className='text-[25px] font-semibold text-white px-4'>Orders</p>
                    </div>
                </div> */}
                <div className='border-1'>
                    <div className=' flex justify-between border-b-1 p-3'>
                        <p className='text-2xl'>View User</p>
                        <div className='flex gap-2'>
                            <button class="rounded-lg px-1 py-2 bg-blue-700 text-green-100 hover:bg-green-800 duration-300">Succ</button>
                            <button class="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">Success</button>
                            <button class="rounded-lg px-4 py-2 bg-red-700 text-green-100 hover:bg-green-800 duration-300">Success</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-2'>
                        <div className='flex gap-4 p-3'>
                            <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                            <p>Name</p>
                        </div>
                        <div className='flex gap-[75px]'>
                            <p className='mx-[18px]'>Email Id</p>
                            <p className='mx-[-20px]'>Mobile Number</p>
                            <p>Status</p>
                            <p className='pe-4'>Action</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-2'>
                        <div className='flex gap-4 p-3'>
                            <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                            <p>Neil Sims</p>
                        </div>
                        <div className='flex gap-12'>
                            <p>	xyz@gmail.com</p>
                            <p>	9876543210</p>
                            <button class="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">Success</button>
                            <p className='pe-4'>Action</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-2'>
                        <div className='flex gap-4 p-3'>
                            <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                            <p>Neil Sims</p>
                        </div>
                        <div className='flex gap-12 '>
                            <p>xyz@gmail.com</p>
                            <p>7011894875</p>
                            <button class="rounded-lg px-4 py-2 bg-red-700 text-green-100 hover:bg-green-800 duration-300">DeActivate</button>
                            <p className='pe-4'>Action</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
