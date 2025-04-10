import React from 'react'

export default function Footer() {
    return (
        // <div className=''>

        //     <div className='fixed lg:right-[-0.75%] right-0 bottom-1 max-w-[1300px] lg:w-[1300px]'>

        //         <footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-700 ">
        //             <div class="w-[100%] mx-auto p-4 md:flex md:items-center md:justify-between">
        //                 <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
        //                 </span>
        //                 <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">

        //                    <li>
        //                         <a href="#" class="hover:underline">Contact</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </footer>
        //     </div>
        // </div>

        <div >
            <div className='max-w-[1560px] grid grid-cols-[20%_auto] '>

                <div>
                    {/* Fisrt div Blank */}
                </div>

                {/* Second Div Footer Start */}
                <footer class="bg-white  dark:bg-gray-100">
                    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-700">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                        </span>
                        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="#" class="hover:underline">Design By WsCube Tech</a>
                            </li>
                        </ul>
                    </div>
                </footer>

            </div>
        </div>
    )
}
