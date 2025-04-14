import React from 'react'
import Testing from '../Common/Testing'

export default function ViewSubCategory() {
  return (
    <div className='max-w-full grid grid-cols-[20%_auto]'>

      <Testing />


      <div className='absolute top-[19%] left-[25%] py-5 lg:w-[70%]  mx-auto bg-white'>
        <div class="max-w-[1220px] mx-auto py-5">
          <div class="flex item-center justify-between bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            <h3 class="text-[26px] font-semibold">View Sub Category</h3>
            <div class="flex justify-between ">
              <div class="cursor-pointer text-[white] mx-3 rounded-[50%] w-[40px] h-[40px]  mx-3 rounded-[50%] w-[40px] h-[40px] flex items-center justify-center  text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z">
                  </path>
                </svg>
              </div>
              <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Change Status</button>
              <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete </button>
            </div>
          </div>
          <div class="border border-t-0 rounded-b-md border-slate-400"><div class="relative overflow-x-auto"><div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3">Parent Category Name</th>
                  <th scope="col" class="px-0 py-3">Sub Category Name</th>
                  <th scope="col" class=" w-[12%] ">Image</th>
                  <th scope="col" class=" w-[10%] ">Order</th>
                  <th scope="col" class="w-[10%]  ">Status</th>
                  <th scope="col" class="w-[6%]">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"><td class="w-4 p-4">
                  <div class="flex items-center"><input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                  <td scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"><div class="py-4">Shoe</div>
                  </td>
                  <td class=" py-4">Men</td><td class=" py-4">
                    <img class="w-10 h-10 rounded-full" src="https://packshifts.in/images/iso.png" alt="Jese image" />
                  </td>
                  <td class=" py-4">1</td>
                  <td class=" py-4">
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2">Active</button>
                  </td>
                  <td class=" py-4">
                    <a href="/category/sub-category/update/2222"><div class="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
                        </path>
                      </svg>
                    </div>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div >
  )
}
