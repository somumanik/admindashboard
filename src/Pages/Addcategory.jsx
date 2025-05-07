import React from 'react'
import Testing from '../Common/Testing'

export default function Addcategory() {
    return (
        <div className='max-w-full grid grid-cols-[20%_auto]'>

            <Testing />


            <div className='absolute top-[19%] left-[25%] py-5 lg:w-[70%]  mx-auto bg-white'>
                <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addCategory'>
                    <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                        <h3 className='text-[26px] font-semibold'>Add Category</h3>
                    </div>
                    <div>
                        <form action="" className='p-2'>
                            <div className='grid grid-cols-[35%_auto] gap-5'>
                                <div className='p-2 mt-6' style={{ border: "1px solid #ccc" }}>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Category Image</label>
                                    <input type="file" />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Category Name</label>
                                    <input type="text" placeholder='Enter Category Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                    <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                                    <input type="number" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                                </div>
                            </div>


                            <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
                        </form>

                    </div>
                </section>
            </div>
        </div>
    )
}
