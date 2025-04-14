import React from 'react'
import Testing from '../Common/Testing'

export default function AddSubSubCategory() {
    return (
        <div className='max-w-full grid grid-cols-[20%_auto]'>
       
             <Testing />
       
       
             <div className='absolute top-[19%] left-[25%] py-5 lg:w-[70%]  mx-auto bg-white'>
            <div class="max-w-[1220px] mx-auto py-5"><h3 class="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">Add Sub Category</h3><form autocomplete="off" class="border border-t-0 p-3 rounded-b-md border-slate-400"><div class="flex gap-5"><div class="w-1/3"><label for="categoryImage" class="block  text-md font-medium text-gray-900">Category Image</label><div class="dropify-wrapper" style="height: 273.2px;"><div class="dropify-message"><span class="file-icon"> <p>Drag and drop </p></span><p class="dropify-error">Oops, something went wrong</p></div><div class="dropify-loader"></div><div class="dropify-errors-container"><ul></ul></div><input type="file" accept="image/*" name="categoryImage" id="categoryImage" class="dropify" data-height="260"/><button type="button" class="dropify-clear">Remove</button><div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p><p class="dropify-infos-message">Drag and drop </p></div></div></div></div></div><div class="w-2/3"><div class="mb-5"><label class="block mb-5 text-md font-medium text-gray-900">Parent Category Name</label><select name="parentCatSelectBox" class="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"><option value="">Select Category</option><option value="Mens">Men's</option><option value="Women">Women</option><option value="Sale">Sale</option></select></div><div class="mb-5"><label class="block mb-5 text-md font-medium text-gray-900">Sub Category Name</label><select name="parentCatSelectBox" class="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"><option value="">Select Category</option><option value="Mens">Men's</option><option value="Women">Women</option><option value="Sale">Sale</option></select></div><div class="mb-5"><label for="categoryName" class="block  text-md font-medium text-gray-900">Category Name</label><input type="text" name="categoryName" id="categoryName" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Category Name"/></div><div class="mb-5"><label for="order" class="block  text-md font-medium text-gray-900">Order</label><input type="number" name="order" id="order" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Order"/></div></div></div><button type="submit" class="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5">Add Sub Category</button></form></div>

        </div>
        </div   >
    )
}
