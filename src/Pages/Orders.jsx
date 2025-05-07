import React from 'react'
import Testing from '../Common/Testing'

export default function Orders() {
    return (
        <div className='w-full grid grid-cols-[20%_auto]'>

            <Testing />


            <div className='absolute top-[19%] left-[25%] py-5 lg:w-[70%] max-h-screen  mx-auto bg-white'>


                <div class="max-w-[1220px] mx-auto py-5">
                    <h3 class="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">Order's List</h3>
                    <div class="border border-t-0 rounded-b-md border-slate-400">
                        <div class="relative overflow-x-auto">
                            <table class="w-full  text-left rtl:text-right text-gray-500 ">
                                <thead class="text-sm text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                                        </th>
                                        <th scope="col" class="px-6 py-3">S. No.</th>
                                        <th scope="col" class="px-6 py-3">Order ID</th>
                                        <th scope="col" class="px-6 py-3">Name</th>
                                        <th scope="col" class="px-6 py-3">Quantity</th>
                                        <th scope="col" class="px-6 py-3">Price</th>
                                        <th scope="col" class="px-6 py-3">Date</th>
                                        <th scope="col" class="px-6 py-3">Status</th>
                                        <th scope="col" class="px-6 py-3">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th scope="row" class="px-6 py-4 text-[18px] font-semibold text-gray-900 whitespace-nowrap "><input id="purple-checkbox" name="deleteCheck" type="checkbox" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 " value="" />
                                        </th>
                                        <td class="px-6 py-4 font-bold">1</td>
                                        <td class="px-6 py-4">Frank01</td>
                                        <td class="px-6 py-4 font-semibold">Roshan Chaurasia</td>
                                        <td class="px-6 py-4 text-center">2</td>
                                        <td class="px-6 py-4">₹ 3500</td>
                                        <td class="px-6 py-4">10/06/2024</td>
                                        <td class="px-6 py-4">Processing...</td>
                                        <td class="px-6 py-4">
                                            <button data-modal-target="order-modal" data-modal-toggle="order-modal" type="button" class=" mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">View</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
