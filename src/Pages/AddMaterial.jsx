import React from 'react'
import Testing from '../Common/Testing'

export default function AddMaterial() {
  return (
    <div className='max-w-full grid grid-cols-[20%_auto]'>

      <Testing />


      <div className='absolute top-[19%] left-[25%] py-5 lg:w-[70%]  mx-auto bg-white'>
        <div class="max-w-[1220px] mx-auto py-5">
          <h3 class="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Add Material
          </h3>
          <form autocomplete="off" class="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div class="">
              <div class="mb-5">
                <label for="Name" class="block  text-md font-medium text-gray-900">Category Name</label>
                <input type="text" name="Name" id="Name" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Material Name" />
              </div>
              <div class="mb-5">
                <label for="order" class="block  text-md font-medium text-gray-900">Order</label>
                <input type="number" name="order" id="order" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Order" />
              </div>
            </div>
            <button type="submit" class="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5">
              Add Material
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
