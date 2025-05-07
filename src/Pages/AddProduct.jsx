// import React, { useState } from 'react';
// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// // import { Bold, Italic, Underline, Strike } from '@tiptap/extension-text-style';  // For bold, italic, etc.
// import Testing from '../Common/Testing';

// export default function AddProduct() {

//     const editor = useEditor({
//         extensions: [StarterKit], // No need to add Bold, Italic, etc.
//         content: '',
//     });


//     return (
//         <div className='max-w-full grid grid-cols-[20%_auto]'>

//             <Testing />


//             <div className='absolute top-[19%] left-[25%] py-5 lg:w-[70%]  mx-auto bg-white'>
//                 <section className='mt-5 max-w-full rounded-md  ' id='addProduct'>

//                     <div>
//                         <form action="" className='p-2'>
//                             <div className='grid grid-cols-3 gap-5'>
//                                 <div className='flex flex-col gap-1'>
//                                 <label htmlFor="" className='text-[16px] font-semibold'>Category Image</label>
//                                     <div className='h-39' style={{ border: "1px solid #ccc" }}>

//                                         <input type="file" className='' name='' />

//                                     </div>
//                                     <label htmlFor="" className='text-[16px] font-semibold p-1'>Category Image</label>
//                                     <div className='h-39' style={{ border: "1px solid #ccc" }}>

//                                         <input type="file" className='' name=''/>

//                                     </div>
//                                     <label htmlFor="" className='text-[16px] font-semibold p-1'>Category Image</label>
//                                     <div className='h-39' style={{ border: "1px solid #ccc" }}>

//                                         <input type="file" className='' name=''/>

//                                     </div>

//                                 </div>

//                                 <div>
//                                     <label htmlFor="" className='text-[16px] font-semibold'>Product Name</label>
//                                     <input type="text" placeholder='Product Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Category </label>
//                                     <br />
//                                     <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                         <option value="">Select Category</option>
//                                         <option value="">Mobile Phones</option>
//                                         <option value="">Leptops</option>
//                                         <option value="">Men's Wear</option>
//                                         <option value="">Women's Wear</option>
//                                     </select>

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Select Meterial</label>
//                                     <br />
//                                     <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                         <option value="">Nothing Selected</option>
//                                         <option value="">Neem</option>
//                                         <option value="">Babbul</option>
//                                         <option value="">Neem</option>
//                                         <option value="">Babbul</option>
//                                     </select>

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Select Product Type</label>
//                                     <br />
//                                     <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                         <option value="">Nothing Selected</option>
//                                         <option value="">Featured</option>
//                                         <option value="">New Arrival</option>
//                                         <option value="">OnSale</option>
//                                     </select>

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Is Top Rated</label>
//                                     <br />
//                                     <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                         <option value="">Nothing Selected</option>
//                                         <option value="">Yes</option>
//                                         <option value="">No</option>
//                                     </select>


//                                     <label htmlFor="" className='text-[16px] font-semibold'>Actual Price</label>
//                                     <input type="text" placeholder='Actual Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Total In Stocks</label>
//                                     <input type="text" placeholder='Total In Stocks' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
//                                 </div>


//                                 <div>
//                                     <label htmlFor="" className='text-[16px] font-semibold'>Select Parent Category</label>
//                                     <br />
//                                     <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                         <option value="">Nothing Selected</option>
//                                         <option value="">Mobile Phones</option>
//                                         <option value="">Leptops</option>
//                                         <option value="">Men's Wear</option>
//                                         <option value="">Women's Wear</option>
//                                     </select>

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Sub Category</label>
//                                     <br />
//                                     <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                         <option value="">Nothing Selected</option>
//                                         <option value="">Neem</option>
//                                         <option value="">Babbul</option>
//                                         <option value="">Neem</option>
//                                         <option value="">Babbul</option>
//                                     </select>

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Select Color</label>
//                                     <br />
//                                     <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                         <option value="">Nothing Selected</option>
//                                         <option value="">Red</option>
//                                         <option value="">Green</option>
//                                         <option value="">Blue</option>
//                                     </select>

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Is Best Selling</label>
//                                     <br />
//                                     <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                         <option value="">Nothing Selected</option>
//                                         <option value="">Yes</option>
//                                         <option value="">No</option>
//                                     </select>

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Is Upsell</label>
//                                     <br />
//                                     <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                         <option value="">Nothing Selected</option>
//                                         <option value="">Yes</option>
//                                         <option value="">No</option>
//                                     </select>

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Sale Price</label>
//                                     <input type="text" placeholder='Sale Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

//                                     <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
//                                     <input type="text" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
//                                 </div>
//                             </div>
//                             {/* description */}
//                             <div className="mt-5 col-span-3">
//                                 <label className="text-[16px] font-semibold block mb-2">Description</label>

//                                 {/* Toolbar */}
//                                 <div className="flex gap-2 mb-3">
//                                     <button
//                                         type="button"
//                                         onClick={() => editor.chain().focus().toggleBold().run()}
//                                         className="px-3 py-1 border rounded-md"
//                                     >
//                                         Bold
//                                     </button>
//                                     <button
//                                         type="button"
//                                         onClick={() => editor.chain().focus().toggleItalic().run()}
//                                         className="px-3 py-1 border rounded-md"
//                                     >
//                                         Italic
//                                     </button>
//                                     <button
//                                         type="button"
//                                         onClick={() => editor.chain().focus().toggleUnderline().run()}
//                                         className="px-3 py-1 border rounded-md"
//                                     >
//                                         Underline
//                                     </button>
//                                     <button
//                                         type="button"
//                                         onClick={() => editor.chain().focus().toggleStrike().run()}
//                                         className="px-3 py-1 border rounded-md"
//                                     >
//                                         Strike
//                                     </button>
//                                 </div>

//                                 {/* Editor Content */}
//                                 <div className="border border-gray-300 rounded-md bg-white p-2 h-48">
//                                     <EditorContent editor={editor} />
//                                 </div>
//                             </div>



//                             <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
//                         </form>

//                     </div>
//                 </section>
//             </div>
//         </div>
//     )
// }





import React, { useState, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Testing from '../Common/Testing';

export default function AddProduct() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
    });

    // State for all three image inputs
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    // Refs for the hidden file inputs
    const fileInputRef1 = useRef(null);
    const fileInputRef2 = useRef(null);
    const fileInputRef3 = useRef(null);

    // Handle file input change for all images
    const handleFileChange = (e, setterFunction) => {
        const file = e.target.files[0];
        if (file) {
            setterFunction(URL.createObjectURL(file));  // Create an object URL for the selected image
        }
    };

    // Trigger file input click for each image
    const handleImageClick = (ref) => {
        ref.current.click();
    };

    return (
        <div className='max-w-full grid grid-cols-[20%_auto]'>

            <Testing />

            <div className='absolute top-[19%] left-[25%] py-5 lg:w-[70%] mx-auto bg-white'>
                <section className='mt-5 max-w-full rounded-md' id='addProduct'>

                    <div>
                        <form className='p-2'>
                            <div className='grid grid-cols-3 gap-5'>
                                <div className='flex flex-col gap-1'>
                                    {/* Image 1 */}
                                    <label htmlFor="categoryImage" className='text-[16px] font-semibold'>Category Image</label>
                                    <div className='h-39 border border-gray-300 relative'>
                                        <div
                                            onClick={() => handleImageClick(fileInputRef1)}
                                            className='w-full h-full flex items-center justify-center bg-gray-200 cursor-pointer'
                                        >
                                            {image1 ? (
                                                <img src={image1} alt="Selected" className="w-[100px] h-[100px] object-cover" />
                                            ) : (
                                                <span className="text-gray-500">Click to select image</span>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            ref={fileInputRef1}
                                            onChange={(e) => handleFileChange(e, setImage1)}
                                        />
                                    </div>

                                    {/* Image 2 */}
                                    <label htmlFor="categoryImage2" className='text-[16px] font-semibold p-1'>Category Image 2</label>
                                    <div className='h-39 border border-gray-300 relative'>
                                        <div
                                            onClick={() => handleImageClick(fileInputRef2)}
                                            className='w-full h-full flex items-center justify-center bg-gray-200 cursor-pointer'
                                        >
                                            {image2 ? (
                                                <img src={image2} alt="Selected" className="w-[100px] h-[100px] object-cover" />
                                            ) : (
                                                <span className="text-gray-500">Click to select image</span>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            ref={fileInputRef2}
                                            onChange={(e) => handleFileChange(e, setImage2)}
                                        />
                                    </div>

                                    {/* Image 3 */}
                                    <label htmlFor="categoryImage3" className='text-[16px] font-semibold p-1'>Category Image 3</label>
                                    <div className='h-39 border border-gray-300 relative'>
                                        <div
                                            onClick={() => handleImageClick(fileInputRef3)}
                                            className='w-full h-full flex items-center justify-center bg-gray-200 cursor-pointer'
                                        >
                                            {image3 ? (
                                                <img src={image3} alt="Selected" className="w-[100px] h-[100px] object-cover" />
                                            ) : (
                                                <span className="text-gray-500">Click to select image</span>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            ref={fileInputRef3}
                                            onChange={(e) => handleFileChange(e, setImage3)}
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Product Name</label>
                                    <input type="text" placeholder='Product Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                    <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Category </label>
                                    <br />
                                    <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                        <option value="">Select Category</option>
                                        <option value="">Mobile Phones</option>
                                        <option value="">Leptops</option>                                         <option value="">Men's Wear</option>
                                        <option value="">Women's Wear</option>
                                    </select>

                                    <label htmlFor="" className='text-[16px] font-semibold'>Select Meterial</label>
                                    <br />
                                    <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Neem</option>
                                        <option value="">Babbul</option>
                                        <option value="">Neem</option>
                                        <option value="">Babbul</option>
                                    </select>

                                    <label htmlFor="" className='text-[16px] font-semibold'>Select Product Type</label>
                                    <br />
                                    <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Featured</option>
                                        <option value="">New Arrival</option>
                                        <option value="">OnSale</option>
                                    </select>

                                    <label htmlFor="" className='text-[16px] font-semibold'>Is Top Rated</label>
                                    <br />
                                    <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Yes</option>
                                        <option value="">No</option>
                                    </select>


                                    <label htmlFor="" className='text-[16px] font-semibold'>Actual Price</label>
                                    <input type="text" placeholder='Actual Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                    <label htmlFor="" className='text-[16px] font-semibold'>Total In Stocks</label>
                                    <input type="text" placeholder='Total In Stocks' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                                </div>


                                <div>
                                    <label htmlFor="" className='text-[16px] font-semibold'>Select Parent Category</label>
                                    <br />
                                    <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Mobile Phones</option>
                                        <option value="">Leptops</option>
                                        <option value="">Men's Wear</option>
                                        <option value="">Women's Wear</option>
                                    </select>

                                    <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Sub Category</label>
                                    <br />
                                    <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Neem</option>
                                        <option value="">Babbul</option>
                                        <option value="">Neem</option>
                                        <option value="">Babbul</option>
                                    </select>

                                    <label htmlFor="" className='text-[16px] font-semibold'>Select Color</label>
                                    <br />
                                    <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Red</option>
                                        <option value="">Green</option>
                                        <option value="">Blue</option>
                                    </select>

                                    <label htmlFor="" className='text-[16px] font-semibold'>Is Best Selling</label>
                                    <br />
                                    <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Yes</option>
                                        <option value="">No</option>
                                    </select>

                                    <label htmlFor="" className='text-[16px] font-semibold'>Is Upsell</label>
                                    <br />
                                    <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                        <option value="">Nothing Selected</option>
                                        <option value="">Yes</option>
                                        <option value="">No</option>
                                    </select>

                                    <label htmlFor="" className='text-[16px] font-semibold'>Sale Price</label>
                                    <input type="text" placeholder='Sale Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                    <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                                    <input type="text" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                                </div>
                            </div>
                            {/* description */}
                            <div className="mt-5 col-span-3">
                                <label className="text-[16px] font-semibold block mb-2">Description</label>

                                {/* Toolbar */}
                                <div className="flex gap-2 mb-3">
                                    <button
                                        type="button"
                                        onClick={() => editor.chain().focus().toggleBold().run()}
                                        className="px-3 py-1 border rounded-md"
                                    >
                                        Bold
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => editor.chain().focus().toggleItalic().run()}
                                        className="px-3 py-1 border rounded-md"
                                    >
                                        Italic
                                    </button>
                                    <button
                                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                                        className="px-3 py-1 border rounded-md"
                                    >
                                        Underline
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => editor.chain().focus().toggleStrike().run()}
                                        className="px-3 py-1 border rounded-md"
                                    >
                                        Strike
                                    </button>
                                </div>

                                {/* Editor Content */}
                                <div className="border border-gray-300 rounded-md bg-white p-2 h-48">
                                    <EditorContent editor={editor} />
                                </div>
                            </div>



                            <button type="submit" className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>
                                Add Category
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}




