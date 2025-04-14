import React from 'react'
import Testing from '../Common/Testing'

export default function AddTestimonial() {
    return (
        <div classNameName='w-full grid grid-cols-[20%_auto]'>

            <Testing />


            <div className='absolute top-[19%] left-[25%] py-5 lg:w-[70%] max-h-screen  mx-auto bg-white'>

                <div className="max-w-[1220px] mx-auto py-5">
                    <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">Add Slider</h3>
                    <form autocomplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
                        <div className="flex gap-5">
                            <div className="w-1/3">
                                <label className="block  text-md font-medium text-gray-900">Choose Image</label>
                                <div className="dropify-wrapper h-[263.2px] border-1">
                                    <div className="dropify-message">
                                        <span className="file-icon">
                                            <p className='p-1'>Drag and drop </p>
                                        </span>
                                        <p className="dropify-error p-1">Oops, something went wrong</p>
                                    </div>
                                    <div className="dropify-loader p-1">
                                    </div>
                                    <div className="dropify-errors-container">

                                    </div>
                                    <input type="file" name="Image" id="Image" className="dropify" data-height="250" />
                                    <button type="button" className="dropify-clear">Remove</button>
                                    <div className="dropify-preview">
                                        <span className="dropify-render"></span>
                                        <div className="dropify-infos">
                                            <div className="dropify-infos-inner">
                                                <p className="dropify-filename">
                                                    <span className="file-icon"></span>
                                                    <span className="dropify-filename-inner"></span>
                                                </p>
                                                <p className="dropify-infos-message">Drag and drop </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/3">
                                <div className="mb-5">
                                    <label for="Title" className="block mb-1 text-md font-medium text-gray-900">Name</label>
                                    <input type="text" name="Name" id="Name" className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Name" />
                                </div>
                                <div className="mb-5">
                                    <label for="Designation" className="block mb-1 text-md font-medium text-gray-900">Designation</label>
                                    <input type="number" name="Designation" id="Designation" className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Designation" />
                                </div>
                                <div className="mb-5">
                                    <label for="Rating" className="block mb-1 text-md font-medium text-gray-900">Rating</label>
                                    <input type="number" name="Rating" id="Rating" className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Rating" />
                                </div>
                                <div className="mb-5">
                                    <label for="Order" className="block mb-1 text-md font-medium text-gray-900">Order</label>
                                    <input type="number" name="Order" id="Order" className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Order" />
                                </div>
                                <div className="mb-5">
                                    <label for="Message" className="block mb-1 text-md font-medium text-gray-900">Message</label>
                                    <textarea name="Message" id="Message" className="text-[19px] resize-none h-[100px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Message"> </textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5">Add Testimonial</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
